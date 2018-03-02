module.exports = function getZerosCount(number) {
    let temp =  0;
    let res = 0;
  
    for (let index = 5; index <= 9765625; index*5) {
        
        temp = Math.floor(number / index);
        res += temp;
    }
    if (number >= 48828125) {
        temp = Math.floor(number / 48828125);
        res += temp;
    }
    return(res);
   
}
