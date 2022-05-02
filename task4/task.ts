type A<T> = {
    [a: string]: T
}

function mapObject<T, T2>(obj: Record<keyof A<T>, T>, x: (el:T2) => T) {

    let a = obj;

    for(let key in obj) {
        a[key] = x(obj[key])
    }

    return a;
}


let obj = {a: 1, b: 3, c: 2};

console.log(mapObject(obj, (a) => {
    return a * 2;
}))
