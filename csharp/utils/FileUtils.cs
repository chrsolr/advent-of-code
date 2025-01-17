public class FileUtils
{
    public static List<string> GetInputData(string date)
    {
        if (string.IsNullOrEmpty(date))
            throw new ArgumentNullException(nameof(date));

        var splited = date.Split('-');
        if (!splited.Any())
            throw new ArgumentException("Invalid date format", nameof(date));

        return ReadFileLineByLine(Path.Combine("files", splited.First(), date));
    }

    public static List<string> ReadFileLineByLine(string filepath)
    {
        try
        {
            return File.ReadLines(filepath).ToList();
        }
        catch (FileNotFoundException ex)
        {
            throw new FileNotFoundException($"Input file not found: {filepath}", ex);
        }
        catch (IOException ex)
        {
            throw new IOException($"Error reading file: {filepath}", ex);
        }
    }
}
