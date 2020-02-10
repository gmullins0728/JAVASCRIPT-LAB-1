/* A prompt for users to input the three names */

var name1 = prompt("This program identifies the longest of three names.\nPlease enter the first name: ");
var name2 = prompt("Enter a second name: ");
var name3 = prompt("Finally, enter a third name: ");

var names = [name1, name2, name3];

/* Declare a variable to hold largest value.  Initialize it to 0 for now (since we don't know yet)*/
var maxLength = 0;

/* Find the maxLength */
for (var i = 0; i < names.length; i++){
    if (names[i].length > maxLength || names[i].length == maxLength)
        maxLength = names[i].length;
}

/* Declare an empty array to hold names with length = maxLength */
var maxNames = [];

/* compare the length of each name to maxLength.  If length is same, store in maxNames. */
for (var i = 0; i < names.length; i++) {
    if (names[i].length == maxLength)
    {
        maxNames.push(names[i]);
    }
}


/* Determine how many names were put into the maxNames array to set the correct output. */
var output = "";

switch(maxNames.length) {
    case 1:
        output = maxNames[0] + ' has the longest name.';
    break;
    
    case 2:
        output = maxNames[0] + ' and ' + maxNames[1] +  ' tie for the longest name.';
    break;
    
    case 3:
        output = 'All three names ' + maxNames[0] + ', ' + maxNames[1] + ' and ' + maxNames[2] + ' are the same length.';
    break;
    default:
        output = 'Something happened.  Could not find longest name.';
}
console.log(output);

