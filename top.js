function solution(heights) {
    var answer = [];
    var ox = false;

    heights.reverse();
    heights.forEach((v,i)=>{
        for(let k=i; k<heights.length-1; k++){
            if(!ox){
                if(heights[i] < heights[k+1]){
                    answer.push(heights.length-(k+1));
                    ox = true;
                }
            }
        }
        if(!ox){
            answer.push(0);
        }
        ox =false;
    });
    answer.reverse();

    return answer;
}