function solution(progresses, speeds) {
    var answer = [];
    let temp_arr = [];
    progresses.forEach((v,i)=>{
        let val = Math.ceil((100 - progresses[i]) / speeds[i]);
        temp_arr.push(val);
    });
    let num;
    let sum=0;
    temp_arr.forEach((v,i)=>{
        if(i==0){
            num = v;  
            sum=1;
        }else{
            if(v < num){
                 sum++;
            }else{
                if(v==num){
                    sum++;
                    answer.push(sum);
                    num = v;
                    sum = 1;
                    if(i==(temp_arr.length-1)) return answer;
                }else{
                    answer.push(sum);
                    num = v;
                    sum=1;
                }
            }
            if(i==(temp_arr.length-1)) answer.push(sum);
        } 
    });
    return answer;
}