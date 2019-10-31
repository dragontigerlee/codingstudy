//땅따먹기
function solution(land) {
    var answer = 0;
    let max =-1;
    let m_index =-1;
    let pre_m_index=-1;
    land.forEach((v)=>{
       v.forEach((v2,i2)=>{
           if(i2 != pre_m_index){
                if(max < v2){
                    max=v2;
                    m_index=i2;
                } 
           }
       })
        pre_m_index=m_index;
        answer = answer + max;
        max=-1;
        m_index=-1;
    })

    return answer;
}