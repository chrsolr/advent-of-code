// See https://aka.ms/new-console-template for more information

if (args.Length > 0)
{
    foreach (var arg in args)
    {
        Console.WriteLine($"Argument: {arg}");
    }
}
else
{
    Console.WriteLine("No arguments");
}

await Task.Delay(5000);

Console.WriteLine("Hello, World!");

return 0;
