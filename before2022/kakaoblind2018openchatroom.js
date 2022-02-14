function solution(record) {
    let test;
    var answer = [];
    let arr1 = [];
    let user = [];
    let id = [];
    let user_val=0;
    let verb;
    let answer2 = [];
    let verb_arr = [];
    
    for(let i=0; i<record.length; i++){
            arr1 = record[i].split(" ");
            verb = "";
            if(arr1[0] == "Enter"){
                verb_arr[i] = "들어왔습니다.";
                user[user_val] = arr1[2];
                id[user_val] = arr1[1];
                user_val++;
                
                for(let j=0; j<id.length; j++){
                    if(id[j]==arr1[1]){
                        user[j] = arr1[2];
                    }
                }
                
                for(let z=0; z<answer2.length; z++){
                    if(answer2[z]==arr1[1]){
                        answer[z] = arr1[2]+"님이 "+verb_arr[z];
                    }
                }
                
                answer[i] = arr1[2]+"님이 "+verb_arr[i];
                answer2[i] = arr1[1];
               
            } else if(arr1[0] == "Leave"){
                verb_arr[i] = "나갔습니다.";
                let leave_u ="";
                for(let j=0; j<id.length; j++){
                    if(id[j]==arr1[1]){
                        leave_u = user[j];
                    }
                }
                answer[i] = leave_u+"님이 "+verb_arr[i];
                answer2[i] = arr1[1];
                
            } else{
                verb_arr[i] = "변경";
                 for(let z=0; z<answer2.length; z++){
                     verb="";
                    if(answer2[z]==arr1[1]){
                        let verb = verb_arr[z];
                        
                        answer[z] = arr1[2]+"님이 "+verb;
                    }
                }
            }  
            
    }
    
    return answer;
    
}