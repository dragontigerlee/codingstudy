function solution(number, k) {
    var answer = '';
    
    let arr = number.split('');
    let maxIndex=0;
    let maxNum=0;
    
    arr.forEach((v,i)=>{
        if(i <=  k){
             if(v > maxNum){
                maxIndex=i;
                maxNum = v;
            }
        } 
    });
    
    let restNum = k - maxIndex;
    // console.log(maxIndex);
    
    
    let filteredArr = arr.filter((v,i)=>{
        return i >= maxIndex; 
    });
    // console.log(filteredArr);
    
    if(restNum === 0 ) {
        return filteredArr.join('');
    }else{
        let maxIndex2 =0;
        let maxNum2 =0;
        
        filteredArr.forEach((v,i)=>{
            if(v > maxNum2 && i != 0){
                maxIndex2 = i;
                maxNum2 = v;
            } 
        });
        
        let minNum =maxNum2;
        let minIndex=maxIndex2;
        
        while (restNum != 0 ){
            for(let i=maxIndex2-1; i>0; i--){
                if(minNum >= filteredArr[i]){
                    minNum = filteredArr[i];
                    minIndex = i;
                }
            }
            // console.log('start');
            // console.log(filteredArr);
            // console.log(minIndex);
            // console.log(minNum);

            filteredArr.splice(minIndex,1);
            
            restNum--;
        }
        return filteredArr.join('');
    }
}function solution(number, k) {
    var answer = '';
    
    let arr = number.split('');
    let maxIndex=0;
    let maxNum=0;
    
    arr.forEach((v,i)=>{
        if(i <=  k){
             if(v > maxNum){
                maxIndex=i;
                maxNum = v;
            }
        } 
    });
    
    let restNum = k - maxIndex;
    // console.log(maxIndex);
    
    
    let filteredArr = arr.filter((v,i)=>{
        return i >= maxIndex; 
    });
    // console.log(filteredArr);
    
    if(restNum === 0 ) {
        return filteredArr.join('');
    }else{
        let maxIndex2 =0;
        let maxNum2 =0;
        
        filteredArr.forEach((v,i)=>{
            if(v > maxNum2 && i != 0){
                maxIndex2 = i;
                maxNum2 = v;
            } 
        });
        
        
        let minNum =maxNum2;
        let minIndex=maxIndex2;
        
        while (restNum != 0 ){
            minNum = maxNum2;
            minIndex = maxIndex2;
            
            for(let i=maxIndex2-1; i>0; i--){
                if(minNum >= filteredArr[i]){
                    minNum = filteredArr[i];
                    minIndex = i;
                }
            }
            // console.log('start');
            // console.log(filteredArr);
            // console.log(maxIndex2);
            // console.log(minIndex);
            // console.log(minNum);
            if(minNum != maxNum2){
                filteredArr.splice(minIndex,1);
                restNum--;
                maxIndex2--;
            }else{
                
                
            }
            
        }
        return filteredArr.join('');
    }
}