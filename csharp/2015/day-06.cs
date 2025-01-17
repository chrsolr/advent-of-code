class Instructions
{
    public string Action { get; set; }
    public string Direction { get; set; }
    public string From { get; set; }
    public string To { get; set; }
}

public class _2015_06
{
    public T[][] CreateMatrix<T>(int gridRowAmount, int gridColAmount, T value)
    {
        return Enumerable
            .Range(0, gridRowAmount)
            .Select(_ => Enumerable.Repeat(value, gridColAmount).ToArray())
            .ToArray();
    }

    private Instructions GetInstructions(string line)
    {
        string[] instructions = line.Split(' ');

        if (instructions.Length == 5)
        {
            return new Instructions
            {
                Action = instructions[0],
                Direction = instructions[1],
                From = instructions[2],
                To = instructions[4],
            };
        }

        return new Instructions
        {
            Action = instructions[0],
            Direction = "N/A",
            From = instructions[1],
            To = instructions[3],
        };
    }

    private int SolvePartOne(List<string> lines, int gridRowAmount = 1000, int gridColAmount = 1000)
    {
        int count = 0;

        bool[][] matrix = CreateMatrix<bool>(gridRowAmount, gridColAmount, false);

        foreach (string line in lines)
        {
            var instructions = GetInstructions(line);
            var action = instructions.Action;
            var direction = instructions.Direction;
            var from = instructions.From;
            var to = instructions.To;

            var fromCoords = ((string)from).Split(',').Select(v => int.Parse(v)).ToArray();
            var toCoords = ((string)to).Split(',').Select(v => int.Parse(v)).ToArray();

            (int fromX, int fromY) = (fromCoords[0], fromCoords[1]);
            (int toX, int toY) = (toCoords[0], toCoords[1]);

            for (int row = fromX; row <= toX; row++)
            {
                for (int col = fromY; col <= toY; col++)
                {
                    var isLightTurnedOn = matrix[row][col];
                    if (action == "toggle")
                    {
                        matrix[row][col] = !isLightTurnedOn;
                        count += !isLightTurnedOn ? 1 : -1;
                        continue;
                    }

                    if (!isLightTurnedOn && direction == "on")
                    {
                        matrix[row][col] = true;
                        count++;
                        continue;
                    }
                    if (isLightTurnedOn && direction == "off")
                    {
                        matrix[row][col] = false;
                        count--;
                    }
                }
            }
        }

        return count;
    }

    private int SolvePartTwo(List<string> lines, int gridRowAmount = 1000, int gridColAmount = 1000)
    {
        int[][] matrix = CreateMatrix<int>(gridRowAmount, gridColAmount, 0);

        foreach (string line in lines)
        {
            var instructions = GetInstructions(line);
            var action = instructions.Action;
            var direction = instructions.Direction;
            var from = instructions.From;
            var to = instructions.To;

            var fromCoords = ((string)from).Split(',').Select(v => int.Parse(v)).ToArray();
            var toCoords = ((string)to).Split(',').Select(v => int.Parse(v)).ToArray();

            (int fromX, int fromY) = (fromCoords[0], fromCoords[1]);
            (int toX, int toY) = (toCoords[0], toCoords[1]);

            for (int row = fromX; row <= toX; row++)
            {
                for (int col = fromY; col <= toY; col++)
                {
                    var currentBrightness = matrix[row][col];

                    if (action == "toggle")
                    {
                        matrix[row][col] = 2 + currentBrightness;
                    }

                    if (direction == "on")
                    {
                        matrix[row][col] += 1;
                    }

                    if (direction == "off" && currentBrightness > 0)
                    {
                        matrix[row][col] -= 1;
                    }
                }
            }
        }

        return matrix.Aggregate(
            0,
            (rowTotal, rowValues) =>
                rowTotal + rowValues.Aggregate(0, (colsTotal, colsValues) => colsTotal + colsValues)
        );
    }

    public void run()
    {
        const string inputFileDate = "2015-06";

        var lines = FileUtils.GetInputData(inputFileDate);

        if (lines.Count <= 0)
        {
            Console.WriteLine("No input data found for this day");
            return;
        }

        var answerPartOne = SolvePartOne(lines);
        var answerPartTwo = SolvePartTwo(lines);

        Utils.PrintResult(answerPartOne, 2015, 6, 1);
        Utils.PrintResult(answerPartTwo, 2015, 6, 2);
    }
}
