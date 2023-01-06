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

// code challenge
// 1st data
const markWeight = 78;
const markHeight = 1.69;
markBmi = (78)/1.69**2
console.log(markBmi);

const johnWeight = 92;
const johnHeight = 1.95;
johnBmi = (98)/1.95 **2;
console.log(johnBmi);

const markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi);

//2nd data
const markWeight1 = 95;
const markHeight1 = 1.88;
markBmi = (95)/1.88**2
console.log(markBmi);


const johnWeight1 = 85;
const johnHeight1 = 1.76;
johnBmi = (85)/1.76**2;
console.log(johnBmi);

const markHigherBmi1 = markBmi > johnBmi;
console.log(markHigherBmi);

// template literal

const firstName = 'milam';
const job = 'stuadent';
const birthYear = 1992;
const year = 2037;


const mwenda = "i'm" + firstName + ',a' +(year -birthYear) + 'years old' + ' '+ job+'!';
console.log(mwenda);

const mwendaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(mwendaNew);

console.log(`any regular string`);

// multiple lines strings
console.log('string with/n/')// using a backslash
console.log('string');

console.log(`string
multiple 
lines`)//using template literal we can ujust create multiple lines by hiting enter.
*/

const age = 16;
const isOldEnough = age >= 18;

if(age >= 18){
    console.log('peter can start driving license');
}else  {
    const yearsLeft = 18 - age;
    console.log(`peter is too young to start driving wait for ${yearsLeft} years.`);
}

const birthYear = 1991;
let centuary;
if (birthYear <= 2000){
     centuary = 20;
}else{
    centuary = 21;
}
console.log(centuary);