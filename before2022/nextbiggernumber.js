function solution(n) {
    var answer = 0;
    let n_2 = [];
    
    if(n ===1) return 2;
    while(n>1){
        (n % 2 === 0) ? n_2.push(0) : n_2.push(1);
        n = Math.floor(n/2);
    }
    n_2.push(1);
    n_2.reverse();
    
    n_2.forEach((v,i)=>{
        if(i>0){
            if(v===1){
                if(n_2[i-1] === 0){
                    n_2[i]=0;
                    n_2[i-1]=1;
                    return true;
                }
            }
        }
    });
    

    console.log(n_2);
    n_2.forEach((v,i)=>{
        if(i===0){
            (v===0) ? answer=1 : answer=0;
        }else{
            let temp=0;
            for(let z=1; z<=i; z++){
                temp += 2*z;
            }
            answer +=temp;
        }
    });
    return answer;
    
}