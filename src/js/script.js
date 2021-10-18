
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
        
       
        //preparation du sol ici
        let prepa;
        if (`${element.Prepa_sol_start}`!="null"){
            prepa= `<tr>
        <td colspan="2" class="colonne1">
            Préparation du sol
        </td>
        <td></td><td></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>`}else{
         prepa=""
    }
    
    
    
    
    
    //semis plantation
    let semis;
    if (`${element.semis_start}`!="null"){
    semis = `<tr>
        <td colspan="2" class="colonne1">
            Semis/plantation
        </td>
        <td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>`}else {
        semis=""
    }
    
    

    //repiquage
    let repi;
    if (`${element.rep_start}`!="null"){
    repi = `<tr>
        <td colspan="2" class="colonne1">
            Repiquage
        </td>
        <td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>`}else {
        repi=""
    }
    
    
    
    
    //fertilisation 
    let fert;
    if (`${element.fert_1_end}`!="null"){ 
        let i ;
        if(`${element.fert_3_start}`=="null"){
            i=2
            cls="style='display:none'"
        }else{
            i=3
            cls=""
        };
        
        fert = `<tr>
        <td rowspan="${i}" class="colonne1">
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
<tr ${cls}>
    <td class="colonne1" >
        3ème
    </td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>`}else{
    fert=""
}
       

//sarclage
let sarc;
if (`${element.sarc_1_start }`!="null"){ 
        let j;
        if(`${element.sarc_2_start}`=="null"){
            j=""
            karc="style='display:none'"
        }else{
            j=2
            karc=""
        };
    sarc = `<tr>
       <td rowspan="${j}" class="colonne1">
            Sarclage
        </td>
        <td class="colonne1">
            1er
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr ${karc}>
        <td class="colonne1" >
            2ème
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    `}else{
        sarc=""
    }




//buttage
let butt;
if (`${element.but_1_start }`!="null"){ 
        let k;
        if(`${element.but_2_start}`=="null"){
            k=""
            larc="style='display:none'"
        }else{
            k=2
            larc=""
        };
    butt  = `<tr>
        <td rowspan="${k}" class="colonne1">
            Buttage
        </td>
        <td class="colonne1" >
            1er
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr ${larc}>
        <td class="colonne1">
            2ème
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td><td class="red"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    `}else{
        butt =""
    }



    
//recolte
let recl = `<tr>
        <td colspan="2" class="colonne1">
            Recolte
        </td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="blue"></td><td class="blue"></td><td class="blue"></td>
    </tr>
</table>`


        return tabs + prepa + semis  + fert + sarc + butt + recl
    }).join('')
    document.getElementById('geer').innerHTML = html
}