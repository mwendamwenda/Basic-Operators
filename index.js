/*
console.log('amazing');

// math operators
const now = 2037;
const ageMwenda = now - 1992;
const ageTokiti =now - 1999;

console.log(ageMwenda,ageTokiti);
console.log(ageMwenda * 2 ,ageMwenda /2, 2**3);

//2**3 means 2 X 2 X2(exponential);
const firstName = 'Benson';
const secondName = 'mwenda';
console.log(firstName +  ' ' + secondName);//we use the empty string to create space between two values

// assignment operators
let x = 10 + 5;
x += 10; // x = x +10
x*= 4;
x ++;
x --;
console.log(x);

//comparison operators

console.log(ageMwenda > ageTokiti);
console.log(ageTokiti >= 18);

const isFullAge = ageTokiti >= 18;

console.log(now -1992 > now - 1999);
*/

//operators precedence

const now = 2037;
const ageMwenda = now - 1992;
const ageTokiti =now - 1999;

console.log(now -1992 > now - 1999);

//console.log(25 - 10 -5 );//excuted from left to right

let x ,y;
x = y = 25 -10 -5 ;
console.log(x ,y);
//const averageAge1 = ageMwenda + ageTokiti / 2
//console.log(ageMwenda ,ageTokiti ,averageAge);//this does not make sense since the average is higher than the two ages,and thats where paranthesis or grouping

const averageAge = (ageMwenda + ageTokiti)/2
console.log(ageMwenda,ageTokiti ,averageAge)