const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Navi",
tinderUser.isLoggedIn = false

const regularUser = {
    email:"naveenv0912@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Naveen",
            lastName:"Das"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}

// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3);

const obj3 = {...obj1,...obj2}

// console.log(obj3);

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     courseName:"js in hindi",
//     price:"999",
//     courseInstructor:"hitesh"
// }

// const {courseInstructor:instructer,courseName,price} = course

// console.log(instructer);


