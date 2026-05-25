async function insertUser(pagina){
    let URL = `https://dummyjson.com/users?limit=20&skip=${pagina * 20}&select=firstName,lastName,gender,age,height,weight,eyeColor,hair`
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

insertUser(1)
