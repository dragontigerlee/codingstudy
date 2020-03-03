function rotLeft(a, d) {
    for(let k=0; k<d; k++){
        a.push(a.shift());
    }
    return a;
}