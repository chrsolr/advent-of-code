public class _2015_06
{
    public bool[,] CreateMatrix(
        int gridRowAmount = 1000,
        int gridColAmount = 1000,
        bool value = false
    )
    {
        // var grid = Enumerable
        //     .Range(0, gridRowAmount)
        //     .Select(_ => Enumerable.Repeat(value, gridColAmount).ToArray())
        //     .ToArray();

        var grid = new bool[gridRowAmount, gridColAmount];
        for (int i = 0; i < gridRowAmount; i++)
        {
            for (int j = 0; j < gridColAmount; j++)
            {
                grid[i, j] = value;
            }
        }

        return grid;
    }

    private dynamic GetInstructions(string line)
    {
        string[] instructions = line.Split(' ');

        if (instructions.Length == 5)
        {
            return new
            {
                Action = instructions[0],
                Direction = instructions[1],
                From = instructions[2],
                To = instructions[4],
            };
        }

        return new
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

        bool[,] matrix = new bool[gridRowAmount, gridColAmount];

        foreach (var line in lines)
        {
            var instructions = GetInstructions(line);
            var action = instructions.Action;
            var direction = instructions.Direction;
            var from = instructions.From;
            var to = instructions.To;

            var f = ((string)from).Split(',').Select(v => int.Parse(v)).ToArray();
            var t = ((string)to).Split(',').Select(v => int.Parse(v)).ToArray();

            (int xf, int yf) = (f[0], f[1]);
            (int xt, int yt) = (t[0], t[1]);

            for (int row = xf; row <= xt; row++)
            {
                for (int col = yt; col <= yt; col++)
                {
                    var isLightTurnedOn = matrix[row, col];
                    if (action == "toggle")
                    {
                        matrix[row, col] = !isLightTurnedOn;
                        count += !isLightTurnedOn ? 1 : -1;
                        continue;
                    }

                    if (!isLightTurnedOn && direction == "on")
                    {
                        matrix[row, col] = true;
                        count++;
                        continue;
                    }
                    if (isLightTurnedOn && direction == "off")
                    {
                        matrix[row, col] = false;
                        count--;
                    }
                }
            }
        }

        return count;
    }

    private int SolvePartTwo(List<string> lines)
    {
        return 0;
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

