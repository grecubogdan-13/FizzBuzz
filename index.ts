import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input a number ', (answer) => {
    let n=parseInt(answer);
    for(let i=1;i<=n;i++){
        let nr=1;
        if(i%17==0){
            if(i%13==0){
                process.stdout.write("Fezz");
                nr=0;13
            }
            if(i%11==0){
                process.stdout.write("Bong");
                nr=0;
            }
            if(i%7==0){
                process.stdout.write("Bang");
                nr=0;
            }
            if(i%5==0){
                process.stdout.write("Buzz");
                nr=0;
            }
            if(i%3==0){
                process.stdout.write("Fizz");
                nr=0;
            }
        }
        else{
            if(i%3==0){
                process.stdout.write("Fizz");
                nr=0;
            }
            if(i%5==0){
                process.stdout.write("Buzz");
                nr=0;
            }
            if(i%7==0){
                process.stdout.write("Bang");
                nr=0;
            }
            if(i%11==0){
                process.stdout.write("Bong");
                nr=0;
            }
            if(i%13==0){
                process.stdout.write("Fezz");
                nr=0;
            }
        }
        if(nr==1){
            process.stdout.write(i.toString());
        }
        console.log();
    }
    rl.close();
  });

