'use strict'
const {exec} = require('child_process')
//listas elementos
exec('echo "wena wena "', (error, stdout, stderr )=>{
    if(error){
        console.log(`error: ${error.message}`)
        return;
    }
    if(stderr){
        console.log(`error: ${stderr.message}`)
        return;
    }
    console.log(`stdout: ${stdout}`)
})