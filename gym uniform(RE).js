function solution(n, lost, reserve) {
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(1);
    }

    lost.forEach((value, index) => {
        arr[value-1] = arr[value-1]-1;
    });
    reserve.forEach((value,index) => {
        arr[value-1] = arr [value-1]+1;
    });

    arr.forEach((value,index,array) => {
        if(value>1 && arr[index+1]===0){
            array[index] = value - 1 ;
            array[index+1] = array[index+1] +1;
        }else if(value===0 && arr[index+1]>1){
            array[index] = value+1;
            array[index+1] = arry[index+1]-1;
        }
    });

    return arr.filter(value => value > 0).length;
}