
console.log("hellow world");
    
// sqaure of number
function myfun(a=3){
     let sum=a**3;
     console.log(sum);
}
myfun();
//sum of two argument
let twoNum=function(a,b){
    let sum1=a+b;
console.log(sum1);
}
twoNum(50,50);
//greater number 
function greater(a,b){
    if (a>b){
        console.log("b is smaller :"+b);
    }
    else{
        console.log("a is smaller :"+a);
    }
}
greater(15,12)
//age
function calculateage(birthYear,currentYear){
    let sum=currentYear-birthYear;
    console.log("your age is :"+sum);
}
calculateage(1955,2023)
calculateage(2002,2023)
calculateage(2000,2023)
//sum of array
function array(...a){
let sum=0;
for (let arrays of a ) sum +=arrays;
return sum;

}
console.log(array(1,2,3,4,5,10));
//spread operator
