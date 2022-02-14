function solution(arr, location) {
    let ready = false;
    
    let temp = 0 ;
    let remove_count=0;
    // 배열 최대값 구하기
    let max = Math.max.apply(null, arr);
    let m_num=0; //최대값 개수 
    arr.forEach((v,i)=>{
       if(v === max) m_num++;
    });
    
    while(!ready){
        
        if(arr[0] === max) {
            
            if(m_num === 1 && arr[location] === max) {
                ready = true;
            }else {
                arr.shift();
                remove_count++;
                location--;
                // 배열 최대값 구하기
                max = Math.max.apply(null, arr);
                m_num=0; //최대값 개수 
                arr.forEach((v,i)=>{
                   if(v === max) m_num++;
                });
            }
        }else{
            temp = arr[0];
            arr.shift();
            arr.push(temp);
            ((location-1) < 0) ? location=arr.length-1 : location-- ; 
            // console.log(location);
        }
    }
    
    return location+1+remove_count;
    
}

//
function solution(priorities, location) {    
    let mapping = priorities.map((v, i) => {
        return {'origin': i, 'value': v};
    });
       
    let target;
    let print = [];
    
    // 대기목록 세팅
    while (true) {
        
        // 대기목록에 대상이 없으면 while문 종료
        if (mapping.length === 0) break;
        
         target = mapping[0]; // 인쇄대상(리스트 가장 앞에 있는 문서)
        
        // 대기목록에 target보다 높은 우선순위가 없다면 인쇄
        if (mapping.find(v => target.value < v.value) === undefined) {
            print.push(target);
            mapping.shift();
            continue;
        };
        
        // 맨 앞에 원소 꺼내서 뒤로 넣기
        mapping.shift(); 
        mapping.push(target);
    }
    

    for (let item in print) {
        if (print[item].origin === location) 
            return item * 1 + 1; //i는 index이므로 인쇄순서를 알기 위해서는 +1을 해줘야 함
    }
}