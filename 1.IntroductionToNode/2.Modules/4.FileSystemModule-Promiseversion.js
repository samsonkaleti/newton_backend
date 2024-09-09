const fsPromise = require('fs').promises; 

// Read the content of a file 
fsPromise.readFile('./fileSystem/myFile.txt').then((data) => {
    console.log('File content:', data.toString());
    
}).catch((err) => {
    console.error('Error:', err);
}); 



// Async function to read a file and log its content
const readfile = async () => {
    try { 
        const data = await fsPromise.readFile('./fileSystem/myFile.txt')
        console.log('File content:', data.toString());
    } catch (error) {
        console.error('Error:', error);
    }
} 

readfile();  // Call the function to read the file

// Create a new file named 'example.txt'
    


/*
NOTE : Promise version of the file system is Not good or not Preference  
callback  version of the file system is  good and preference well 
*/