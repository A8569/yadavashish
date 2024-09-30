const user = {
    username : "ashish",
    price: 999,

    welcomeMessage: function(){
        console.log (`${this.username} ,welcome to website`);
        console.log (this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log (this);

// function car(){
//     let username = "ashish"
//     console.log(this.username);    
// }

// car()

// const car = function (){
//     let username = "ashish"
//     console.log(this.username);  
// }
const car =  () => {
    let username = "ashish"
    console.log(this);  
}



//car()

//const addTwo = (num1,num2) => {
   //return num1+num2  
//}

 //const addTwo = (num1,num2) =>  num1+num2

 //const addTwo = (num1,num2) => ( num1+num2)

 const addTwo = (num1,num2) => ({ username: "ashish"})


console .log(addTwo(3,4))


const myArray = [2,5,3,7,8]

//myArray.forEach()
