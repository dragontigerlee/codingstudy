function check_a(name,chk){
    let val=0;
    if(chk===1){
         for(let i=1; i<name.length; i++){
            if(name[i]=="A"){
                val++
            }else{
                return val;
            }
        }
    }else{
         for(let i=name.length-1; i>=1; i--){
            if(name[i]=="A"){
                val++
            }else{
                return val;
            }
        }
    }
}

function check_num(val){
    let arr = [-1,90,89,88,87,86,85,84,83,82,81,80,79,78];    
    for(let i=0; i<arr.length; i++){
        if(arr[i]==val){
            return i;
        }
    }
}
function solution(name) {
    var answer = 0;
    let middle = Math.ceil(name.length/2);
    let left_A =0;
    let right_A =0;
    
    for(let i=0; i<middle; i++){
        if(name[i]=='A') left_A++;
    }
    for(let i=middle; i<name.length; i++){
        if(name[i]=='A') right_A++;
    }
    // console.log(left_A);
    // console.log(right_A);
    
    //첫글자(동일)
    if((name[0].charCodeAt(0)-64) <=13) {
        answer = answer + (name[0].charCodeAt(0) - 64) -1;     
    }else{
        let first_num = check_num(name[0].charCodeAt(0));
        answer = answer + first_num;
    }
    //정방향
    if((left_A == right_A) || (left_A < right_A)) {
        for(let i=1; i<name.length; i++){
            if((name[i].charCodeAt(0)-64) <=13) {
                answer = answer + (name[i].charCodeAt(0) - 64) -1;          
            }else{
                let temp = check_num(name[i].charCodeAt(0));
                answer = answer + temp;
            }
        }
        answer = answer + (name.length-1);
        if(name[name.length-1]=='A'){
            answer= answer - check_a(name,2);
        }
        return answer;
    //역방향
    }else{
        for(let i=name.length-1; i>=1; i--){
            if((name[i].charCodeAt(0)-64) <=13) {
                answer = answer + (name[i].charCodeAt(0) - 64) -1;          
            }else{
                let temp = check_num(name[i].charCodeAt(0));
                answer = answer + temp;
            }
        }
        answer = answer + (name.length-1);
        if(name[1]=='A'){
            answer= answer - check_a(name,1);
        }
        return answer;
    }
}