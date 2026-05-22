function Eratostene(num){
    let arr = []

    for(let i=0; i<= num; i++){
        arr.push(true);
    }

    let finito = false
    let index = 2

    while(!finito){
        let trovato = false
        let tmpindex
        for(let i = index+1; i < arr.length; i++){
            if(i % index == 0 && arr[i] == true){
                arr[i] = false
            } else if(arr[i] != false){
                if(!trovato){
                    trovato = true
                    tmpindex = i
                }
            }
        }

        index = tmpindex

        if(!trovato)
            finito=true
    }

    let s = ``


    for(let i=2; i<arr.length; i++) {
        if(arr[i] == true){
            s += i
            s+= " "
        }
    }

    return s
}


let n = 1000000
console.log(Eratostene(n))