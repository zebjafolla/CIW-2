// document.anchors[3].href = 'https://www.google.com';
// for (i = 0; i < 1; i++)
// {
//     console.log(document.anchors[i].name);
// }
// document.write()

// Write a function that gets all the anchor elements in the document and logs their name attribute and href attribute to the console.
// function attributes()
// {
//     for (i = 0; i < document.anchors.length; i++)
//     {
//         console.log(document.anchors[i].name + document.anchors[i].href);
//     }
// }

// Strings:
// Write a function that takes a string and returns a new string with all vowels removed.

    // var str = "hello there nice to meet you";
    // var
    
// Write a function that takes a string and returns a new string with the first letter of each word capitalized.
// var text = "hello there it's really nice to meet you!";
// var newArray = text.split(" ");
// for (i = 0; i < newArray.length; i++)
// {
//     let text1 = newArray[i].slice(1);
//     newArray[i] = newArray[i].charAt(0).toUpperCase() + text1;
// }
// console.log(newArray);
// const mySentence = "freeCodeCamp is an awesome resource";

// const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, function (goob){goob.toUpperCase()});
// console.log(finalSentence);



// Write a function that takes a string and returns a new string with the words reversed. For example, "Hello World" should be converted to "olleH dlroW".
// Regular expressions:
// Write a function that takes a string and returns true if it is a valid email address, and false otherwise.
// Write a function that takes a string and returns a new string with all occurrences of a specified pattern replaced with a specified replacement string.
// Write a function that takes a string and returns an array of all the words that are at least four characters long.
// Arrays:
// Write a function that takes an array of numbers and returns the average of all the numbers.
// Write a function that takes an array of strings and returns a new array with all the strings sorted in alphabetical order.
// Write a function that takes an array of objects and returns a new array with all the objects sorted by a specified property in ascending order.
// Date object:
// Write a function that takes a date string in the format "YYYY-MM-DD" and returns a new date object.
// Write a function that takes a date object and returns a string in the format "DD MMM YYYY".
// Write a function that takes two date objects and returns the number of days between the two dates.
// Math object:
// Write a function that takes a number and returns the square root of the number.
// Write a function that takes a number and returns the number rounded to the nearest integer.
// Write a function that takes two numbers and returns the larger of the two numbers.
// split this
// "The quick brown fox jumps over the lazy dog."
// var text = "The quick brown fox jumps over the lazy dog.";
// var arr = text.split(" ");
// console.log(arr);

// // split this
// "abcdefghijklmnopqrstuvwxyz"
// var text = "abcdefghijklmnopqrstuvwxyz";
// var newArr = text.split(".");
// console.log(newArr);

// // split this
// "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
// var text = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
// var newArr = text.split(",");
// console.log(newArr);

// split into an array of lines
// "line1\nline2\nline3"
// let text = "line1\nline2\nline3";
// var newArr = text.split("\n");
// console.log(newArr);

// extract the word quick
// "The quick brown fox jumps over the lazy dog."
// var text = "The quick brown fox jumps over the lazy dog.";
// var pos = text.search("quick");
// console.log(pos);
// var quick = text.slice(pos, 9);
// console.log(quick);

// OR

// var newText = text.match("quick");
// console.log(newText);
// extract the word def
// "abcdefghijklmnopqrstuvwxyz"
// var text  = "abcdefghijklmnopqrstuvwxyz";
// let pos = text.search("def");
// var newText = text.slice(pos, pos + 3);
// console.log(newText);


// extract the numbers 4 and 5
// "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
// var text = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10";
// var posof4 = text.search("4");
// var posof5 = text.search("5");
// posof4 = text.slice(posof4, posof4 + 1);
// posof5 = text.slice(posof5, posof5 + 1);
// var newText = [posof4, posof5];
// console.log(newText);


// slice line 2 and line 3
// "line1\\nline2\nline3"
// let text = "line1\nline2\nline3";
// let result = text.slice(text.search("line1"), text.search("line2") + 5);
// console.log(result);

// let text = "line1\nline2\nline3";
// let result = text.slice(text.indexOf("line1"), text.indexOf("line2") + 5).replace(new RegExp("\ng", ""));
// console.log(result);

// Write a regular expression that matches the string "cat" and use the search() method to find the first occurrence of "cat" in the following string:
// "The quick brown cat jumps over the lazy dog."
// let text = "The quick brown cat jumps over the lazy dog.";
// console.log(text.search(/cat/g));

// Write a regular expression that matches the string "cat" or "dog" and use the search() method to find the first occurrence of either "cat" or "dog" in the following string: "The quick brown cat jumps over the lazy dog."
// console.log(text.search(/dog|cat/));


// Write a regular expression that matches the string "cat" or "dog" and use the search() method to find the first occurrence of either "cat" or "dog" in the following string: "A cat, a dog, and a mouse."
// let text = "A cat, a dog, and a mouse."
// console.log(text.search(/dog|cat/));

// Write a regular expression that matches any three-letter word and use the search() method to find the first occurrence of a three-letter word in the following string: "The quick brown cat jumps over the lazy dog."
// let text = "The quick brown cat jumps over the lazy dog.";
// console.log(text.search(/\b\w{6}\b/));


// 3. Write a regular expression that matches a string that contains a single vowel (a, e, i, o, or u).

// let simon3 = ["Hello there nice to meet you", "Have you had a nice day?", "Is the 4th of July, or is the year 223?"];

// simon3.indexOf("a")
// for(i = 0; i < simon3.length; i++)
// {
//     console.log(simon3[i].match(/a|e|i|o|u/));
// }



// 4. Write a regular expression that matches a string that consists of two or more words, separated by a single space.

// let simon4 = ["8768768678678 Hello there nice to meet you.", "Have you had a nice day?", "Is the 4th of July, or is the year 223?"];
// console.log(simon4.join(", "));
// stringSimon4 = simon4.join(", ");
// console.log(stringSimon4.match(/\b\w+\b \b\w+\b/));


// 5. Write a regular expression that matches a string that contains a number with a decimal point, followed by one or more digits.

let simon5 = ["Hello there nice to meet you", "Have you had 1.34 nice day?", "Is the 4th of July, or is the year .3897798789?"]
let regex = /\s\d+\.\d+\s/;
for(i=0; i < simon5.length; i++)
{
    if(regex.test(simon5[i]) == true)
    {
        console.log(simon5[i]);
    }
}







