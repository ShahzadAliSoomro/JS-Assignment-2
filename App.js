///   * Object Loop Start   *   ///

// * Question No 1 Start * //

// var arrayA = [];
// console.log(arrayA);

// var arrayB = new Array (2);
// arrayB[0] = "Hello";
// arrayB[1] = "World";
// console.log(arrayB);

// var dear = ["hello", "Salman", "Iam", "Shahzad"];
// console.log(dear);

// var arry2 = [1,2,3,44,56,88];
// console.log(arry2);

// var arry3 = true;
// console.log(arry3);

// var arry4 = ["Hello", 32, true];
// console.log(arry4);

// var educat = ["1) SSC </br>","2) HSC </br>", "3) BCS </br>",  "4) BS </br>", "5) BCOM </br>", "6) MS </br>", "7) M. Phil </br>", "8) phD </br>"];
// document.write("<h1> Quelifitions: </h1></br>");
// document.write(educat);

// * Question No 1,2,3,4,5,6,7 Completed * //


// * Question No 8 Start * //

// var stdName = ["hamza", "noman", "salman"];
// var stdScore = [320, 230, 480];
// var Percentage1 = (stdScore[0] / 500) * 100;
// var Percentage2 = (stdScore[1] / 500) * 100;
// var Percentage3 = (stdScore[2] / 500) * 100;

// document.write(" Score of " + " "+ stdName[0] + " is " + stdScore[0] + " per: " + Percentage1 + "</br>" );
// document.write(" Score of " + " "+ stdName[1] + " is " + stdScore[1] + " per: " + Percentage2 + "</br>" );
// document.write(" Score of " + " "+ stdName[2] + " is " + stdScore[2] + " per: " + Percentage3 + "</br>" );

// var students = ['Michael' , 'John' , 'Tony']
// var totalMark = [320 , 230 , 480, 120]
// var Percentage1 = (totalMark[0]/500)*100
// var Percentage2 = (totalMark[1]/500)*100
// var Percentage3 = (totalMark[2]/500)*100
// var perr = [Percentage1 , Percentage2 , Percentage3]

// for(var i = 0 ; i < students.length ; i++){
//     document.write('Score of ' + students[i]  + ' is '  + totalMark[i] + '.' + ' Percentage is: ' + perr[i])
// }

// * Question No 8 Completed * //

                                                 /// Quetion 09 Not Completed ///

// * Question No 10 Start * //

// var scoreOfstudent =[320  , 230 , 480 , 120 ];
// document.write( "Scores Of Student  " +  scoreOfstudent + " </br>");
// scoreOfstudent.sort();
// document.write( "Ordered Scores Of Student  " + scoreOfstudent + " </br>");

// * Question No 10 Completed * //

// * Question No 11 Start * /

// var cities = [" Karachi " ," Lahore ", " Islamabad ", " Quetta "," Multan "];
// document.write(" <h1>Cities List   </br></h1>");
// document.write(cities + " </br>"); 
// document.write(" <h1>Selected cities List   </br></h1>");
// var aryCopy = cities.slice(2,4);
// document.write(aryCopy);

// * Question No 11 Completed * //

// * Question No 12 Start * //

// var arr = [" This " ,  " is ",   " my ", " cat "]
// document.write("<h1>ARRAY </br></h1> " + arr.join());
// document.write("<h1>String </br></h1> " + arr.join(''));

// * Question No 12 Completed * //

// * Question No 13 Start * //

// var n = prompt("enter number of index")
// var arr = []
// for(var i = 0; i < n; i++){
//     arr.push(prompt("enter element"))
// }
// for(var i = 0; i < n; i++){
//     document.write('Out:')
//     document.write(arr[i]+"</br>")
// }

// * Question No 13 Completed * //

// * Question No 14 Start * //

// var n = prompt("enter number of index")
// var arr = []
// for(var i = 0; i < n; i++){
//     arr.push(prompt("enter element"))
// }
// for(var i = arr.length-1 ; i >= 0; i--){
//     document.write('Out:')
//     document.write(arr[i]+"</br>")

// * Question No 14 Completed * //

// * Question No 15 Start * //
 
// var phone = ["Infinix", "Samsung", "Iphone", "Nokia", "Sony", "Haier"];
// for(var i = 0 ; i <= phone.length ; i++){
//     console.log("Score of " + phone[i])
// }

// * Question No 15 Completed * //

///   * Object Loop Completed   *   ///


///   *  Object Arrays And Loop Start   *   ///

// * Question No 01 Start * //

// var arr = [
//   [,],
//   [, ],
//   [, , , ],
// ];
// console.log(arr)

// * Question No 01 Completed * //

// * Question No 02 Start * //

// var arr = [
//   [0,1, 2,3],
//   [1,0,1, 2],
//   [2, 1, 0, 1],
// ];

// for (var row = 0; row < arr.length; row++) {
//   for (var col = 0; col < arr[row].length; col++) {
//     console.log(arr[row][col]);
//   }
// }

// * Question No 02 Completed * //

// * Question No 03 Start * //

// for(var i=1 ; i<=10; i++){
//         document.write(i +"</br>");
//     }

// * Question No 03 Completed * //

// * Question No 04 Start * //

// var num =+prompt("enter table to be print");
// var length =+prompt("enter length of table");
// for(var len=1 ; len<=length ;len++){
//     document.write(num +" * "  + len + " = "+ num * len + "</br>"  )
// }

// * Question No 04 Completed * //

// * Question No 05 Start * //

// var fruits =  ["apple", "banana", "mango", "orange", "strawberry"];
//  for(var i=0 ; i<fruits.length ; i++)
//  {
//      document.write(fruits[i] + "</br>");
//  }

// for(var i=0 ; i<fruits.length ; i++)
//  {
//      document.write("element at index  "  + i + " is " +   fruits[i] + "</br>");
//  }

// * Question No 05 Completed * //

// * Question No 06 Start * //

// document.write("<h1>Counting</h1>")
//  for(var i=1 ; i<=15 ;i++){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Reverse counting</h1>")
//  for(var i=10 ; i>=1 ;i--){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Even number</h1>")
//  for(var i=0 ; i<=20 ;i+=2){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Odd number</h1>")
//  for(var i=1 ; i<=19 ;i+=2){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Series</h1>")
//  for(var i=2 ; i<=20 ;i+=2){
//      document.write( i+"k" + " , " )
//  }

// * Question No 06 Completed * //

// * Question No 07 Start * //

// var  a = ["Apple","Mango","Banana","Avacado","Orange"];
// var userDesire =prompt("enter Fruit name");
// var isMatch = false;

// for (var i = 0; i < a.length; i++) {
//   if (userDesire === a[i]) {
//     alert(userDesire +"  aviable at index  " + i + "  in our mart");
//     isMatch = true;
//     break;
//   }
// }

// if (isMatch === false) {
//   alert("we are sorry " + userDesire + "  is not aviable in our mart  ");
// }

// * Question No 07 Completed * //

// * Question No 08 Start * //

// var array = [24, 53, 78, 91, 12];
// var largest= 0;

// for (var i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// document.write("arrays item : " + array + "</br>" );
// document.write("the largest number is " + largest);

// * Question No 08 Completed * //

// * Question No 09 Start * //

// var array = [24, 53, 78, 91, 12]
// var smallest= 100000000000000000;

// for (i=0; i<=smallest;i++){
//     if (array[i]<smallest) {
//         var smallest=array[i];
//     }
// }
// document.write("ARRAY item : " + array + "</br>");
// document.write("the largest number is " + smallest);

// * Question No 09 Completed * //

// * Question No 10 Start * //

// for(var i=5 ; i<=100 ; i+=5){
//         document.write(i +"  ," )
//     }

// * Question No 10 Completed * //

///   *  Object Arrays And Loop Completed   *   ///