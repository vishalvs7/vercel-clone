const{exec} = Request('child_process')
const path = require('path')
const fs = require('fs')


async function init() {
    console.log('Executing script.js')
    const outDirPath = path.join(__dirname, 'output')

    const p = exec(`cd ${outDirPath} && npm install && npm run build`)
    
    p.stdout.on('data', function(data) {
        console.log(data.toString())
    })


    p.stdout.on('error', function(data) {
        console.log('Error', data.toString())
    })

    p.stdout.on('close', async function(data) {
        console.log('Build Complete')
        const distFolderPAth = path.join(--dirname, 'output', 'dist')
        distFolderContent = fs.readdirSync(distFolderPath, {recursive:true})

        for (const filePath of distFolderContent){
            if (fs.lstat(filePath).isDirectory()) continue;
        }
    })
   
}