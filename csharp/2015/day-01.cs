/**
 * Day 01
 * Instructions: https://adventofcode.com/2015/day/1
 */
internal class _2015_Day01
{
    private int calculateFloor(List<char> chars) =>
        chars.Aggregate(0, (memo, current) => memo += current == '(' ? 1 : -1);

    private int calculatePosition(List<char> chars, int total = 0, int position = 0)
    {
        if (chars.Count == 0 || total == -1)
        {
            return position;
        }

        char c = chars.FirstOrDefault();

        int currentTotal = total + (c == '(' ? 1 : -1);

        return calculatePosition(chars.Skip(1).ToList(), currentTotal, position + 1);
    }

    private int SolvePartOne(List<char> inputData)
    {
        return calculateFloor(inputData);
    }

    private int SolvePartTwo(List<char> inputData)
    {
        return calculatePosition(inputData);
    }

    public void runAsync()
    {
        const string inputFileDate = "2015-01";

        var inputData = FileUtils.GetInputData(inputFileDate).FirstOrDefault();

        if (inputData == null)
        {
            Console.WriteLine("No input data found for this day");
            return;
        }

        List<char> data = inputData.Trim().ToList();

        var answerPartOne = SolvePartOne(data);
        var answerPartTwo = SolvePartTwo(data);

        Utils.PrintResult(answerPartOne, 2015, 1, 1);
        Utils.PrintResult(answerPartTwo, 2015, 1, 2);
    }
}
