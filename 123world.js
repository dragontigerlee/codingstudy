function solution(n) {
    let answer = '';
    let val = 1;
    let i = 1;
    let arr = Array();
    arr.push(1);
    
    while(val < 500000000) {
        val += Math.pow(3, i);
        arr.push(val);
        i++;
    }
    
    let idx;
    for(let k=0; k<arr.length; k++){
        if(n == arr[k]){
            for(let j=0; j<k+1; j++){
                answer+="1";
            }
            return answer;
        }else{
            if(n < arr[k]){
                idx=k-1;
                break;
            }
        }
    }
    
    let answer_arr = Array();
    for(let z=0; z<idx+1; z++) {
        answer_arr.push(1);
    }
    
    let result = n-arr[idx];
    let answer_idx=0;
    let arr124 = [1,2,4];
    while(result > 0){
        answer_arr[answer_idx] = arr124[result % 3];
        answer_idx++;
        result = Math.floor(result/3);
    }
    answer_arr.reverse();
    answer = answer_arr.join('');
    
    return answer;
}