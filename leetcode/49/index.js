var groupAnagrams = function(strs) {
    let map = {
        'a':2,'b':3,'c':5,'d':7,'e':11,'f':13,'g':17,'h':19,'i':23,'j':29,'k':31,'l':37,'m':41,
        'n':43,'o':47,'p':53,'q':59,'r':61,'s':67,'t':71,'u':73,'v':79,'w':83,'x':89,'y':97,'z':101
    }
    let resMap = {};
    let resList = [];
    for(let str of strs) {
        let m = 1;
        for(let i=0;i<str.length;i++) {
            m*=map[str[i]];
        }
        if(!resMap[m]) {resMap[m]=[];}
        resMap[m].push(str);
    }
    for(let key in resMap) {
        resList.push(resMap[key]);
    }
    return resList;
};