const generateIds = () => {
    let i=0;
    let randomIds = [];
    while (i<8){
        let randomId = Math.floor(Math.random()*800+1);
        randomIds.push(randomId);
        i++;
    }
    return randomIds;
}

export default generateIds;