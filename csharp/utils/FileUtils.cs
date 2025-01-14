public class FileUtils
{
    public static List<string> GetInputData(string date)
    {
        return FileUtils.ReadFileLineByLine($"../files/{date}");
    }

    public static List<string> ReadFileLineByLine(string filepath)
    {
        var lines = new List<string>();

        using (var reader = new StreamReader(filepath))
        {
            string line;

            while ((line = reader.ReadLine()) != null)
            {
                lines.Add(line);
            }
        }

        return lines;
    }
}
