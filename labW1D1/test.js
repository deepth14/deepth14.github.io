function maxOfThree(a, b, c){ 
    if (a > b && b > c) {return a;}
    if (a > c && c > b) {return a;}
    if (b > a && a > c) {return b;}
    if (b > c && a > c) {return b;}
    if (c > a && a > b) {return c;}
    if (c > b && b > a) {return c;}

}
console.log(maxOfThree(3,2,1))