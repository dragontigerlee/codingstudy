function solution(name) {
    var answer = 0;
    let middle = Math.ceil(name.length/2);
    let left_A =0;
    let right_A =0;
    
    for(let i=0; i<middle; i++){
        if(name[i]=='A') left_A++;
    }
    for(let i=middle; i<name.length; i++){
        if(name[i]=='A') right_A++;
    }
    // console.log(left_A);
    // console.log(right_A);
    
    //첫글자(동일)
    answer = answer + (name[0].charCodeAt(0) - 65);
     
    //정방향
    if((left_A == right_A) || (left_A < right_A)) {
        //A~M
        if(name[i].charCodeAt(0)-64 <=13){
            
        //N~Z
        }else{
            
        }
        
        for(let i=1; i<name.length; i++){
         answer = answer + (name[i].charCodeAt(0) - 65);   
        }
        return answer;
    //역방향
    }else{
        for(let i=name.length-1; i>=1; i--){
            if(name[i]=='A'){
                answer++;
            }else{
                answer = answer + (name[i].charCodeAt(0) - 65);    
            }
        }
        return answer;
    }
}