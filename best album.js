function solution(genres, plays) {
    const genInfo = {};

    genres.forEach((v,i) => {
        if(!genInfo[v]){
            genInfo[v] = plays[i];

        }else{
            let s = JSON.stringify(genInfo[v]);
            let d = JSON.parse(s);
            genInfo[v] = d+plays[i];
        }
    });

    console.log(genInfo);
    //return answer;
}