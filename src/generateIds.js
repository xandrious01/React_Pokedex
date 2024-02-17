const generateIds = () => {
    let randomIds = [];
    for (let i=0; i<8; i++){
        let randomId = Math.floor(Math.random()*800+1);
        randomIds.push(randomId);
    }
    return randomIds;
}

export default generateIds;