module.exports = function getZerosCount(number) {
    let temp =  0;
    let res = 0;
    let index=5;
   while(index<=9765625) {
        
        temp = Math.floor(number / index);
        res += temp;
       index= index*5;
    }
    if (number >= 48828125) {
        temp = Math.floor(number / 48828125);
        res += temp;
    }
    return(res);
   
}
