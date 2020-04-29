// Fizbuzz Code Challenge

var output = [];
var count = 1;
function fizzBuzz(){
    if (count % 3 === 0 && count % 5 === 0){
        output.push("Fizbuzz");
    }else if (count % 3 == 0){
        output.push("Fiz");
    }
    else if (count % 5 == 0){
        output.push("Buzz");
    }

    else{
        output.push(count);
    }
    count++;
    console.log(output);

}
fizzBuzz();


// Note : jothe 3 dara divite kora jay thaole fizz R jothe 5 dara divite kora jay thaole BuZZ R jothe 3and 5 doi ta deye divite kora jay tahole Fizbuzz bole.
