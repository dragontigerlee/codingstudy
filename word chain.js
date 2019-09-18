function solution(n, words) {
    var answer = [];
    let temp1=0;
    let temp2=0;
    
    //중복인거 처리
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            if(words[i]==words[j]){
                temp1 = j;
                break;
            }
        }
    }
    //끝말잇기처리
    for(let i=0; i<words.length-1; i++){
        if( words[i].substr(words[i].length-1,1) != words[i+1].substr(0,1)){
            temp2 = i+1;
            break;
        }
    }
    
    //최초 탈락 처리
    if(temp1 ==0 && temp2 ==0){
        answer[0] = 0;
        answer[1] = 0;
        return answer;
    }
    let faster;
    if(temp1 == 0){ faster = temp2; }else if(temp2 == 0){ faster = temp1;}
    else{
        if(temp1 < temp2){ faster =temp1;}else{ faster = temp2;}   
    }
    faster++;
    
    let turns = Math.ceil(faster / n);
    let number;
    if( faster % n ==0 ){
        number = n;
    }else{
        number = faster % n ;
    }
    answer[0] = number;
    answer[1] = turns;
     
    return answer;
}