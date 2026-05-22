function eratostene(n)
{
    /*let numeri=[]
    for(let i=2; i<=n; i++)
        numeri.push(i)

    for(let i=0; i<numeri.length; i++)
    {
        for(let j=i+1; j<numeri.length; j++)
        {
            if( numeri[j]!=null && numeri[j] % numeri[i] == 0 )
                numeri[j] = null
        }
    } 

    for(let num of numeri)
    {
        if(num!=null)
            console.log(num)
    }*/

    let numeri = [false, false]
    for(let i=2; i<=n; i++)
        numeri.push(true)

    for(let i=2; i*i<=n; i++)
    {
        if( numeri[i]==false) continue
        for(let j=i*i; j<=n; j+=i)
            if( numeri[j]==true && j % i == 0)
                numeri[j]=false
    }
    
    /*for(let i=0; i<numeri.length; i++)
        if( numeri[i] )
            console.log(i)*/
    console.log("Fatto")
}

eratostene(100000000)