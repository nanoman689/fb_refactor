# fiizzbuzzrefactor

fiizz buzz refactor

When the page loads, the user should be prompted to supply a number. The easiest way to do this would be with the prompt() function, but you should also feel free to create a simple text input with text telling the user to input a number.

You’ll need to write one named function that takes an integer as argument, and then counts from 1 to the argument value, substituting “fizz”, “buzz”, and “fizzbuzz” accordingly.

You’ll need to convert the value the user supplies from a string to a number. Remember that the value that you get from prompt() or the val() on your form will by default be a string. To convert this to an integer you can use the + operator to convert a string to an integer. For instance, if you had the string “22”, you could convert that to a number with +”22”.

Note that if you try to convert something like "this is a string" to an integer with +"this is a string", it will evaluate to NaN. Your app should ensure that the user supplied value does not evaluate to NaN. If it does, you should supply a message telling them they need to supply a number.

Optionally, you can also write code to ensure that the user has not supplied a decimal value. For an easy way to do this, check out this answer on Stack Overflow.

DO NOT spend any time thinking about design for this app. Like the first version, the goal here is not to create a pretty app, but instead to hone your JavaScript skills.

As usual, use Git to store your changes. When you’ve completed this assignment, push it up to GitHub pages, and share a link with your mentor and fellow students.