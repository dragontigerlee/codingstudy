
function solution(genres, plays) {
    var answer = [];
    let result = {};

    result  = genres.reduce((t,val,index)=>{
        if(!t[val]){
            t[val] = {t_play : plays[index] ,  songarr : []}; 
        }else{
            t[val].t_play += plays[index];
        }
        t[val].songarr.push([plays[index],index]);

        return t;
    },{});

    let sorted_result = Object.values(result).sort(function(a,b){
        return b.t_play - a.t_play;
    });

    sorted_result.forEach((val)=>{
        if(val.songarr.length > 1){
            val.songarr.sort((a,b)=>{
                if(a[0] > b[0]){
                    return -1;
                }else if(a[0] < b[0]){
                    return 1;
                }else{
                    return (a[1] > b[1]) ? 1 : -1;
                }
            });
            answer.push(val.songarr[0][1]);
            answer.push(val.songarr[1][1]);
        }else{
            answer.push(val.songarr[0][1]);
        }
    });

    return answer;
}
    