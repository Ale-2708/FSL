async function abc() {
    let result = await fetch('https://dummyjson.com/users')
    let json = await result.json()
    let utenti = json.users
    console.log(utenti)

    let utenteMaggiore30 = utenti.find(e => e.age > 30)
    console.log(utenteMaggiore30)

    let alabama = utenti.filter(e => e.address.state == 'Alabama')
    console.log(alabama)

    let arrayAlabamaFormattato = alabama.map(obj => obj.firstName +  " " + obj.lastName +  " " + obj.age)
    console.log(arrayAlabamaFormattato)

    let etaCrescente = utenti.sort((obj1,obj2) => obj1.age - obj2.age)
    let arrayEtaFormattato = etaCrescente.map(obj => obj.firstName +  " " + obj.lastName +  " " + obj.age)
    console.log(arrayEtaFormattato)

    let email = utenti.map(obj => obj.email)
    console.log(email)

    let uomini = utenti.filter(e => e.gender == "male")
    let etaMedia = uomini.reduce((somma, obj) => somma + obj.height, 0) / uomini.length   
    console.log(etaMedia)

}


abc()