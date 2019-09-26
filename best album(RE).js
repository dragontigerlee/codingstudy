
function solution(genres, plays) {
    var answer = [];
    let result = {};

    //객체 생성 	{ classic: { t_play: 1450, songarr: [ [Array], [Array], [Array] ] }, pop: { t_play: 3100, songarr: [ [Array], [Array] ] } }
    result  = genres.reduce((t,val,index)=>{
        if(!t[val]){
            t[val] = {t_play : plays[index] ,  songarr : []}; 
        }else{
            t[val].t_play += plays[index];
        }
        t[val].songarr.push([plays[index],index]);

        return t;
    },{});

    //t_play 내림차순 정렬
    let sorted_result = Object.values(result).sort(function(a,b){
        return b.t_play - a.t_play;
    });

    //각 songarr 정렬 후 2개 or 1개 answer.push
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
    