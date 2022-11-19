console.log("message form Second Java Script")
let email = 'harshil@gmail.com'
email = 'new@gmail.com'
console.log(email)

// function grinder() {
//     console.log('grinding..',item)
// }
// grinder('coffee')
// grinder('Tea')
// function add(num1,num2){
//  console.log(num1 + num2)
// }
// add(2,30)
// add(45,1)
// function changecolor(){
//     document.getElementById()
// }
// function cube(){
//     let num=document.getElementById('number').value;
//     let result= num *num*num;
    

// }


function changeColor(){
    document.getElementById('title').style.color = 'red';
}

let counter = 0;

function increment(){
    counter = counter + 1;
    document.getElementById('counter').innerHTML = counter;
}
function decrement(){
    counter = counter - 1;
    document.getElementById('counter').innerHTML = counter;
}
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}