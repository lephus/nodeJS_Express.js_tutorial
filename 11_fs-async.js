const {readFile, writeFile} = require("fs")

let first = "";

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err)
        return;
   }
   console.log(result)
   first = result
   let second = "";
   readFile('./content/second.txt', 'utf8', (err, result) => {
      if (err){
          console.log(err)
          return;
     }
     console.log(result)
     second = result
     writeFile(
       './content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
           if(err){
               console.log(err)
               return;
           }
           console.log("success")
       }
   )
  })
})