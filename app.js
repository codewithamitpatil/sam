const { spawn } = require('child_process');


const data = spawn('touch amit.js')

process.stdin.pipe('hello')

data.on('exit', function (code, signal) {
  console.log('child process exited with ' +
              `code ${code} and signal ${signal}`);
});


process.on('uncaughtException',(err)=>{
    console.log(err.message);
})



const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    );
}

// while(true){
//  // allocate some memory
//  const mu = process.memoryUsage();
//  // print memotu
//  let total = 0;
//  for(i in mu){
//       total += mu[i];
//  }
//  console.log("total","===>",formatBytes(total) )

// }

