/* Three variables which hold three names */
var name1 = 'Grace';
var name2 = 'Clinton';
var name3 = 'Jessica';

/* A prompt for users to input the three names */
var names = prompt("Please enter my, the instructor and assistance's names.");

/* The variables to count the number of characters in each name */
var n1 = name1.length; 
var n2 = name2.length;
var n3 = name3.length;

/* If else statement to determine which name is the longest */
if (n1 > n2 && n1 > n3) {
    console.log(name1 + ' has the longest name.');
}
else if (n2 === n3) {
    console.log(name2 + ' and ' + name3 + ' tie for the longest name.');
}
else {
    console.log('All three names ' + name1 + ', ' + name2 + ' and ' + name3 + ' are the same length.');
}

/* The statement to print the output on the page */
var output = name2 + ' and ' + name3 + ' tie for the longest name.';
console.log(output);

