//conditions
//if else else if 


//comparision operators
//== === != !== > < >= <=

adult=true;

// if (adult==true){
//     console.log("You are an adult"); //this block of code will run if the condition is satisfied (true)
// }else{
//     console.log("You are a child"); //this block of code will run if the condition is not satisfied (false)
// }


if (20>=18){
    console.log("You are an adult");
}else{
    console.log("You are a child");
}


temp=27;

if (temp>25){
    console.log("Turning on the AC");
}else{
    console.log("Turning off the AC");
}


total=2200;

if (total>10000){
    console.log("You get a discount of 10%");
}else if (total>5000){
    console.log("You get a discount of 5%");
}else if (total>2000){
    console.log("You get a discount of 2%");
}else{
    console.log("No discount");
}

// total=6000;
// if (total>2000){
//     console.log("You get a discount of 2%");
// }else if (total>5000){
//     console.log("You get a discount of 5%");
// }else if (total>10000){
//     console.log("You get a discount of 10%");
// }else{
//     console.log("No discount");
// }

//logical operators
//&& || !


married=true;


if (!married==true){
    console.log("You are not married");
}

// temp=20;
// humidity=60;

// if (temp>25 && humidity>50){
//     console.log("Turn on the AC");
// }else{
//     console.log("Turn off the AC");
// }


temp=20;
humidity=30;

if (temp>25 || humidity>50){
    console.log("Turn on the AC");
}else{
    console.log("Turn off the AC");
}


// username="admin";
// password="admin123";

// if (username=="admin" && password=="admin123"){
//     console.log("Login successful");
// }else{
//     console.log("Login failed");
// }


title="employee";

if (title!="manager"){
    console.log("You dont have acces to payroll");
}