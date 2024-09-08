const os = require('os');
const userInfo = os.userInfo();

console.log(userInfo.username) 

const nameof = os.type() 
console.log(nameof) 

const numberOfCpus = os.cpus()

console.log(numberOfCpus) 

const ram = os.totalmem() 
console.log("memory : " ,ram)