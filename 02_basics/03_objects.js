// singleton  
//Object.create
// object literals


const mySym = Symbol("key1")


const JsUser = {
     "full name": "Ashish Yadav",
    [mySym]: "myKey1",
    age: 18,

    loacation: "Jaipur",
    email: "navy936978@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "navy@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "navy@gmail.com"
//console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS user");  
}
JsUser.greetingTwo = function (){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




