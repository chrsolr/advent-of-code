internal enum Direction
{
    Up = '^',
    Right = '>',
    Left = '<',
    Down = 'v',
}

public class _2015_03
{
    private (int, int) UpdateCoordinates(char direction, (int x, int y) coordinates)
    {
        switch (direction)
        {
            case '^':
                return (coordinates.x, (coordinates.y += 1));
            case '<':
                return ((coordinates.x += 1), coordinates.y);
            case '>':
                return ((coordinates.x -= 1), coordinates.y);
            case 'v':
                return (coordinates.x, (coordinates.y -= 1));
            default:
                return (coordinates.x, coordinates.y);
        }
    }

    private int SolvePartOne(List<char> directions)
    {
        var set = new HashSet<string> { "0,0" };
        var coordinates = (0, 0);

        foreach (char direction in directions)
        {
            coordinates = UpdateCoordinates(direction, coordinates);
            set.Add($"{coordinates.Item1},{coordinates.Item2}");
        }

        return set.Count;
    }

    private int SolvePartTwo(List<char> directions)
    {
        var set = new HashSet<string> { "0,0", "0,0" };
        var map = new Dictionary<string, (int x, int y)>
        {
            { "santa", (0, 0) },
            { "robot", (0, 0) },
        };

        for (int i = 0; i < directions.Count; i++)
        {
            char direction = directions[i];
            string key = i % 2 == 0 ? "santa" : "robot";

            (int, int) coordinates = UpdateCoordinates(direction, map[key]);

            map[key] = coordinates;

            set.Add($"{map[key].Item1},{map[key].Item2}");
        }

        return set.Count;
    }

    public void run()
    {
        const string inputFileDate = "2015-03";

        var directions = FileUtils.GetInputData(inputFileDate)[0].ToList();

        if (directions.Count <= 0)
        {
            Console.WriteLine("No input data found for this day");
            return;
        }

        var answerPartOne = SolvePartOne(directions);
        var answerPartTwo = SolvePartTwo(directions);

        Utils.PrintResult(answerPartOne, 2015, 3, 1);
        Utils.PrintResult(answerPartTwo, 2015, 3, 2);
    }
}

