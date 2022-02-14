function solution(n) {
    let answer = 0;
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = true;
    }
    arr[0] = false;
    
    let max = Math.floor(Math.sqrt(n));
    
    for(let i=2; i<=max; i++) {
        for(let j=i*2; j<=n; j+=i) {
            arr[j-1] = false;
        }
    }
    
    for(let i=1; i<arr.length; i++) {
        if(arr[i]) answer++;
    }
    
    return answer;
}

/*sun*/
function solution(n) {
    let answer = n - 1;
    let arr = [];
    let size = n;
    let target = Math.sqrt(n) // n의 제곱근
  
    while (size--) arr[size] = false; // arr false 값으로 채우기
  
    for (let i = 2; i <= target; i++) {
      // 시작하는 첫 숫자는 소수라고 여기기 때문에 no 체크
      for (let j = i * 2; j <= n; j += i) {
        if (!arr[j - 1]) {
          arr[j - 1] = true;
          answer--;
        };
        // 배열의 index와 실제 위치의 차이가 1이기 때문에 자리를 확인할 때는 -1을 처리한 위치의 값을 확인합니다.
      }
    }
  
    return answer;
  }