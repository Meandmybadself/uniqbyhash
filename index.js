const fs = require('fs')
const md5 = require('md5-file')
const path = require('path')
const { program } = require('commander')

const filesToIgnore = ['.DS_Store']
const dedupeDirectory = (dirPath, dryRun) => {
    const hashes = []

    fs.readdirSync(dirPath)
        .filter(item => !filesToIgnore.includes(item))
        .forEach(fileName => {
            const fullFilePath = path.join(dirPath, fileName)
            const hash = md5.sync(fullFilePath)
            if (hashes.includes(hash)) {
                if (dryRun) {
                    console.error('Soft deleting', fileName)
                } else {
                    console.error('Deleting', fullFilePath)
                    fs.unlinkSync(fullFilePath)
                }
            }
            hashes.push(hash)
        })
}

program
    .version('1.0.0')
    .name('uniqbyhash')
    .usage('uniqbyhash <directory_to_dedupe> --dryrun')
    .arguments('<directory>')
    .option('--dryrun', 'performs a dry run of operations')
    .action((directory, {dryrun}) => dedupeDirectory(directory, dryrun))

program.parse(process.argv)