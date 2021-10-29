//플로이드-워셜 
function solution(n, results) {
    var answer = 0;

    // 그래프 초기화
    var graph = Array.from({length:n+1}, () => Array(n+1).fill(false));   

    // 확실히 이기는 사람 true 초기화
    results.forEach((v) => {
        graph[v[0]][v[1]] = true;
    });

    // k 모두 비교된 대상 , i, j 직접 비교는 안했지만 k를 통해 비교가능한 대상
    // ex) i > k 이고 k > j 이면 => i > j 
    for(var k=1; k<=n; k++){
        for(var i=1; i<=n; i++){
            for(var j=1; j<=n; j++){
                if(graph[i][k] && graph[k][j]){
                    graph[i][j] = true;
                }
            }
        }
    }
    
    // 정확히 순위 매길 수 있는 경우 계산 
    for(var i=1; i<=n; i++){
        var count =0;
    
        for(var j=1; j<=n; j++){
            // 순위 매길 수 있는 인원수 count 
            if(graph[i][j] || graph[j][i]) count++;
        }

        // 본인 제외 모든 사람의 순위를 매길 수 있으면, 모든 순위를 알수 있으므로 정확한 순위를 알 수 있다.
        if(count === n-1){
            answer++;
        }
    }

    return answer;
}