function solution(num) {
    var answer = 0;
    if(num ===1) return 0;
    
    while(num != 1){
        (num % 2 === 0) ? num = num/2 : num = num*3 + 1;
        answer++;
        if(answer === 500 && num != 1) return -1;
    }

    return answer;
}