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