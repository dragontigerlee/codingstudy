function solution(n, s) {
    var answer = [];

    if(n > s)  return [-1];

    for(let i=0; i<n; i++){
        let num = Math.floor(s/(n-i));
        answer.push(num);

        s = s - num;
    }

    return answer;
}