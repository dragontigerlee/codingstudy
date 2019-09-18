function solution(n, lost, reserve) {
    var answer = 0;
    let arr =[];
    lost.sort(function(a,b){
        return a-b;
    });
    reserve.sort(function(a,b){
        return a-b;
    });
    
    for(let i=0; i<n; i++){
        arr[i] = 1; //1로 초기화
    }
    for(let i=0; i<lost.length; i++){
        arr[lost[i]-1]=0;
    }
    for(let i=0; i<reserve.length; i++){
        arr[reserve[i]-1]=2;
    }
    
    //마지막 조건 적용
    for(let i=0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(lost[i]==reserve[j]){
                arr[reserve[j]-1]=1;
            }
        }
    }
    
    
    //console.log(arr); 
    
    for(let i=0; i<n; i++){
        
        if(arr[i]==0){  //체육복이 없는 경우
            
            if(i==0 || i==(n-1)){ //처음 이거나 마지막 
                if(i==0){   //처음인경우 두번째사람한테만 빌릴 수 있음
                    if(arr[1]==2){
                        arr[0]=1; 
                        arr[1]=1;
                     }
                }else{  //마지막인경우 마지막전사람한테만 가능
                    if(arr[n-2]==2){
                        arr[n-2]=1;
                        arr[n-1]=1;
                    }
                }
            }else{  //그외 (처음,마지막 아닌경우)
                if(arr[i-1]==2 || arr[i+1]==2){
                    if(arr[i-1]==2){
                        arr[i-1]=1;
                        arr[i]=1;
                    }else if(arr[i+1]==2){
                        arr[i+1]=1;
                        arr[i]=1;
                    }
                }
            }   
            
        }
        
    }
    //console.log(arr); 
    for(let i=0; i<n; i++){
        if(arr[i] > 0) { answer++;}
    }
    
    return answer;
}