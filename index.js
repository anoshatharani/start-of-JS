// alert("hey good to see you")
// // console.log(alert)

// var yourname = "anosha" ; //  initialization
// alert(yourname); 
// console.log (yourname) ; // print
// yourname ="anoshatharani" // reasssign
// console.log (yourname)
// var fathername ;  // declaration
// console.log (fathername)  // it shows undefined
// fathername ="m.Amin"
// console.log (fathername) //  declaration become initialization here
// // -------------------------numbers of var
// var num = 18
// console.log (num+1)

// num = 18
// console.log (num+2)

// var numbers = 108
// console.log (numbers+5)

// num = num+2
// console.log (num)

// var HEY = num+10
// console.log (HEY)

// var num1 = 10
// var num2 = 50
// var add = num1+num2 
// console.log (add)


// // -----------------------day one has completed----------------------------
// var num = 20
// var num1 = 30
// console.log (num)
// var sub = num - num1
// console.log (sub)

// var multiply= num * num1
// console.log (multiply)

// var divide = num / num1
// console.log(divide)

// var modulas = num % num1
// console.log(modulas)

// var preinc = 4
// var result = ++preinc
// console.log(result)

// var postinc = 4
// var result = postinc++
// console.log(result)
// // ------------------------------------------DAY TWO HAS COMPLETED-------------------------------------------
// //  ---------------------------CONCATINATION-------------------------------
// var name = "anosha"
// var FatherName = "M.Amin"
// var FullNmae = name + FatherName
// console.log(FullNmae)

// var num = "12345"
// var num02 = "678910"
// var FullNum = num + num02
// console.log(FullNum)

// console.log(3+3*"4"-2) //12 ,15,13
// console.log(2-"2"+6+8) // 14 , 0
// console.log(2+"2"+6-8) // 226 , 218
// console,log(6+6+"32"+2-10) //12322 , 12312









//practice chap-1to20
//----------------------Primtive Datatypes of JS
// nn bb ss u
// let a = null
// let b = 345
// let c = true // can also be false
// let d = BigInt("567") + BigInt("3")
// let e = "anosha"
// let f = Symbol("I am anice symbol")
// let g = undefined
// console.log(a,b,c,d,e,f,g)
// console.log(typeof d)
//---------------------practice set
// let name = "anosha" + "18"
// console.log (name)
// console.log (typeof name)
// //-----------------OR
// let a = "Anosha"
// let b = 18
// console.log (a + b)
// console.log (typeof (a+b)) // for multiple datatype checking we use ()
//------------------Math expressions
// var num = 4
// var num2 = 6
// var mod = num % num2
// console.log (mod)
// --------------------modulus
// var num = 9
// var num1 = 9
// var mod = num%num1 // 0
// console.log(mod)
// console.log(8%22) //8
// console.log(4%2) // 0
// console.log(5%22) // 5
// --------------------post & pri incriment
// var num = 8; //9,10,11
// var num2 = 10; //11
//               // 8    11        9       11 =39
//  var result = num++ + ++num2 + num++ + ++num
// console.log(result)
// var num = 9; //10,10,11
// var num2 =3; //3,4,5,6,6
// //            9      10    10       3      4       5         5
// var result = num++ + num + num++ + num2 + ++num2 + ++num2 + num2++ 
// //6      11 =51
// - num2 + num
// console.log(result)
// console.log(6+6+"32"+2-10) //12312
// console.log(3+3*"4"-2) //13 
// console.log(2+"2"+6) // 226
// console.log(0+"0"+6) //006
// console.log(5/8+4-"8"+3*4-2) // 6.625
// --------------------------------if statements
//syntax 1-if 2-paranthesis (conditions) 3-curlybracket blockofcode
// if (5=="5") {
//     console.log (true)
// }else {
//         console.log (false)

// }
// if (5==="5") {
//     console.log (true)
// }else {
//         console.log (false)

// }
//--------------------
// var userinp = +prompt("ENTER YOUR AGE HERE")
// if (userinp%2 == 0){
//     console.log ("EVEN")
// }else {
//     console.log ("odd")
// }
//--------------------SETS OF CONDITION---------------
//--------------&& AND operator
//Sare true milna zaroori hai.
//or pehla hi false milega tou agae nh barhega.
// &&and mtlb dono
// if (8 > 5 && 4 === "four") { //false
//     console.log(true)
// } else {
//     console.log(false)

// }
// if (8 == 8 && "rat" === "Rat") { //false
//     console.log(true)
// } else {
//     console.log(false)

// }
// if (8 + 5 == 13 && 8 + 6 == 14) { // true
//     console.log(true)
// } else {
//     console.log(false)

// }
// if (5 == 5 && 6 < 7 && 0 && "true" && false) { //false
//     console.log(true)
// } else {
//     console.log(false)

// }
// if (5 == 5 && true && "true" && "sana" && 6 && 6 < 7) { //true
//     console.log(true)
// } else {
//     console.log(false)

// }
//-------------------------OR || Operator----------
//isko true dhundna hai ab pehle mile ya akhir mai kahi bh mile.
//jaise hi true mila value true hogaa pehle true pr opeartion khatam....
// if (5 == 13 || 6 == 14) {
//     console.log(true)
// } else {
//     console.log(false)
// }
//-------------not ! Operator --------------------
//ulti bt krta hai ye










//----------------ARRAYS is a type of object (non-primitive)
//array back pr ek object hai
//for collection data we used array
//array ki pehchaan hai name me (s) lagagega identifier me (s)
// var animals=["elephant" , "lion" , "monkey" , "cat"]
// console.log(animals)
// console.log(animals.length) //4 and it starts from 1
// console.log(animals.index) //3  bcz it starts from 0
// console.log(animals[1]) //array index se call hota hai
// animals[4]="bear" //reassign method its mutable means changeable
// console.log(animals)
// animals[2]="lion" // isme isne monkey remove hi krdia reassign me
// console.log(animals)
//-------------array.pop last value delete krta hai
//return pop value krta hai
// animals.pop()
// console.log(animals) //last value dlt hogaya
// var animalsdlt = animals.pop()
// console.log(animalsdlt) // isme value define hui kia dlt hua

//----------------array push last me value add krta hai
// return new array length
// animals.push(5) //no bh add krskte hain
// animals.push("giraffe" , "bear")
// console.log(animals) //last me value add ho gayi
// var check = animals.push("chheetah")
// console.log(animals)
// var animalsdlt = animals.push() //isme isne no of length return kraa
// console.log(animalsdlt)
// console.log(animals)

//--------------------shift remove 1st element in arrays
//------------------unshift add 1st element in arrays
// animals.shift()
// console.log(animals) //dlt krdi 1st value
// animals.unshift("kitty")
// console.log(animals) //add krdia 1st pr
//--------------------splice has 3 parameter
//kaha se dlt krna , kitna dlt krna , kiaa add krna 
var animals=["elephant" , "lion" , "monkey" , "cat"]
console.log(animals) 
// animals.splice(2,1)
// console.log(animals) 
// animals.splice(2,0,"cheetah")
// console.log(animals) 
n








