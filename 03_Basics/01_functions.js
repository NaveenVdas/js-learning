

function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("N");
}

// sayMyName()

function addTwoNums(num1,num2){
   console.log(num1+num2);
}

// addTwoNums(1,2)

function loginUserMessage(username = "testUser"){
    if(!username){
        console.log("Please enter user name");
    }
    else{
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage("Naveen"))

function calculateCartPrice(...num){
    return num;
}

console.log(calculateCartPrice(100,200,300));