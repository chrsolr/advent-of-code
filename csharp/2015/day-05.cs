public class _2015_05
{
    private readonly Dictionary<string, string> vowels;
    private readonly Dictionary<string, string> exclusion;

    public _2015_05()
    {
        vowels = new Dictionary<string, string>
        {
            { "a", "a" },
            { "e", "e" },
            { "i", "i" },
            { "o", "o" },
            { "u", "u" },
        };

        exclusion = new Dictionary<string, string>
        {
            { "ab", "ab" },
            { "cd", "cd" },
            { "pq", "pq" },
            { "xy", "xy" },
        };
    }

    private bool SolverPartOne(string line)
    {
        var amountOfVowelsFound = 0;
        var appearsTwice = false;

        for (int i = 0; i < line.Length; i++)
        {
            var value = line.Substring(i, 1);
            var nextValue = i + 1 == line.Length ? string.Empty : line.Substring(i + 1, 1);

            if (exclusion.ContainsKey($"{value}{nextValue}"))
            {
                return false;
            }

            if (amountOfVowelsFound < 3 && vowels.ContainsKey($"{value}"))
            {
                amountOfVowelsFound++;
            }

            if (!appearsTwice)
            {
                appearsTwice = value == nextValue;
            }

            if (amountOfVowelsFound == 3 && appearsTwice)
            {
                return true;
            }
        }

        return false;
    }

    private bool SolverPartTwo(string line)
    {
        bool hasPair = false;
        bool hasCharInBetweenPair = false;

        for (int i = 0; i < line.Length; i++)
        {
            var first = line.Substring(i, 1);
            var second = i + 1 < line.Length ? line.Substring(i + 1, 1) : string.Empty;
            var thrid = i + 2 < line.Length ? line.Substring(i + 2, 1) : string.Empty;
            var key = $"{first}{second}";

            if (i + 2 < line.Length && line.IndexOf(key, i + 2) != -1)
            {
                hasPair = true;
            }

            if (!hasCharInBetweenPair && first == thrid)
            {
                hasCharInBetweenPair = true;
            }

            if (hasPair && hasCharInBetweenPair)
            {
                return true;
            }
        }

        return false;
    }

    private int Solve(List<string> lines, Func<string, bool> solver)
    {
        return lines.Aggregate(0, (memo, current) => solver(current) ? memo + 1 : memo);
    }

    public void run()
    {
        const string inputFileDate = "2015-05";

        var lines = FileUtils.GetInputData(inputFileDate);

        if (lines.Count <= 0)
        {
            Console.WriteLine("No input data found for this day");
            return;
        }

        var answerPartOne = Solve(lines, SolverPartOne);
        var answerPartTwo = Solve(lines, SolverPartTwo);

        Utils.PrintResult(answerPartOne, 2015, 5, 1);
        Utils.PrintResult(answerPartTwo, 2015, 5, 2);
    }
}
