/*
begin   target  words                                       return
"hit"	"cog"	["hot", "dot", "dog", "lot", "log", "cog"]	4
*/
// let begin = "hit";
// let target = "cog";
// let words = ["hot", "dot", "dog", "lot", "log", "cog"];

function solution(begin, target, words) {
    let answer = 0;
    let used = new Array(words.length).fill(0);

    const DFS = (cur,target,cnt) => {
        if(cur === target) {
            answer = cnt;
            return true;
        }
    
        for(let i=0; i<words.length; i++) {
            if(used[i]) continue;
            let diff = 0;
            for(let j=0; j<words[i].length; j++){
                if(words[i][j] !== cur[j]) diff++;
            }

            if(diff === 1){
                used[i] = 1;
                DFS(words[i],target,cnt+1);
                used[i] = 0;
            }

        }
    }
    
    DFS(begin,target,0);

    return answer;
    
}
