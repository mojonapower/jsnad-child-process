'use strict'
const {execFile} = require('child_process')
/**
 * crearemos un archivo exec_file_demo.sh para poder ejecutar este exec file
 * luego chmod +x exec_file_demo.sh -> change mod (da permisos)....chmod +x establece todas las banderas
 * ejecutables sin cambiar otros permisos
 */
execFile('./exec_file_demo.sh',(error, stdout, stderr)=>{
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