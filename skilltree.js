function solution(skill, skill_trees) {
    let answer = 0;
    let skill_idx = -1;
    let return_val ="T";
    let next_step="F";
    
    skill_trees.forEach((v,i)=>{
        for(let k=0; k<v.length; k++) {//skill_trees arr
            for(let j=0; j<skill.length; j++) {//skill arr
                if(skill.charAt(j) === v.charAt(k)) {
                    if(skill_idx===-1){
                        if(v.charAt(k) != skill.charAt(0)){
                            //console.log("here//"+v+k+j);
                            next_step="T";
                            return_val="F";
                            break;
                        }
                    }
                    if(j < skill_idx) {
                        next_step="T";
                        return_val="F";
                        break;
                    }else {
                        skill_idx=j;
                        return_val="T";
                    }   
                }
            }
            if(next_step ==="T") break;
        }
        skill_idx=-1;
        next_step="F";
        if(return_val==="T"){
            answer++;  
        }
        return_val="T";
    });
    
    return answer;
}