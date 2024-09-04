//1)
// console.log("Hello World");

//2)
// let a=prompt("Enter first number: ");
// let b=prompt("Enter second number: ");
// let a=9,b=4;
// let sum= parseInt(a)+parseInt(b);
// console.log("The sum of the numbers is: ", sum);

//3)
// const a=97;
// if(a%2===0)
//     console.log("The number is even.");
// else
//     console.log("The number is odd.");

//4)
// let a=8,b=3,c=100;
// if(a>b && a>c)
//     console.log("The largest number is ", a);
// else if(b>a && b>c)
//     console.log("The largest number is ", b);
// else
// console.log("The largest number is ",c);

//5)
// let a=10,f=1;
// for(let i=1; i<=a; i++)
//     f*=i;
// console.log("The factorial of ",a," is " ,f);


//7)
// for(let i=1; i<=100; i++){
//     if(i%3===0 && !(i%3===0 && i%5===0))
//         console.log("Fizz");
//     else if(i%5===0 && !(i%3===0 && i%5===0))
//         console.log("Buzz");
//     else if(i%3===0 && i%5===0)
//         console.log("FizzBuzz");
//     else
//     console.log(i);
// }

//9)
// const myName= "Sharanya";
// let count=0;
// for(let val of myName){
//     if(val ==='a' || val ==='e' || val ==='i' || val ==='o' || val ==='u' || val ==='A' || val ==='E' || val ==='I' || val ==='O' || val ==='U')
//         count++;
// }
// console.log(count);

//10)
// let sum=0;
// let arr=[10, 5, 14, 8, 12, 56];
// for(let val of arr){
//     sum+=val;
// }
// console.log("The sum is: "+ sum);

//6)
// const str= "malayalam";
// for(let i=0; i<str.length(); i++){
//     if()
// }

function getData(){
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let age= document.getElementById("age").value;
    document.getElementById("nameOut").value=name;
    document.getElementById("emailOut").value=email;
    document.getElementById("ageOut").value=age;
    if(age>= 18)
        document.getElementById("eligibility").value="Eligible to vote";
    else
    document.getElementById("eligibility").value="Not eligible to vote";
}
function removeData(){
    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("age").value=null;
    document.getElementById("nameOut").value=null;
    document.getElementById("emailOut").value=null;
    document.getElementById("ageOut").value=null;
    document.getElementById("eligibility").value=null;
}
