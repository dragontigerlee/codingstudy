function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter' : '님이 들어왔습니다.',
        'Leave' : '님이 나갔습니다.'
    }

    record.forEach((value) => {
        const [state, id, nick] = value.split(" ");

        if(state != "Change"){
            action.push([state, id]);
        }

        if(nick){
            userInfo[id] = nick;
        }
    })

    return action.map(([state, id])=>{
        return `${userInfo[id]}${stateMapping[state]}`;
    })
}