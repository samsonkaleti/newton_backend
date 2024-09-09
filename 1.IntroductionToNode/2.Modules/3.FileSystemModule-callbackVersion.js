const fs = require('fs');  

// Async function CRUD functions are defined in  the  module

// create directory if it doesn't exist
// fs.appendFile("./fileSystem/file.txt", "hello Node.js", (error) => {
//     if (error) {
//         console.log("error: " + error)
//     }
// });

// read the content of the file system

// fs.readFile("./fileSystem/file.txt", (error, data) => {
//     if (error) {
//         console.log("error: " + error)
//     } else {
//         console.log("File content: " + data.toString());
//         console.log(data)
//     }
// });
 

// Update the file system

// fs.writeFile("./fileSystem/file.txt", "hello Node.js updated", (error) => {
//     if (error) {
//         console.log("error: " + error)
//     } else {
//         console.log("File updated successfully");
//     }
// });


// Delete the file system

// fs.unlink("./fileSystem/file.txt", (error) => {
//     if (error) {
//         console.log("error: " + error)
//     } else {
//         console.log("File deleted successfully");
//     }
// })



// Synchronously create a new file system

// fs.appendFileSync("./fileSystem/myFile.txt", "Hello world!", (error) => {
//     if (error) {
//         console.log("error: " + error)
//     }
//     console.log("File created successfully");
// }); 

const buffer = fs.readFileSync("./fileSystem/myFile.txt") 
console.log(buffer.toString())  

/*
1. we should rarely use the synchronous version in Node JS
2. It is generally more efficient to use asynchronous version in NodeJS

*/
