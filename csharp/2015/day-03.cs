public class _2015_03
{
    private (int, int) UpdateCoordinates(dynamic direction, (int x, int y) coordinates)
    {
        return (0, 0);
    }

    private int SolvePartOne(List<char> directions)
    {
        return 0;
    }

    private int SolvePartTwo(List<char> directions)
    {
        return 0;
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

        Utils.PrintResult(answerPartOne, 2015, 2, 1);
        Utils.PrintResult(answerPartOne, 2015, 2, 2);
    }
}

