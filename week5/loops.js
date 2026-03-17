// console.log('Program started');
// for (let i = 0; i <10; i++){ //i++ means i=i+1
//     console.log(i,'hello world');
// }
// console.log('Program ended');

//program to calculate the sum of furst 10 numbers

// total=0;
// for (let i=1;i<=10;i++){
//     total=total+i;
// }
// console.log("The sum of first 10 numbers is:", total);

//display first 20 odd numbers
// for (let i=1;i<=41;i++){
//     console.log(i);
// }

// let i=0;
// while (i<5){
//     console.log(`Running the loop ${i}`);
//     i=i+1;
// }

// temp=20;
// while (true){  //infinite loop
//     if (temp<25){
//         console.log("Turning on the AC");
//     }else{
//         console.log("Turning off the AC");
//     }
//     // timer.sleep(1000); 
//     temp=temp+1; 
// }

//asynchonous programming
console.log("Program started");
setInterval(function(){ //wait
    console.log("Waited 5 seconds");
},3000); //1000 milliseconds = 1 second
console.log("Program ended");