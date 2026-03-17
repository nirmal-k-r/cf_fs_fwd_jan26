// let name="Paul";

// name="Eric";

// console.log(name);

// let name1="John";
// let name2="Doe";
// let name3="Smith";
// let name4="Jane";
// let name1="John";
// let name2="Doe";
// let name3="Smith";
// let name4="Jane";

// let names=['John', 'Doe', 'Smith', 'Jane', 'Paul', 'Eric'];
// console.log(names);

// // let names=db.fetch('Select * from employees order by name ASC')

// console.log(names[0]); //John
// console.log(names[2]); //Smith
// console.log(names[5]); //Eric

// console.log(names.length);
// console.log(names[names.length-1]); //Eric

// let ages=[];
// console.log(ages);
// ages.push(25); //adding an element to the end of the array
// console.log(ages);

// ages.push(30);
// ages.push(35);
// console.log(ages);

// //remove the last element from the array
// ages.pop();
// console.log(ages);

// //remove spcific elem,ent
// ages.splice(0,1); //removing the first element from the array
// console.log(ages);

names=['John', 'Doe', 'Smith', 'Jane', 'Paul', 'Eric'];

for (name of names){
    console.log("Hello, ", name);
}