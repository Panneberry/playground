# playground
just for fun 

# Note new things I've learn

## What is the "e" Character in JavaScript?
In JavaScript, the "e" character is used in big numbers. For example, 1e3 means 1 with 3 zeroes after it, which is 1000!

When we use a special function called **parseFloat**, it can understand the "e" character. For instance, parseFloat("2.5e3") is like saying "2.5 times 1000," which is 2500.

But if we use "e" in a strange way, like parseFloat("2.5e"), the function doesn't understand it and stops, giving us just 2.5.

So, while we can type "e" into a number box, it might not always work as we expect! To make sure it behaves the way we want, we might need to be careful and check our numbers.