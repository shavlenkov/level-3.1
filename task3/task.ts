interface A {
    [a: string]: undefined | B
}

interface B {
    cvalue: undefined | number | string | A
}

function summ(a: Obj) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === 'undefined') return 2022;
        if (typeof elem.cvalue === 'string') return +elem.cvalue || 2022;
        if (typeof elem.cvalue === 'object') return summ(elem.cvalue);
        return elem.cvalue;
    });

    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

let a = summ({ hello: { cvalue: 1 }, hello2: { cvalue: 6 }, hello3: { cvalue: 2 }});
console.log(a)