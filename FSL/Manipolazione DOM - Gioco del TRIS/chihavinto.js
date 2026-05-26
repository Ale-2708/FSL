function chiHaVinto()
{
    let players = ['x','o']

    for(let p of players)
    {
        //3 in riga
        for(let i=0;i<3;i++)
        {
            if(  document.querySelectorAll(`.row:nth-child(${i+1}) .${p}`).length == 3 ) return p;   
        }

        //3 in colonna
        for(let i=0;i<3;i++)
        {
            if(  document.querySelectorAll(`.row .cella:nth-child(${i+1}) .${p}`).length == 3 ) return p;   
        }        
        
        //3 in diagonale
        let d=0;
        for(let i=0;i<3;i++)
        {
            if(document.querySelectorAll(`.row:nth-child(${i+1}) .cella:nth-child(${i+1}) .${p}`).length>0) d++;
        }
        if(d==3) return p;

        d=0;
        for(let i=0;i<3;i++)
        {
            if(document.querySelectorAll(`.row:nth-child(${i+1}) .cella:nth-child(${3-i}) .${p}`).length>0) d++;
        }
        if(d==3) return p;

    }

    let x = document.getElementById('grid').getElementsByClassName('x').length;
    let o = document.getElementById('grid').getElementsByClassName('o').length;

    if( x + o !=9 ) 
        return undefined
    else
        return "pari"
}
