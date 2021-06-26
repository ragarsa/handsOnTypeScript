function doSth<T>(a:number|string, ...others: Array<number | string>) {
    console.log(a, others, others[others.length -1 ])
} ;

doSth(1,2,3,4,5,6,7,8);