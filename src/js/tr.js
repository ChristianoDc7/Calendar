const url = 'src/database/data1.json';

function showtable(){
    document.getElementById('cnv').style.display="none"
    document.getElementById('liste').style.display="block"
}
showtable()
function showgraph(){
    document.getElementById('cnv').style.display="block"
    document.getElementById('liste').style.display="none"
}
//fetch request
function getvalues(volana,faritra){
    if(volana=="Full" && faritra=="Fuls"){
        document.getElementById('myChart').innerHTML=""
        fetch(url)
        .then((response) =>response.json())
        .then((text)=>text.sort(sortout))
        .then((data) => generatALL(data))

    }else if(faritra=="Fuls" && volana!="Full"){
        fetch(url)
        .then((response) =>response.json())
        .then((data)=>data.filter(mois=>mois.volana.NOM.includes(volana)))
        .then((data)=>genereg(data))
    
    }else if(faritra!="Fuls" && volana=="Full"){
        fetch(url)
        .then((response) =>response.json())
        .then((data)=>data.filter(region=>region.faritany.NOM.includes(faritra)))
        .then((data) => genemoi(data))
    }else{
        document.getElementById('myChart').innerHTML=""
        fetch(url)
        .then((response) =>response.json())
        .then((data)=>data.filter(mois=>mois.volana.NOM.includes(volana) && mois.faritany.NOM.includes(faritra)))
        .then((data) => gene2(data))
    }
    
    
}
function generatALL(resp){
    const tabls = `<table class="table table-striped mt-5" style=" text-align: center;margin-bottom: 10px" id="tableau">
    <tr>
        <td> Mois </td> <td> Region </td> <td> Température Moyenne </td> <td> Précipitation Maximale </td> <td> Précipitation minimale </td> 
    </tr>`
    const html = resp.map(element => {
        let month = `${element.volana.NOM}`
        let liste = `<tr> 
        <td> ${month} </td> <td>${element.faritany.NOM}</td> <td>  ${element.T_Moy}</td> <td> ${element.Prec_max}</td> <td> ${element.Prec_min}</td>`
        return liste
    }
    ).join('')
    document.getElementById('liste').innerHTML=tabls+html+"</table>"
}
function genereg(resp){
    //pour le tableau
    const tabls = `<table class="table table-striped mt-5" style=" text-align: center;margin-bottom: 10px" id="tableau">
    <tr>
        <td> Region </td> <td> Température Moyenne </td> <td> Précipitation Maximale </td> <td> Précipitation minimale </td> 
    </tr>`
    const html = resp.map(element => {
        let liste = `<tr><td>${element.faritany.NOM}</td> <td>  ${element.T_Moy}</td> <td> ${element.Prec_max}</td> <td> ${element.Prec_min}</td></tr>`
        return liste
    }
    ).join('')

    //pour le graphe
    const prechar = resp.map(element => {
        let label = `${element.faritany.NOM}`
        return label
    })
    const valchar = resp.map(element => {
        let value = `${element.Prec_max}`
        return value
    })
    const ctx = document.getElementById('myChart').getContext('2d');
    const moischart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: prechar,
            datasets: [{
                label: 'Precipitation',
                data: valchar ,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
            
        },
        responsive: true
    });
    document.getElementById('liste').innerHTML=tabls+html+"</table>"
}
function gene2(resp){
    const tabls = `<table class="table table-striped mt-5" style=" text-align: center;margin-bottom: 10px" id="tableau">
    <tr>
        <td> Mois </td> <td> Region </td> <td> Température Moyenne </td> <td> Précipitation Maximale </td> <td> Précipitation minimale </td> 
    </tr>`
    const html = resp.map(element => {
        let liste = `<tr><td> ${element.volana.NOM} </td> <td>${element.faritany.NOM}</td> <td>  ${element.T_Moy}</td> <td> ${element.Prec_max}</td> <td> ${element.Prec_min}</td></tr>`
        return liste
    }
    ).join('')
    document.getElementById('liste').innerHTML=tabls+html+"</table>"
}
function genemoi(resp){
    //pour le tableau
    const tabls = `<table class="table table-striped mt-5" style=" text-align: center;margin-bottom: 10px" id="tableau">
    <tr>
        <td> Mois </td> <td> Température Moyenne </td> <td> Précipitation Maximale </td> <td> Précipitation minimale </td> 
    </tr>`
    const html = resp.map(element => {
        let liste = `<tr><td> ${element.volana.NOM} </td> <td>  ${element.T_Moy}</td> <td> ${element.Prec_max}</td> <td> ${element.Prec_min}</td></tr>`
        return liste
    }
    ).join('')

    //pour le graphe
    const prechar = resp.map(element => {
        let label = `${element.volana.NOM}`
        return label
    })
    const valchar = resp.map(element => {
        let value = `${element.Prec_max}`
        return value
    })
    const ctx = document.getElementById('myChart').getContext('2d');
    const moischart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: prechar,
            datasets: [{
                label: 'Precipitation',
                data: valchar ,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.getElementById('liste').innerHTML=tabls+html+"</table>"
}

function sortout(x,y){
    return ((x.volana.id == y.volana.id) ? 0 : ((x.volana.id > y.volana.id) ? 1 : -1));
}
function asortby(x,y){
    return ((x.title == y.title) ? 0 : ((x.title < y.title) ? 1 : -1));
}