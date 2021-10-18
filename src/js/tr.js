

var obj;
function getvalues(axian){
    
    fetch('src/database/data.json')
    .then((response) =>response.json())
    .then((data)=>data.filter(({culture}) => culture.includes(axian)))
    .then((data) => generate(data))
    
}
function generate(resp){
    const html = resp.map( element=>{
        let tabs = `<table class="table table-striped mt-5" style=" text-align: center;margin-bottom: 10px" id="tableau">
        <tr>
        <td colspan="2" class="colonne1">
            Region
        </td>
        <td colspan="24" class="colonne2" id="cult">
            ${element.Region}
        </td>
    </tr>
        <tr>
            <td colspan="2" class="colonne1">
                Culture
            </td>
            <td colspan="24" class="colonne2" id="cult">
                ${element.culture}
            </td>
        </tr>
        <tr>
            <td colspan="2" class="colonne1">
                variétés
            </td>
            <td colspan="24" class="colonne2">
               ${element.variete}
            </td>
        </tr>
        <tr>
            <td colspan="2" class="colonne1">
                CYCLE
            </td>
            <td colspan="24" class="colonne2">
                ${element.cycle}
            </td>
        </tr>
        <tr>
            <td colspan="2" class="colonne1">
                Mois
            </td>
            <td colspan="3" class="colonne3">
                Octobre
            </td>
            <td colspan="3" class="colonne3">
                Novembre
            </td>
            <td colspan="3" class="colonne3">
                Décembre
            </td>
            <td colspan="3" class="colonne3">
                Janvier
            </td>
            <td colspan="3" class="colonne3">
                Fevrier
            </td>
            <td colspan="3" class="colonne3">
                Mars
            </td>
            <td colspan="3" class="colonne3">
                Avril
            </td>
            <td colspan="3" class="colonne3">
                Mai
            </td>
    
        </tr>
        <tr>
            <td colspan="2" class="colonne1">
                DECADE
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
            <td class="colonne3">
                D1
            </td>
            <td class="colonne3">
                D2
            </td>
            <td class="colonne3">
                D3
            </td>
        </tr>`

 function grest(){
    var tr; 
    let tableau=document.getElementById('tableau') 
    if(`${element.rep_start}`!="null"){
        tr = document.createElement('tr')
        echo = document.createElement("td")
        echo.setAttribute("id","andraso")
        tr.appendChild(echo)
        tableau.appendChild(tr)
    }
    
 }
 
    

        return tabs + '</table>' + grest()
    }).join('')
    document.getElementById('geer').innerHTML = html
}