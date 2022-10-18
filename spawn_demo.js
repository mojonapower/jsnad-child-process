'use strict'
const {spawn} = require('child_process')

const child = spawn('ls', ['-lh'])

child.stdout.on('data', (data)=>{
    console.log(`stdout : ${data}`)
})

child.stdout.on('data', (data)=>{
    console.log(`stderr : ${data}`)
})

child.on('error', (err)=> console.log(`err : ${err.message}`))

child.on('exit', (code, signal)=>{
    if(code) console.log(`process exit with ${code}`) 
})
