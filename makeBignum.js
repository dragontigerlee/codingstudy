function solution(number, k) {
    var answer = '';
    
    let arr = number.split('');
    let maxIndex=0;
    let maxNum=0;
    
    arr.forEach((v,i)=>{
        if(i <  number.length-k){
             if(v > maxNum){
                maxIndex=i;
                maxNum = v;
            }
        } 
    });
    
    let restNum = k - maxIndex;
    console.log(maxIndex);
    
    let filteredArr = arr.filter((v,i)=>{
        return i >= maxIndex; 
    });


    
    console.log(filteredArr);
    
    return answer;
    
}