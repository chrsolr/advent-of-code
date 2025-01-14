public class Utils
{
    public static void PrintResult(int answer, int year, int day, int part)
    {
        Console.WriteLine(
            "***************************************************"
        );
        Console.WriteLine(
            $"Advent of Code: Day {day} of {year} (Part #{part})"
        );
        Console.WriteLine(
            $"Instruction @: https://adventofcode.com/{year}/day/{day}"
        );
        Console.WriteLine($"Total Answer Score: {answer}");
    }

    public static void PrintResult(string answer, int year, int day, int part)
    {
        Console.WriteLine(
            "***************************************************"
        );
        Console.WriteLine(
            $"Advent of Code: Day {day} of {year} (Part #{part})"
        );
        Console.WriteLine(
            $"Instruction @: https://adventofcode.com/{year}/day/{day}"
        );
        Console.WriteLine($"Total Answer Score: {answer}");
    }
}
