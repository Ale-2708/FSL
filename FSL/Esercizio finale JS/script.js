async function insertUser(pagina, filtro){
    if(pagina == undefined){
        let a = document.getElementsByClassName("actual-page")[0]
        pagina = parseInt(a.id[a.id.length -1] ,10) 
    }
    
    let URL = filtro != undefined ? `https://dummyjson.com/users?sortBy=${filtro}&order=asc&limit=20&skip=${(pagina-1) * 20}&select=lastName,firstName,gender,age,height,weight,eyeColor,hair` : `https://dummyjson.com/users?limit=20&skip=${(pagina-1) * 20}&select=firstName,lastName,gender,age,height,weight,eyeColor,hair`
    let result = await fetch(URL)
    let json = await result.json()
    let utenti = json.users
    
    let tbody = document.getElementsByTagName("tbody")[0]
    tbody.innerHTML = ""

    utenti.forEach(element => {
        tbody.innerHTML += `<tr>
                    <td>${element.lastName}</td>
                    <td>${element.firstName}</td>
                    <td>${element.gender[0].toUpperCase()}</td>
                    <td>${element.age}</td>
                    <td>${element.height}</td>
                    <td>${element.weight}</td>
                    <td>${element.eyeColor}</td>
                    <td>${element.hair.type} ${element.hair.color}</td>
        </tr>
        `
    });
    
    let ul = document.getElementById(`pagina${pagina}`)
    if(ul.className == "page-link actual-page")
        return

    
    let a = document.getElementsByTagName("a")

    for(let i=1; i < a.length - 1; i++){
        if(a[i].className == "page-link actual-page"){
            a[i].className = "page-link"
        }
    }

    ul.className = "page-link actual-page"
}

function research(spostamento){
    let actualPage = document.getElementsByClassName("page-link actual-page")[0]

    if(actualPage.id[actualPage.id.length - 2] != "1"){
        let prossimaPagina = parseInt(actualPage.id[actualPage.id.length - 1], 10) + spostamento
        if(prossimaPagina <= 0 || prossimaPagina >= 12)
            return
        insertUser(prossimaPagina)
    } else {
        let prossimaPagina = parseInt(actualPage.id[actualPage.id.length - 2] + actualPage.id[actualPage.id.length - 1], 10) + spostamento
        if(prossimaPagina <= 0 || prossimaPagina >= 12)
            return
        insertUser(prossimaPagina)
    }
}

async function filter(event) {
    event.preventDefault();
    let input = document.getElementsByTagName("input")[0]
    let URL = `https://dummyjson.com/users/search?q=${input.value}`
    let result = await fetch(URL)
    let json = await result.json()
    let utenti = json.users

    let tbody = document.getElementsByTagName("tbody")[0]
    tbody.innerHTML = ""

    utenti.forEach(element => {
        tbody.innerHTML += `<tr>
                    <td>${element.lastName}</td>
                    <td>${element.firstName}</td>
                    <td>${element.gender[0].toUpperCase()}</td>
                    <td>${element.age}</td>
                    <td>${element.height}</td>
                    <td>${element.weight}</td>
                    <td>${element.eyeColor}</td>
                    <td>${element.hair.type} ${element.hair.color}</td>
        </tr>
        `
    });
}

insertUser(1)

let span = document.getElementsByClassName("span-filter")

for (const element of span) {
    element.addEventListener('click', (e) => {
        insertUser(undefined, e.target.id);
    });
}

/*Cose che non so fare:
    aggiugere l'event listener (questo sopra)
    fare in modo di salvare il filtro per tutte le pagine 
    fare in modo che passi da crescente a decrescente e che poi il filtro si resetti 
    salvare il decrescente tra una pagina e un altra senza una variabile globale
    non so se è giusto il filtro con l'input che lascia solo alcuni risultati con search

*/