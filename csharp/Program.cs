if (args.Length > 0)
{
    foreach (var arg in args)
    {
        Console.WriteLine($"Argument: {arg}");
    }
}
else
{
    Console.WriteLine(
        "No arguments provided. Please provide a year and day as arguments in the format of 'YYYY-DD'."
    );
}

Console.WriteLine("Hello, World!");

return 0;
