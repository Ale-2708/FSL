function giocata(row, col)
{
    let footer = document.querySelector('.footer')


    if(footer.innerText != ""){
        alert("Partita finita")
        return
    }

    let griglia = document.getElementById('grid')
    let listaRighe = griglia.children
    let cellePrimaRiga = listaRighe[0].children
    let celleSecondaRiga = listaRighe[1].children
    let celleTerzaRiga = listaRighe[2].children

    let cella

    switch(row){
        case 0:
            cella = cellePrimaRiga[col]
            break
        case 1:
            cella = celleSecondaRiga[col]
            break
        case 2:
            cella = celleTerzaRiga[col]
            break
    }

    

    if(cella.innerHTML == `<div class="x">X</div>` || cella.innerHTML == `<div class="o">O</div>`){
        alert("Posizione già occupata.")
        return
    }

    let header = document.querySelector('.header')

    let turno = header.lastElementChild.innerText

    if(turno == 'X'){
        cella.innerHTML = `<div class="x">X</div>`
        header.removeChild(header.lastElementChild)
        header.innerHTML += `<div class="o">O</div>`
    } else{
        cella.innerHTML = `<div class="o">O</div>`
        header.removeChild(header.lastElementChild)
        header.innerHTML += `<div class="x">X</div>`
    }

    let msgFine = ""

    switch(chiHaVinto()){
        case undefined:
            return
            break
        case "pari":
            msgFine = "Partita Pari"
            break
        case "x":
            msgFine = "Ha vinto X"
            break
        case "o":
            msgFine = "Ha vinto O"
            break
    }

    
    footer.innerText += msgFine
     

        
}

function nuovaPartita()
{
    let footer = document.querySelector('.footer')
    footer.innerText = ""
    
    let header = document.querySelector('.header')
    header.removeChild(header.lastElementChild)
    header.innerHTML += `<div class="x">X</div>`

    let griglia = document.getElementById('grid')
    let listaRighe = griglia.children

    for (let row of listaRighe) {
        for(let cella of row.children) {
            cella.innerHTML = ""
        }
    }
}
