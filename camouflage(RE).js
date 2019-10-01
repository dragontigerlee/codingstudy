function solution(clothes) {
    var answer = 1;
    let state = {};

    clothes.forEach(([item, acc],i)=>{
        if(!state[acc]){
            state[acc] = [] ;
        }
        state[acc].push(item);
    });

    let result = Object.values(state);

    result.forEach((v,i)=>{
        answer = answer * (v.length+1); //안입을 경우의수 +1
    });
    answer--;   //마지막 다 안입을었을 경우의 수 

    return answer;
}