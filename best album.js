function solution(genres, plays) {
    const genInfo = {};
    const answer = [];

    //장르합 재생 합 객체로 구함
    genres.forEach((v,i) => {
        if(!genInfo[v]){
            genInfo[v] = plays[i];
        }else{
            let s = JSON.stringify(genInfo[v]);
            let d = JSON.parse(s);
            genInfo[v] = d+plays[i];
        }
    });
    
    //많이 재생한 순으로 정렬 
    var sortData = Object.keys(genInfo).map(function(key) {
        return [key, genInfo[key]];
    }); 
    sortData.sort(function(a, b) {
      return b[1] - a[1];
    })

    const arr1 = [];    //가장많은장르
    const arr2 = [];    //두번째
    
    genres.forEach((v,i)=>{
        if(v==sortData[0][0]){
            arr1.push([plays[i],i]);
        }else if(v==sortData[1][0]){
            arr2.push([plays[i],i]);
        }
    });

    arr1.sort(function(a, b) { //내림차순정렬
        return b[0] - a[0];
    })  
    arr2.sort(function(a, b) {  //내림차순정렬
        return b[0] - a[0];
    })
    
//    console.log(arr1);
//    console.log(arr2);
    if(arr1.length ==1){
        answer.push(arr1[0][0]);
    }else{
        answer.push(arr1[0][1]);
        answer.push(arr1[1][1]);
    }

    if(arr2.length ==1){
        answer.push(arr2[0][0]);
    }else{
        answer.push(arr2[0][1]);
        answer.push(arr2[1][1]);
    }


    return answer;
}