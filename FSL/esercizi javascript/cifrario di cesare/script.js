function cifratura(msg, k){
    let stringafinale = ``

    let alfabetoMs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alfabetoMn = alfabetoMs.toLowerCase();

    k = k%26;

    if(k < 0){
        k = 26 + k 
    }


    for(let i=0; i < msg.length; i++){
        let trovato = false
        for(let j = 0; j < alfabetoMn.length; j++){
            if(msg[i] == alfabetoMn[j]){
                trovato = true
                stringafinale += alfabetoMn[(j+k) % 26]
                break
            }

            if(msg[i] == alfabetoMs[j]){
                trovato = true
                stringafinale += alfabetoMs[(j+k) % 26]
                break
            }
        }

        if(!trovato)
            stringafinale += msg[i] 
    }

    return stringafinale
}

function decifratura(msg, k){

    return cifratura(msg, -k)
}

let stringa = "mail@account.com"
//stringa = stringa.toUpperCase();  test sulla stringa con caratteri maiuscoli
console.log(cifratura(stringa, 5))
console.log("")
let dec = "rfnq@fhhtzsy.htr"
//dec = dec.toUpperCase();test sulla stringa con caratteri maiuscoli
console.log(decifratura(dec, 5))
