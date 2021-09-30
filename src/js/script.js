
var tableau = document.querySelector('.table')
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
        var grest;
        const vari=`${element.cycle}`
if (vari=="intermediaires"  || vari=="long" || vari=="Intermediaire"){
    grest = `<tr>
        <td colspan="2" class="colonne1">
            Préparation du sol
        </td>
        <td></td><td></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td colspan="2" class="colonne1">
            Semis/plantation
        </td>
        <td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td rowspan="3" class="colonne1">
            Fertilisation
        </td>
        <td class="colonne1">
            1er
        </td>
        <td></td><td></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td class="colonne1">
            2ème
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    
    <td class="colonne1">
        3ème
    </td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
        <td rowspan="2" class="colonne1">
            Sarclage
        </td>
        <td class="colonne1">
            1er
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td class="colonne1">
            2ème
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>

    <tr>
        <td rowspan
        ="2" class="colonne1">
            Buttage
        </td>
        <td class="colonne1">
            1er
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td class="colonne1">
            2ème
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td colspan="2" class="colonne1">
            Recolte
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td>
    </tr>
</table>`
} else {
    grest = `<tr>
            <td colspan="2" class="colonne1">
                Préparation du sol
            </td>
            <td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
            <td colspan="2" class="colonne1">
                Semis/plantation
            </td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
            <td rowspan="2" class="colonne1">
                Fertilisation
            </td>
            <td class="colonne1">
                1er
            </td>
            <td></td><td></td><td></td><td ></td><td class="blue" ></td><td  class="blue"></td><td  class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
            <td class="colonne1">
                2ème
            </td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td  class="blue"><td></td><td  class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
            <td class="colonne1">
                Sarclage
            </td>
            <td class="colonne1">
                1er
            </td>
            <td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    
        </tr>
        <tr>
            <td class="colonne1">
                Buttage
            </td>
            <td class="colonne1">
                1er
            </td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td  class="blue"></td><td class="blue"></td><td  class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    
        </tr>
        <tr>
            <td colspan="2" class="colonne1">
                Recolte
            </td>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td  class="blue"></td><td class="blue"></td><td></td>
        </tr>
    </table>`
}
        return tabs + grest
    }).join('')
    document.getElementById('geer').innerHTML = html
}