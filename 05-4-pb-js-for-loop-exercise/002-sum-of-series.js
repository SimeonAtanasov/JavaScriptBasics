function sumOfSeries(number){
    let num = Number(number);
    let sum = 0;

    for (let i = 1; i <= num; i++){
        sum += i * i;
    }
    console.log(sum);
}

sumOfSeries(7)