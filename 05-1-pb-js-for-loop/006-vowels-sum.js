function vowelsSum(arg) {
    let text = arg;
    let result = 0;
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "a":
                result += 1;
                break;
            case "e":
                result += 2;
                break;
            case "i":
                result += 3;
                break;
            case "o":
                result +=4;
                break;
            case "u":
                result +=5;
                break;
        }
    }
    console.log(result);
}

vowelsSum("hello");