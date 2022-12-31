// var age = 12;
// var new_Age = age++;
// alert(new_Age);
// alert(age);


// var total = 45;
// var new_Total = total--;
// console.log(new_Total);
// console.log(total);


// var a = 5;
// var b = 2;
// var c = a++ - b;

// console.log(a);   //6
// console.log(b);  //2
// console.log(c);   // 5 -2 = 3



// var name = prompt("Enter Your name");
// console.log(name);     

// var a = 8;
// var b = 8;
// var d = "8"
// var f = 10
// var c = a == b;
// var e = a == d;
// var g = a == f;
// console.log(c);  //true
// console.log(e); //true
// console.log(g);  //false


// var a = 8;
// var b = 8;
// var d = "8"
// var f = 10
// var c = a === b;
// var e = a === d;
// var g = a === f;
// console.log(c);  //true
// console.log(e); //false
// console.log(g);  //false



// var age = 8;
// if(age > 9){
//         console.log("Age: " +age);
// }
// else{
//         console.log("Incorrect age")
// }


// var age = parseInt(prompt("Enter Your Age"));
// if(age > 18){
//         alert('Eligible');
// }
// else if(age == 18){
//         alert('acceptable');
// }
// else{
//         alert('not acceptable');
// }


// var age = parseInt(prompt("Enter Your age"));
// var gender = prompt("Enter your gender");
// if(age >= 18 && gender == "Male"){
//         console.log("You are allow to ride");
// }
// else{
//         console.log("You are not allow to ride");
// } 

// var age = parseInt(prompt("Enter your age"));
// var Education = prompt("Enter Your Education");
// if (age >= 18){
//         if(Education == "Matric" || Education == "Inter" || Education == "Graduate"){
//                 console.log("Eligible");
//         }
// }
// else{
//         console.log("Not Eligible");
// }

//*******************DO WHILE LOOP***************** */
// var i = 0;
// do{
       
//         console.log(i);
//         i++;
// }
// while(i<=5);


// var result = "";
// for(var i = 0; i<= 15;i++){
//         if((i%2) != 0){
//                 continue;
//         }
// result = result + i;
// }
// console.log("Even Number:\n"+result);



//***********************ARRAY******************/

// var Stud = new Array(3);
// Stud[0] = "Fatima";
// Stud[1] = "Sadia";
// Stud[2] = "Ayesha";
// var get_name = Stud[0];
// alert(get_name);



//*******function */

// var num = [2,3,4,6]
// function update_Array(val){
//         val[1] = 8
//         alert("Result of val is:" +val)
// }
// update_Array(num);
// alert(num);



// function factorial(num){

//         if(num == 0){
//                 return 0;
//         }
//         else if(num == 1){
//                 return 1;
//         }
//         else{
//                 var result = num;
//                 while(num>1){
//                         result = result*(num-1);
//                 }
//                 return result;
//         }
// }

// var result = factorial(5);
// alert(result);


// function person(){
//         this.name = "Muniba";
//         this.education = "BS-Software Engineering";
// }
// var stud1 = new person();
// var stud2 = new person();
// console.log(stud2.education);
// console.log(stud1.name);


// function employees(name, last_Name, age, Education, Experience) {
//         this.Name = name;
//         this.last_Name = last_Name
//         this.Age = age;
//         this.Education = Education;
//         this.Experience = Experience;

//         this.full_Name = function() {

//                 return this.Name + "" + this.last_Name;

//         };
// }
// var employee1 = new employees("Fahad", "Ali", 23, "2nd Year", "Fresh");
// var employee2 = new employees("Sadia", "Saad", 23, "2nd Year", "Fresh");
// // console.log(employee1);
// // console.log(employee2);
// console.log("Full Name: "+employee1.full_Name()+ " "+"First Name: " +employee1.Name+ " " +"Last Name: " +employee1.last_Name);

// console.log("Full Name: " +employee1.full_Name());

//*****BUILTIN OBJECTS********************/
// var value = Math.PI;
// console.log("The value of Math.PI is: "+value);

// var value2 = Math.pow(4,2);
// console.log("The value of power is: "+value2);

// var value3 = Math.sin(45);
// console.log("The value of sin is: "+value3);


// var today = new Date()

// var Date = today.getDate();
// var Month = today.getMonth();
// var Year = today.getFullYear();

// console.log(Date+"/"+Month+"/"+Year);


// var full_name=new String('DavidJames');
// console.log("Length of full Name: "+full_name.length);
// console.log("Position of string: " +full_name.charAt(6));
// console.log("String UperCase: "+full_name.toUpperCase());


// function First(){
//         alert("Hello")
// }


// function Context(){
//         alert("Right Click")
// }


// function first_form(){
      
      
//         alert("Your Form has been successfully submitted")
// }


// function MouseOver(){
//         alert("Mouse Over")
// }
// function MouseOut(){
//         alert("Mouse Out")
// }

// function load(){
//         alert("Page is loaded successfully")
// }




// function On(){
//         document.getElementById("img1").src = "bulb2.png"
// }
// function OFF(){
//         document.getElementById("img1").src = "bulb1.png"
// }


function heading(){
        document.getElementById("head1").innerHTML = "Hello World"
}

function heading2(){
        document.getElementById("head1").innerHTML = "Change Text"
}



// function First_Img(){
//         document.getElementById("Img1").src = "butterfly2.jpg"
// }
// function Second_Img(){
//         document.getElementById("Img1").src = "butterfly1.jpg"
// }