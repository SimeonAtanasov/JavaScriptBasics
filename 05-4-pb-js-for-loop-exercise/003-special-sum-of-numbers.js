function specialSumOfNumbers(arg1, arg2, arg3){
    let start = Number(arg1);
    let end = Number(arg2);
    let divider = Number(arg3);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % divider === 0)  {
            sum += i;
        }

    }
    console.log(sum);
}

specialSumOfNumbers("10", "30", "7");