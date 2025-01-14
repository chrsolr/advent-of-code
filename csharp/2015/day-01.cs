/**
 * Day 01
 * Instructions: https://adventofcode.com/2015/day/1
 */
internal class _2015_Day01
{
    public static int SolvePartOne(List<string> inputData)
    {
        return inputData.Count;
    }

    public static int SolvePartTwo(List<string> inputData)
    {
        return inputData.Count;
    }

    public void runAsync()
    {
        const string inputFileDate = "2015-01";

        var inputData = FileUtils.GetInputData(inputFileDate);

        var answerPartOne = SolvePartOne(inputData);
        var answerPartTwo = SolvePartTwo(inputData);

        Utils.PrintResult(answerPartOne, 2015, 1, 1);
        Utils.PrintResult(answerPartTwo, 2015, 1, 2);
    }
}
