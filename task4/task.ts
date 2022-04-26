type A<T> = {
    [a: string]: T
}

function mapObject<T>(obj: Record<keyof A<T>, T>, x: (el:any) => any) {

    let a = obj;

    for(let key in obj) {
        a[key] = x(obj[key])
    }

    return a;
}


let obj = {z: 1, x: 3, h: "dfs"};

console.log(mapObject(obj, (a) => {
    return {test: 1};
}))