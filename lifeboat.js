function solution(people, limit) {
    var answer = 0;
    let temp = people.length-1;
    
    people.sort(function(a,b){
       return a-b;
    });
    
    for(let i=0; i<=temp; i++){
        if(people[i]+people[temp] <= limit){
            answer++;
            temp = temp-1;
        }else{
            answer++;
            i--;
            temp = temp-1;
        }
    }
   
    return answer;
}