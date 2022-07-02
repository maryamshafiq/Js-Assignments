// Chapter 38 to 42

// Task-1
// var a;
// var b;
// a = prompt("Enter value for base")
// b= prompt("Enter value for power")
// power(a,b)
// function power(a,b){
//     var c = a**b;
//     alert(c)
// }
//  -------------------OR---------------------------------------

// function power(a,b){
//             var a = a**b
//             console.log(a)
//         }
//         power(2,3)

// Task-2


// var year = prompt("Enter year");
// a = leapyear(year);

// if (a ){
//     alert(year + " is Leap year" )
// }
// else{
//     alert(year + " is not Leap year")
// }


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

// Task-3


// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// var a = +prompt("Enter value for triangle side1");
// var b = +prompt("Enter value for triangle side2");
// var c = +prompt("Enter value for triangle side3");




// function sfun(a,b,c){
    
//     return (a+b+c)/2;
// }

// function area(a,b,c,s){
//          return Math.sqrt(s* (s - a) * (s - b) * (s - c))}


// var s = sfun(a,b,c);
// var area = area(a,b,c,s);

// alert("area of triangle is: " + area);

// Task-4


// var sub1 = parseInt(prompt("Enter marks of subject1."));
// var sub2 = parseInt(prompt("Enter marks of subject2."));
// var sub3 = parseInt(prompt("Enter marks of subject3."));

// mainfun(sub1,sub2,sub3);

// function mainfun(sub1,sub2,sub3){
//     alert("Average is : " + avg(sub1,sub2,sub3));
//     alert("Percentage is : " + percent(sub1,sub2,sub3));
    
// }

// function avg(sub1,sub2,sub3){
//     return (sub1+sub2+sub3)/3
// }

// function percent(sub1,sub2,sub3){
//     return ((sub1+sub2+sub3)*100)/300;
   
// }

// task 5

// function indOf(str1,ind)
// {
//     for(var i=0;i<str1.length;i++)
//     {
//         if(i == str1.indexOf(ind))
//         {
//             alert("A6: The index of "+ind+" is: "+i);
//         }
//     }
// }
// var str1 = prompt("Q5: Enter anything to know its index: ");
// var ind = prompt("Q5: Enter the character to know its index: ");
// indOf(str1,ind);

// Task 6

// function del_vow(str1) {
//         for (var i = 0; i <= str1.length; i++) {
//             if (str1.charAt(i) == 'a' || str1.charAt(i) == 'e' || str1.charAt(i) == 'i' || str1.charAt(i) == 'o' || str1.charAt(i) == 'u' || str1.charAt(i) == 'A' || str1.charAt(i) == 'E' || str1.charAt(i) == 'I' || str1.charAt(i) == 'O' || str1.charAt(i) == 'U') {
//                 str1 = str1.replace(str1.charAt(i), '');
//             }
//         }
//         alert("A6: Modified string is: "+str1);
//     }
//     var str1 = prompt("Q6: Enter a string: ");
//     del_vow(str1);

// ----OR---------------------

//  var str = prompt("Q6: Enter a string: ");
// var vowel = ['a','e','i','o','u'];

// function abc (str){
//     a = str.replace(/[aeiou]/g,'')
//     console.log(a)
// }
// abc(str)


// task 8
//  var a  =+prompt("Enter distance in KMs");
//   function infeets(a){
//       var feets = a*32804.84
//       console.log(" Distance in feets :" + feets)
      
//   }

//    infeets(a)

// function inmeter(a){
//     var meters = a*1000
//     console.log(" Distance in meters :" + meters)
    
// }
// inmeter(a)
// function ininches(a){
//     var inches = a*39370.1
//     console.log(" Distance in inches :" + inches)
    
// }
// ininches(a)

// function incentimeters(a){
//     var centimeters = a*100000
//     console.log(" Distance in centimeters :" + centimeters)
    
// }
// incentimeters(a)

// Task 9
// function overtime(hours)
// {
//     if(hours > 40)
//     {
//         var pay = 12*(hours-40);
//         alert("A9: Your overtime pay is: "+pay);
//     }
// }
// var hours = prompt(" Enter no of hours that you have worked: ");
// overtime(hours);

// -------------OR--------------------

// var w = parseInt(prompt("Enter worked hours: "));

// if(w>40){
// t = (w - 40)*12;
// alert("Over time Rs: " + t)
// }


// task 10
// var cash  = +prompt("Enter cash amount")
// var a = cash/100;
// console.log("req notes of 100 is : " + a)
// var b = (cash%100)/50;
// console.log("Req notes of 50 is: " + b)
// var c = ((cash%100)/50)/10
// console.log( "req notes of 10 is :" +c )

// -------------------OR-------------------

// function denominations(amount)
// {
//     var hundered = amount/100;
//     hundered = Math.floor(hundered);
//     amount = amount%100;
//     var fifty = amount/50;
//     fifty = Math.floor(fifty);
//     amount = amount%50;
//     var ten = amount/10;
//     ten = Math.floor(ten);
//     alert(" You will have "+hundered+" hundered "+fifty+" fifty and "+ten+" ten notes");
// }
// var amount = prompt(" Enter amount to withdraw: ");
// denominations(amount);


