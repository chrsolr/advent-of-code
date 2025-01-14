public class _2015_02
{
    private int[] GetDimensions(string calculation)
    {
        var nums = calculation
            .Split('x')
            .Select(v => int.TryParse(v, out int result) ? result : (int?)null)
            .Where(v => v.HasValue)
            .Select(v => v.Value)
            .ToArray();

        return nums;
    }

    private int SolvePartOne(List<string> lines) =>
        lines.Aggregate(
            0,
            (memo, current) =>
            {
                int[] dimensions = GetDimensions(current);

                int length = dimensions[0];
                int width = dimensions[1];
                int height = dimensions[2];

                int sideOne = length * width;
                int sideTwo = width * height;
                int sideThree = height * length;

                int lowest = Math.Min(sideOne, Math.Min(sideTwo, sideThree));

                int total = 2 * (sideOne + sideTwo + sideThree) + lowest;

                return memo + total;
            }
        );

    private int SolvePartTwo(List<string> lines) =>
        lines.Aggregate(
            0,
            (memo, current) =>
            {
                int[] dimensions = GetDimensions(current);

                int length = dimensions[0];
                int width = dimensions[1];
                int height = dimensions[2];

                var sortedSides = new[] { length, width, height }.OrderBy(x => x).ToArray();

                int shortSideOne = sortedSides[0];
                int shortSideTwo = sortedSides[1];

                int ribbon = shortSideOne * 2 + shortSideTwo * 2;
                int wrap = length * width * height;
                int total = wrap + ribbon;

                return memo + total;
            }
        );

    public void runAsync()
    {
        const string inputFileDate = "2015-02";

        var lines = FileUtils.GetInputData(inputFileDate);

        if (lines.Count <= 0)
        {
            Console.WriteLine("No input data found for this day");
            return;
        }

        var answerPartOne = SolvePartOne(lines);
        var answerPartTwo = SolvePartTwo(lines);

        Utils.PrintResult(answerPartOne, 2015, 2, 1);
        Utils.PrintResult(answerPartTwo, 2015, 2, 2);
    }
}

