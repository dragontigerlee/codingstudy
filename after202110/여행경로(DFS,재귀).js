function solution(tickets) {
    let answer = [];    //정답
    let sortedTicekts = [...tickets].sort();  //정렬한 tickets
    let visited = new Array(tickets.length).fill(false);  //방문확인 0:미방분, 1:방문

    //current:현재 위치, arr:정답배열, count:여행카운트
    let DFS = (current,arr,count) => {
        arr.push(current);

        //다돌았으면 리턴
        if(count === tickets.length) {
            answer = [...arr];
            return true;
        }

        for(let i=0; i<tickets.length; i++) {
            if((!visited[i]) && (current === sortedTicekts[i][0])) {
                visited[i] = true;
                let returnVal = DFS(sortedTicekts[i][1],arr,count+1);
                if(returnVal) return true;

                visited[i] = false;
                arr.pop();
            }
        }

    }
    
    DFS("ICN",[],0);

    return answer;

}