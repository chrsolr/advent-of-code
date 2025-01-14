// See https://aka.ms/new-console-template for more information

var map = new Dictionary<string, Action>
{
    { "2015-01", () => new _2015_Day01().runAsync() },
};

if (args.Length <= 0)
{
    Console.WriteLine(
        "No arguments provided. Please provide a year and day as arguments in the format of 'YYYY-DD'."
    );

    return 0;
}

string date = args[0];

if (map.ContainsKey(date) == false)
{
    Console.WriteLine($"Invalid date argument: {date}");

    return 0;
}

Console.WriteLine($"Date argument: {date}");

map[date]();

Console.WriteLine("***************************************************");

return 0;
