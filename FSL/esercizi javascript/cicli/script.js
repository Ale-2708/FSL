function trisinistro(n){
    let s = ``

    for(let i = 1; i < n + 1; i++) {
        s+= "*".repeat(i)
        s += `\n`
    }

    return s;
}

function tridestro(n){
    let s = ``

    for(let i = 1; i < n + 1; i++) {
        let spazi = n - i
        let asterischi = n - spazi

        s+= " ".repeat(spazi)
        s+= "*".repeat(asterischi)
        s += `\n`
    }

    return s;
}

function  clessidra(n){
    if(n % 2 == 0)
        return "Numero pari."

    
    let s = ``

    for(let i =0; i <= Math.floor(n/2); i++){
        let sub = ``
        sub += " ".repeat(i)
        sub += "*".repeat(n-(i*2))
        sub += " ".repeat(i)
        s+=sub
        s += `\n`
    }

    for(let i =Math.floor(n/2) - 1; i >= 0; i--){
        let sub = ``
        sub += " ".repeat(i)
        sub += "*".repeat(n-(i*2))
        sub += " ".repeat(i)
        s+=sub
        s += `\n`
    }

    return s
}


let u = 5

console.log(trisinistro(u))
console.log(tridestro(u))
console.log(clessidra(u))