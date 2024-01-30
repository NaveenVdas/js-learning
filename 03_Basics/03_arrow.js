const user = {
    userName : "Naveen",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Das"
// user.welcomeMessage()

const userMessage = () => {
    let userName = "Naveen"
    console.log(this.userName);
}

// userMessage()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// console.log(addTwo(1,2));

const addTwo = (num1,num2) => num1+num2
console.log(addTwo(1,2));