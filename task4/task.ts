type A<T> = {
    [a: string]: T
}

function mapObject<T>(obj: Record<keyof A<T>, T>, x: (el:any) => T) {

    let a = obj;

    for(let key in obj) {
        a[key] = x(obj[key])
    }

    return a;
}


let obj = {a: 1, b: 3, c: "dsfdsdsf"};

console.log(mapObject(obj, (a) => {
    return {test: 1};
}))
