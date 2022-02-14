function solution(clothes) {
    var answer = 0;
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
        answer += v.length;
        length_arr.push(v.length);
    });

    if(length_arr.length != 1){
        let temp_val=1; 
        length_arr.forEach((v,i)=>{
            temp_val = temp_val * v ;
        });
        answer +=temp_val;
    }

    return answer;
}