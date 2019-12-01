function solution(arr, location) {
    let target = location;
    let num ;
    let max;
    let answer = 1;
    
    while(arr.length > 0){
        //젤 앞자리 추출
        num = arr.shift();
        max = Math.max.apply(null, arr);
        //현재값보다 중요도 높은게 있으면 맨 뒤로 보내버림
        if(max > num){
            arr.push(num);
            if(target===0){
               target = arr.length-1;
            }else{
                target--;
            }
        }else{
            if(target===0){
                break;
            }else{
                answer++;
                target--;
            }
        }    
    }
    return answer;
}
