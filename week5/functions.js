//function definition
function say_hello(){
    console.log("Hello, World!");
}

//function call
say_hello();

// for (let i = 0; i < 5; i++){
//     console.log(`Running the loop ${i}`);
//     say_hello();
// }

// function register_person(name, address, age){
//     console.log(`Registering person with name: ${name}, address: ${address}, age: ${age}`);
// }
// register_person("Nirmal", "Kathmandu", 0);
// register_person("Sita", "Lalitpur", 0);
// register_person("Ram", "Bhaktapur", 0);
// register_person("Hari", "Pokhara", 0);
// register_person("Shyam", "Biratnagar", 0);
// register_person("Gita", "Dharan", 0);
// register_person("Suman", "Itahari", 0);
// register_person("Tom", "Ilam", 35);

function register_person(name, address, age=0){
    console.log(`Registering person with name: ${name}, address: ${address}, age: ${age}`);
}
register_person("Nirmal", "Kathmandu");
register_person("Sita", "Lalitpur");
register_person("Ram", "Bhaktapur");
register_person("Hari", "Pokhara");
register_person("Shyam", "Biratnagar");
register_person("Gita", "Dharan");
register_person("Suman", "Itahari");
register_person("Tom", "Ilam", 35);