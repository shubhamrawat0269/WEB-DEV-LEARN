const digitsList1 = [2,4,6,5];

function reverseDigitUsingMath(list){
    let index = list.length - 1; // 1
    let answer = 0; // 5000

    while(index >= 0){
        let lastIndexValue = list[index]; // 4
        let result = lastIndexValue * Math.pow(10, index); // 40
        answer += result; // 5640
        index--;
    }

    return answer;
}


const output = reverseDigitUsingMath(digitsList1);
console.log(output);