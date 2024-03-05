import data from "./data/quiz.json" assert {type: "json"}
let optno = ['a', 'b', 'c', 'd']

for(let i=0; i<data.length; i++){
    console.log("Q."+data[i].id+ ": "+ data[i].statement);
    for(let j=0; j<data[i].options.length; j++){
        let alphabet = optno[j]
        if(data[i].answer == data[i].options[j]){
            console.log("\t"+ alphabet+ ". *"+ data[i].options[j])
        }
        else {
            console.log("\t"+ alphabet+ ". "+ data[i].options[j])
        }
    }
}


// import prompt from "prompt-sync";
// let input = prompt()

// let marks = []

// for(let i=0; i<4; i++){
//     marks[i]= parseInt(input("Enter your Marks: "))
// }
// console.log(marks)