// GLOBALS - NO WINDOW !!!!

// __dirname        - path to current directory
// __filename       - file name
// require          - function to use modules (CommonJS)
// module           - info about current module (file)
// process          - info about env where the program is being executed
let count = 0
console.log(__dirname)
setInterval(()=>{
    console.log("LeHuuPhu", count);
    count++ ;
    }, 1000
)