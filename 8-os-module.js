const os=require('os');
const user=os.userInfo();

console.log(user)

console.log(`system uptime is ${os.uptime()/60} mins`)

console.log(os.type(),os.release(),os.freemem(),os.totalmem())