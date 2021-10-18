function solution(n, times) {
    var answer = 0;
    
    //최소시간, 최대시간, 평균시간, 임시 인원수
    var minTime=1,maxTime,avgTime,tempN;
    maxTime = Math.max(...times) * n ;

    while(minTime <= maxTime){
        tempN=0;
        avgTime = Math.floor((minTime + maxTime) / 2);
        
        times.forEach(v => {
            tempN += Math.floor(avgTime / v);    
        });

        if(n <= tempN) {
            answer = avgTime;
            maxTime = avgTime-1;
        } else {
            minTime = avgTime+1;  
        }
    }

    return answer;
}