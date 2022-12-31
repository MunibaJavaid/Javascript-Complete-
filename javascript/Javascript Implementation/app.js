// var name = "Pakistani";

// name = "Uk"
// alert(name);



// var name2 = 'what is your "father" name';
// alert(name2);


// var num = 56;
// var num2 = 25;
// var sum = num + num2;
// alert(sum);


// console.log(sum);



// var isFeePaid = true;  
// var examPassed = false;

// document.write(isFeePaid);

// console.log(examPassed);


// var total;

// alert(total);


// var age = "null";

// age = 22;

// console.log(age);



// var name = "Mark";
// name = 25;
// name = true;


// alert(name);


// var a = "Mark";
// var b = 89;
// var c = true;
// var linebraek ="<br>"



// document.write("Result of a is");
// document.write(typeof a);
// document.write(linebraek);



// document.write("Result of b is");
// document.write(typeof b);
// document.write(linebraek);


// document.write("Result of c is");
// document.write(typeof c);
// document.write(linebraek);











// var rose = "Red Rose";

// var rose = "Yellow Rose";


// document.write(rose);




// console.log(rose);




// var age = 12;
// var b = age++;
// console.log(b);


// var first_Name = "Muniba";
// var last_Name = "Javaid";

// var full_Name = first_Name+ "" +last_Name;
// alert(full_Name);








// var name = "what is your name";
// var default_Ans = "Muniba"
// var result = prompt(name,default_Ans);
// console.log(result);
// document.write(result);



// var age = "what is your age";
// var result = prompt(age);
// var new_Age = parseInt(result) + 2;
// console.log(new_Age);


// var a = "9.32";
// var b= 8;
// var c = parseFloat(a) + b;
// console.log(c);




// var a = 6;

// console.log(a == 6);    //true
// console.log(a == "6");   //true
// console.log (a == 7);     //false




// console.log(a === 6);   //true
// console.log(a === "6");  //false
// console.log(a === 8);     //false



// // alert(!!0);
// alert(!!1);




// var age = 5;

// if( age > 9 ) {  
//         console.log("Age = "+age);
// }
// else{
//         console.log("invalid");
// }



// var age = prompt("Enter your age");
// var new_Age = parseInt(age);
// if (new_Age >= 18){
//         console.log("qualified");
// }
// else{
//         console.log("not qualified");
// }

// var  age = "Enter your age";
// var new_Age = prompt(age);
// if (new_Age > 18){
//         alert("You are eligible");
// }
// else if (new_Age == 18){
//         alert("Under 18 eligible");
// }
// else{
//         alert("you are not eligible");
// }


// var age  = "Enter Your age";
// var gender = "Enter Your Gender";
// var age_Info = prompt(age);
// var gender_Info = prompt(gender);
// if(age_Info >= 18 && gender_Info == "Male"){
//         console.log("You are allow to ride");
// }
// else{
//         console.log("You are not allow to ride")
// }


// var age  = "Enter Your age";
// var gender = "Enter Your Gender";
// var age_Info = prompt(age);
// var gender_Info = prompt(gender);
// if(age_Info >= 18 || gender_Info == "Male"){
//         console.log("You are allow to ride");
// }
// else{
//         console.log("You are not allow to ride")
// }


// var a = "8";
// var b = prompt("Enter num");
// if (a===b){
//         alert("True");
// }
// else{
//         alert("False");
// }


// var a = "8";
// var b = prompt("Enter num");
// var c = parseInt(b);
// if (a === c){
//         console.log("True")
// }
// else{
//         console.log("False")
// }








// var x = 10;
// var y = 5;
// var a = 20;
// var b = 15;
// if(x-y == a-b){
//         alert("correct")
// }
// else{
//         alert("incorrect")
// }



// var result = "Enter your percentage";
// var input_Percentage = prompt("percentage");
// var result = parseInt(input_Percentage);
// if (result >= 80 && result <= 100){
//         console.log("A1");
// }
// else if (result >= 70 && result <= 80){
//         console.log("A");
// }
// else if (result >= 60 && result <= 70){
//         console.log("B");
// }
// else if (result >= 50 && result <= 60){
//         console.log("C");
// }
// else if (result >= 40 && result <= 50){
//         console.log("D");
// }
// else if(result >= 0 && result <= 39){
//         console.log("Failed")
// }
// else{
//         console.log("You did not enter correct percentage")
// }



// var score = 40;
// if(score > 80){
//         console.log("A")
// }
// else if(score > 70){
//         console.log("B")
// }
// else if (score > 60){
//         console.log("C")
// }
// else {
//         console.log("Failed")
// }


// var num = parseInt(prompt("Enter Your Number"));
// if (num % 2 == 0){
//         console.log("Even");
// }
// else{
//         console.log("Odd");
// }
//   var num = 4;
//   var result = 4 % 2;
//   console.log(result);


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

//-------------------------------- #LOOPS:----------------------------------


// for(var i = 0; i <= 10; i++){
//         console.log(i);
// }




// var num = parseInt(prompt("Enter your num"));

// for (var i = 1; i <= 10; i++){
//         var result = num * i;
//         console.log(num+ "*" +i+ "=" +result);


// }

// for(var i=0; i<3; i++){
//         document.write("Hello");
//         document.write("</br>")
// }



// ****************Array**************//

// var marital_Status = new Array(3);
// marital_Status[0] = 'Single';
// marital_Status[1] = 'Married';
// marital_Status[2] = 'Divorced';
// console.log(marital_Status[2]);


// var marital_status = new Array('Single','Married','Divorced');
// console.log(marital_status[1]);


// var Food = ['Pizza','Burger','Roll'];
// console.log(Food);

// var sum = 0;
// var marks = new Array(5);
// for(i=0;i<marks.length;i++){

//         marks[i] = parseInt(prompt("Enter Your Marks:"));
//         sum = sum + marks[i]
//         total = sum/marks.length;
// }
// console.log('Average of Marks:'+total);



// var employees = new Array(3);
// employees[0] = new Array('John', '35', 'NewJersey');
// employees[1] = new Array('David', '32','California');

// console.log(employees);



// var flower = new Array('Rose','Sunflower','Daisy');
// var variable1 = flower.length;
// document.write("Flower length:" +variable1+ "<br>");

// var variable2 = flower.join("*")
// document.write(variable2 +"<br>");


// var variable3 = flower.push("Lilly","Orchid")
// document.write(flower+ "<br>");

// var variable4 = flower.sort();
// document.write(flower)

// document.write('Number of flowers:' +flower.length+ '<br>');
// document.write('Flowers:' +flower.join(',')+ '<br>');
// document.write('Add new Flower:'+flower.push("Lilly","Orchid")+'<br>');
// console.log("Flower In Ascending Order"+flower.sort()+"<br>");



//*********************FUNCTIONS***********************//


// function add(){


//       var a = 8;
//       var b = 9;
//       var c = a + b;
//       alert(c)
// }

// add()

// function add(){

//         var num1 = parseInt(prompt("Enter the first Number"));
//         var num2 =parseInt(prompt("Enter the Second Number"));
//         result = num1 + num2;
//         alert("Addition Result" +result);
// }

// add();



// function add(num1,num2){
//         var result = num1 + num2;
//         alert("Sum of total number is:" +result);
// }
// add(8,5);


// var val1 = parseInt(prompt("Enter your first number"));
// var val2 = parseInt(prompt("Enter your second Number"));

// function add(num1,num2){
//         var result = num1 + num2;
//         alert("Sum of total number is:" +result);
// }

// add(val1,val2);

// var num = 9;  //global variable
// function add(){
//       var sum = num + 2;  //9 + 2 = 11   //local variable
//       alert(sum)
// }

// add()

// console.log(num)



// var num1 = 9;

// function myfunc(){
//       num1 = num1 + 2;
//       console.log(num1)
// }
// myfunc();  // 11
// alert(num1);   //9

// Passing by value

// var num = 9;
// function func(){
//       var sum = num + 2;   //9 +  9 
//       alert(sum)  //11
// }

// func()
// alert(num) //9


//passing by reference

// var arr = [5,9,8,7]

// function func(){

//       arr[0] = 20;
//       alert(arr)    //[20,9,8,7]
// }
// func()


// console.log(arr)  //[20,9,8,7]

// function add(){
//       var num1 = 9;
//       var num2 = 10;
//       var result = num1 + num2; 
//       alert(result)
//       return result;

// }
// add()  //9 + 10 = 19;
// var a = (add() + 2);
// console.log(a)  //NAN   //19 + 2 = 21




// function mult(){
//       var num1 = 9;
//       var num2 = 8;
//       var result = num1 * num2;
//       console.log(result)
//       return result;
// }
// mult()
// var a = (mult() + 2);
// console.log(a)



//************MARKSHEET USING FUNCTION******************/

// var name = prompt("Enter Your Student Name");
// var percentage = "Enter your percentage";
// var input_Percentage = parseInt(prompt(percentage));



// function mark_Sheet(result){

// if (result >= 80 && result <= 100){
//         console.log("A1");
// }
// else if (result >= 70 && result <= 80){
//         console.log("A");
// }
// else if (result >= 60 && result <= 70){
//         console.log("B");
// }
// else if (result >= 50 && result <= 60){
//         console.log("C");
// }
// else if (result >= 40 && result <= 50){
//         console.log("D");
// }
// else if(result >= 0 && result <= 39){
//         console.log("Failed")
// }
// else{
//         console.log("You did not enter correct percentage")
// }
//    return result;

// }

// var total_Result = mark_Sheet(input_Percentage);
// console.log(name+ " percentage is: " +total_Result);



//************FUNCTION RETURN**********************/


// function mult(num1,num2){
//         var result = num1 * num2;
//        
//         return result;

// }

// var a = mult(7,2);
// console.log(a);


// var num1 = parseInt(prompt("Enter First Num"));
// var num2 = parseInt(prompt("Enter Second Num"));

// function add(val1,val2){
//         var result = val1+val2;
//         return result;
// }
// var a = add(num1,num2)+5;
// console.log(a)



// function foo(){
//         num1 = 5;
//         num2 = 5;
//         a = num1 + num2;
//         alert(a)
// }



//OBJECTS:

      
//Literal Method








// var  person = {

//       name:"Muniba",  //key value pair 
//       Education:"BS Software Engineering",
//       Age:22
// }
// console.log(person);
// alert("Eduction " +person.Education+ " " +"Age" +person.Age);



// //Direct Method 

// var Student_detail = new Object()   //decleared object

// Student_detail.firstName = "John";
// Student_detail.lastName = "Fernado",
// Student_detail.age = 15;

// console.log(Student_detail);

// alert("Student Name: "+Student_detail.firstName+ " " +"LastName: " +Student_detail.lastName);

//CONSTRUCTOR OBJECT

// function employee(name,last_Name,age,Education){ //key value pair
//       this.Name = name;  //key = value
//       this.LastName = last_Name;
//       this.Age = age;
//       this.Education = Education;
// }

// var employee1 = new employee("Fahad","Ahmed", 39, "Matric");
// var employee2 = new employee("Asad","Saad",34, "Inter");

// console.log(employee1.Education)
// console.log(employee2.Name)


// alert("Employee1 Data: "+employee1.Name+ "  "  +"Employee2 Data: " +employee2.Education)



// function employees(name, last_Name, age, Education, Experience) {
//         this.Name = name;
//         this.last_Name = last_Name
//         this.Age = age;
//         this.Education = Education;
//         this.Experience = Experience;

//         this.full_Name = function () {
//                 return this.Name + "" + this.last_Name;

//         };
// }
// var employee1 = new employees("Fahad", "Asad", 23, "2nd Year", "Fresh");
// var employee2 = new employees("Sadia", "Saad", 23, "2nd Year", "Fresh");

// console.log(employee1.Name);
// alert("Name: " + employee1.Name + "\n" + "Age: " + employee1.Age + "\n" + "Experience: " + employee1.Experience + "\n" + "Education: " + employee1.Education);

// alert("Name: " + employee2.Name + "\n" + "Age: " + employee2.Age + "\n" + "Experience: " + employee2.Experience + "\n" + "Education: " + employee2.Education);

// console.log(employee2.full_Name());









//BUILT IN OBJECTS

// var  n = Math.PI
// alert("Value Of PI is: " +n);

//Date OBJECT

// var today = new Date();
// var date = today.getDate();
// var month = today.getMonth();
// var fullYear = today.getFullYear();
// alert("Today Date is: " +date+ "/" +month+ "/" +fullYear);


// var fullName = new String("David James Taylor");
// document.write('Number of Characters are: ' +fullName.length+ '<BR/>');
// document.write("Character at Position 6 is: " +fullName.charAt(6)+ '<BR/>');



// var today = new Date();
// var date = today.getDate();
// var month = today.getMonth();
// var year = today.getFullYear();
// alert(date + '/' + month + '/' + year);



// var full_name=new String('David James Taylor');
// console.log('Number of Characters are: ' +full_name.length);
// console.log("Character at Position 6 is: " +full_name.charAt(6)); 






//*********************EVENTS LINK**********************/

// function start(){
//       alert("Apply On click Function");
//       console.log("OnClick Function")
// }


// function first(){
//       alert("Right Click");
//       console.log("On Right Click")
// }


// function over(){
//       alert("Mouse Over")
// }

// function out(){
//       alert("Mouse Out")
// }

// function Submit(){
//       alert("Your form has been successfully submitted");
//       console.log("Submitted")
// }



// function first(){
//         alert('Hello World');
//         console.log('Hello World');
// }
//  function over(){
//          alert("Mouse Over");
//          console.log("Mouse Over")
//  }

//  function Clickfocus(){
//          alert("Enter Your name")
//          console.log("Enter Your name")
//  }
//  function first_form(){
//          alert("submitted successfully")
//  }

// function para(){
// document.getElementById("demo").innerHTML = "Paragraph1";
// }

// function change_Image(){
//         document.getElementById("img1").src = "butterfly2.jpg";
// }

 

// function get(){
// var x = document.getElementById("demo").innerHTML = "1";
// alert(x);
// }

// function button_Click(){
//        var x =  document.getElementById("heading3").innerHTML = "Hello World";
//        console.log(x);
//        alert(x);

// }

// function change_Image(){
//         document.getElementById("img1").src = "butterfly2.jpg";
// }


//********************DOM STARTING***************/
// var x =  document.getElementById("para1");

// document.getElementById("para2").innerHTML = "Concatenate Some text " +x.innerHTML;

// var p = document.getElementsByTagName("p");
// p[0].innerHTML = "Hello Tag";



//  var x = document.getElementById("main");
//  var y = x.getElementsByTagName("p");
// var y = document.getElementsByTagName("p")
// document.getElementById("demo_SomeThing").innerHTML = "Changing off Something: "+y[0].innerHTML;

// function info(){

// var nm = document.getElementById('txt').value;




// var gender = document.getElementsByName('gender')[0].checked;


// if(gender){
//         gndr = "male";
// }
// else{
//        gndr = "female";
// }


// document.getElementById("fetch").innerHTML = "Your name is: " + nm+ " and gender is: " +gndr;


// }



// function info(){
//     document.getElementById("demo").innerHTML = "Some Other Text";
// }

// function Change(){
//     document.getElementById("image1").src = "butterfly2.jpg";
// }