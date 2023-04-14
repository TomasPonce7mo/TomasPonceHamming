function hamming(a, b){
    let c = 0;
    while(a.length > b.length){
        b = 0 + b;
    }
    while(b.length > a.length){
        a = 0 + a;
    }
    for(let i=0;i<a.length;i++){
        if(a.charAt(i) != b.charAt(i)){
            c++;
        }
    }
    let r = [a, b, c];
    return r;
}