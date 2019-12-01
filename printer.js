function solution(arr, location) {
    let ready = false;
    
    let temp = 0 ;
    let remove_count=0;
    // 배열 최대값 구하기
    let max = Math.max.apply(null, arr);
    let m_num=0; //최대값 개수 
    arr.forEach((v,i)=>{
       if(v === max) m_num++;
    });
    
    while(!ready){
        
        if(arr[0] === max) {
            
            if(m_num === 1 && arr[location] === max) {
                ready = true;
            }else {
                arr.shift();
                remove_count++;
                location--;
                // 배열 최대값 구하기
                max = Math.max.apply(null, arr);
                m_num=0; //최대값 개수 
                arr.forEach((v,i)=>{
                   if(v === max) m_num++;
                });
            }
        }else{
            temp = arr[0];
            arr.shift();
            arr.push(temp);
            ((location-1) < 0) ? location=arr.length-1 : location-- ; 
            // console.log(location);
        }
    }
    
    return location+1+remove_count;
    
}

