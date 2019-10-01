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

    let length_arr =[];
    result.forEach((v,i)=>{
        length_arr.push(v.length);
    });
    
    length_arr.forEach((v)=>{
        answer = answer * (v+1);
    });
    answer--;

    return answer;
}