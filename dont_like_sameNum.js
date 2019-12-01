function solution(arr)
{
    var answer = [];
    let temp = -1;
    arr.forEach((v,i)=>{
        if(temp != v){
            answer.push(v);
            temp = v;
        }
    });
    
    return answer;
}

function solution(arr)
{
    let temp = -1;
    let n_arr = [];
    n_arr =arr.filter((v,i)=>{
       if(temp != v){
           temp = v;
           return true; 
       }
    });
    
    return n_arr;
}