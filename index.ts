import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Fezz() {
    process.stdout.write("Fezz");
    return 0;
}

function Bong(){
    process.stdout.write("Bong");
    return 0;
}

function Bang(){
    process.stdout.write("Bang");
    return 0;
}

function Fizz(){
    process.stdout.write("Fizz");
    return 0;
}

function Buzz(){
    process.stdout.write("Buzz");
    return 0;
}

function getParameters(){
    let args = process.argv.slice(2);
    let num_args = [];
    for(let i=0; i<args.length; i++){
        num_args[i] = parseInt(args[i]);
    }
    return num_args;
}

rl.question('Input a number ', (answer) => {
    let n=parseInt(answer);

    let num_args=getParameters();

    for(let i=1; i<=n; i++){
        let nr=1;
        if(i%17 == 0){
            if(i%13 == 0 && num_args.includes(13)){
                nr = Fezz();
            }
            if(i%11 == 0 && num_args.includes(11)){
                nr = Bong();
            }
            if(i%7 == 0 && num_args.includes(7)){
                nr = Bang();
            }
            if(i%5 == 0 && num_args.includes(5)){
                nr = Buzz();
            }
            if(i%3 == 0 && num_args.includes(3)){
                nr = Fizz();
            }
        }
        else{
            if(i%3 == 0 && num_args.includes(3)){
                nr = Fizz();
            }
            if(i%5 == 0 && num_args.includes(5)){
                nr = Buzz();
            }
            if(i%7 == 0 && num_args.includes(7)){
                nr = Bang();
            }
            if(i%11 == 0 && num_args.includes(11)){
                nr = Bong();
            }
            if(i%13 == 0 && num_args.includes(13)){
                nr = Fezz();
            }
        }
        if(nr == 1){
            process.stdout.write(i.toString());
        }
        console.log();
    }
    rl.close();
  });

