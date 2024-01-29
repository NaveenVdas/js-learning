const mySym =  Symbol("key1")

const JsUser = {
    name:"Naveen",
    [mySym]:"myKey1",
    age:24,
    location:"Bangalore",
    email:"naveenv0912@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym])

JsUser.greetings = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greetings);