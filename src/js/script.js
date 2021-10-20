
var tableau = document.querySelector('.table')
var obj;



function tablu(deb,fin){
    if(deb){
    let ddu = Number(deb.substr(-2,2))
    let mdu = Number(deb.substr(-5,2))
    let dfu = Number(fin.substr(-2,2))
    let mfu = Number(fin.substr(-5,2))
    let mth ;

    //switch du debut 
    switch (mdu) {
        case 10:
           if(ddu>0 && ddu<11){
               mth = 0
           }else if(ddu>10 && ddu<21){
                mth = 1
           }else{
                mth = 2
           };
          break;
        case 11:
            if(ddu>0 && ddu<11){
                mth = 3
            }else if(ddu>10 && ddu<21){
                 mth = 4
            }else{
                 mth = 5
            };
          break;
        case 12:
            if(ddu>0 && ddu<11){
                mth = 6
            }else if(ddu>10 && ddu<21){
                 mth = 7
            }else{
                 mth = 8
            };
          break;
        case 1:
            if(ddu>0 && ddu<11){
                mth = 9
            }else if(ddu>10 && ddu<21){
                 mth = 10
            }else{
                 mth = 11
            };
          break;
        case 2:
            if(ddu>0 && ddu<11){
                mth = 12
            }else if(ddu>10 && ddu<21){
                 mth = 13
            }else{
                 mth = 14
            };
          break;
        case 3:
            if(ddu>0 && ddu<11){
                mth = 15
            }else if(ddu>10 && ddu<21){
                 mth = 16
            }else{
                 mth = 17
            };                    
          break;
        case 4:
            if(ddu>0 && ddu<11){
                mth = 18
            }else if(ddu>10 && ddu<21){
                 mth = 19
            }else{
                 mth = 20
            };
          break
        case 5:
            if(ddu>0 && ddu<11){
                mth = 21
            }else if(ddu>10 && ddu<21){
                 mth = 22
            }else{
                 mth = 23
            };
          break
        default :
         mth = "tsisy"

      }

      let msh;
      //switch du fin
      switch (mfu) {
        case 10:
           if(dfu>0 && dfu<11){
               msh = 0
           }else if(dfu>10 && dfu<21){
                msh = 1
           }else{
                msh = 2
           };
          break;
        case 11:
            if(dfu>0 && dfu<11){
                msh = 3
            }else if(dfu>10 && dfu<21){
                 msh = 4
            }else{
                 msh = 5
            };
          break;
        case 12:
            if(dfu>0 && dfu<11){
                msh = 6
            }else if(dfu>10 && dfu<21){
                 msh = 7
            }else{
                 msh = 8
            };
          break;
        case 1:
            if(dfu>0 && dfu<11){
                msh = 9
            }else if(dfu>10 && dfu<21){
                 msh = 10
            }else{
                 msh = 11
            };
          break;
        case 2:
            if(dfu>0 && dfu<11){
                msh = 12
            }else if(dfu>10 && dfu<21){
                 msh = 13
            }else{
                 msh = 14
            };
          break;
        case 3:
            if(dfu>0 && dfu<11){
                msh = 15
            }else if(dfu>10 && dfu<21){
                 msh = 16
            }else{
                 msh = 17
            };                    
          break;
        case 4:
            if(dfu>0 && dfu<11){
                msh = 18
            }else if(dfu>10 && dfu<21){
                 msh = 19
            }else{
                 msh = 20
            };
          break
        case 5:
            if(dfu>0 && dfu<11){
                msh = 21
            }else if(dfu>10 && dfu<21){
                 msh = 22
            }else{
                 msh = 23
            };
          break
        default :
         msh = "tsisy"

      }
      
  
    let derp = ['<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>',]

    for(let i=mth; i<msh ; i++){
    derp[i]='<td class="blue"></td>'}
    derp[msh]='<td class="red"></td>'
    return derp.join('')}else{
        return ""
    }
}
function getvalues(fambolena,faritra){
    if(faritra=="none" && fambolena=="none"){
        document.getElementById('geer').innerHTML = "<h1>Misafidiana sokajy azafady!!</h1>"
    }else if(faritra=="none" && fambolena!="none"){
        fetch('src/database/data.json')
        .then((response) =>response.json())
        .then((data)=>data.filter(({culture}) => culture.includes(fambolena)))
        .then((data) => generate(data))
    }else if(faritra!="none" && fambolena=="none"){
        fetch('src/database/data.json')
        .then((response) =>response.json())
        .then((data)=>data.filter(({Region}) => Region.includes(faritra)))
        .then((data) => generate(data))
    }else{
        fetch('src/database/data.json')
        .then((response) =>response.json())
        .then((data)=>data.filter(({culture,Region}) => culture.includes(fambolena) && Region.includes(faritra)))
        .then((data) => generate(data))
    }
    
    
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
        ${tablu(element.Prepa_sol_start,element.prepa_sol_end)}
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
        ${tablu(element.semis_start,element.semi_end)}
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
        ${tablu(element.rep_start,element.rep_end)}
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
        ${tablu(element.fert_1_sart,element.fert_1_end)}
    </tr>
    <tr>
        <td class="colonne1">
            2ème
        </td>
        ${tablu(element.fert_2_start,element.fert_2_end)}
    </tr>
<tr ${cls}>
    <td class="colonne1" >
        3ème
    </td>
    ${tablu(element.fert_3_start,element.fert_3_end)}
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
        ${tablu(element.sarc_1_start,element.sarc_1_end)}
    </tr>
    <tr ${karc}>
        <td class="colonne1" >
            2ème
        </td>
        ${tablu(element.sarc_2_start,element.sarc_2_end)}
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
        ${tablu(element.but_1_start,element.but_1_end)}
    </tr>
    <tr ${larc}>
        <td class="colonne1">
            2ème
        </td>
        ${tablu(element.but_2_start,element.but_2_end)}
    </tr>
    `}else{
        butt =""
    }



    
//recolte
let recl = `<tr>
        <td colspan="2" class="colonne1">
            Recolte
        </td>
        ${tablu(element.rec_start,element.rec_end)}
    </tr>
</table>`


        return tabs + prepa + semis  +repi+ fert + sarc + butt + recl    
    }).join('')
    document.getElementById('geer').innerHTML = html
}