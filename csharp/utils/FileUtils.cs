public class FileUtils
{
    public static List<string> GetInputData(string date)
    {
        var splited = date.Split('-');
        return FileUtils.ReadFileLineByLine($"../files/{splited.First()}/{date}");
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
