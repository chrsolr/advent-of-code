using System.Security.Cryptography;
using System.Text;

public class _2015_04
{
    private string CalculateMD5Hash(string input)
    {
        using (MD5 md5 = MD5.Create())
        {
            byte[] inputBytes = Encoding.UTF8.GetBytes(input);
            byte[] hashBytes = md5.ComputeHash(inputBytes);
            StringBuilder sb = new StringBuilder();
            foreach (byte b in hashBytes)
            {
                sb.Append(b.ToString("x2"));
            }
            return sb.ToString();
        }
    }

    private int Solve(string secret, string searchTerm)
    {
        bool matched = false;
        int count = 0;

        while (!matched)
        {
            count++;
            matched = CalculateMD5Hash(secret + count).StartsWith(searchTerm);
        }

        return count;
    }

    public void run()
    {
        const string inputFileDate = "2015-04";

        var lines = FileUtils.GetInputData(inputFileDate);

        if (lines.Count <= 0)
        {
            Console.WriteLine("No input data found for this day");
            return;
        }

        string secret = lines[0];

        var answerPartOne = Solve(secret, "00000");
        var answerPartTwo = Solve(secret, "000000");

        Utils.PrintResult(answerPartOne, 2015, 4, 1);
        Utils.PrintResult(answerPartTwo, 2015, 4, 2);
    }
}

