const cp = require("child_process");

/*Mac
cp.exec("open https://www.linkedin.com/learning");
*/

let launchCommand = ''; 
if (process.platform.toString().includes('win')) { 
    launchCommand = 'start'; 
} 
    else { 
        launchCommand = 'open';
     } 
cp.exec(`${launchCommand} start http://google.com`, (err, data) => {
        if (err) { 
            throw err; 
        } 
        console.log(data); 
    });