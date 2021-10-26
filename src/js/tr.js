//charts
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Perspective Climatique',
            data: [12, 19, 3, 5, 2, 3],
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





//fetch request
function getvalues(volana,faritra){
    if(volana=="Full" && faritra=="Fuls"){
        fetch('http://localhost:1337/donnees')
        .then((response) =>response.json())
        .then((text)=>text.sort(sortout))
        .then((data) => generatALL(data))

    }else if(faritra=="Fuls" && volana!="Full"){
        fetch('http://localhost:1337/donnees')
        .then((response) =>response.json())
        .then((data)=>data.filter(mois=>mois.volana.NOM.includes(volana)))
        .then((data)=>genereg(data))
    
    }else if(faritra!="Fuls" && volana=="Full"){
        fetch('http://localhost:1337/donnees')
        .then((response) =>response.json())
        .then((data)=>data.filter(region=>region.faritany.NOM.includes(faritra)))
        .then((data) => genemoi(data))
    }else{
        fetch('http://localhost:1337/donnees')
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
    const tabls = `<table class="table table-striped mt-5" style=" text-align: center;margin-bottom: 10px" id="tableau">
    <tr>
        <td> Region </td> <td> Température Moyenne </td> <td> Précipitation Maximale </td> <td> Précipitation minimale </td> 
    </tr>`
    const html = resp.map(element => {
        let liste = `<tr><td>${element.faritany.NOM}</td> <td>  ${element.T_Moy}</td> <td> ${element.Prec_max}</td> <td> ${element.Prec_min}</td></tr>`
        return liste
    }
    ).join('')
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
    const tabls = `<table class="table table-striped mt-5" style=" text-align: center;margin-bottom: 10px" id="tableau">
    <tr>
        <td> Mois </td> <td> Température Moyenne </td> <td> Précipitation Maximale </td> <td> Précipitation minimale </td> 
    </tr>`
    const html = resp.map(element => {
        let liste = `<tr><td> ${element.volana.NOM} </td> <td>  ${element.T_Moy}</td> <td> ${element.Prec_max}</td> <td> ${element.Prec_min}</td></tr>`
        return liste
    }
    ).join('')
    document.getElementById('liste').innerHTML=tabls+html+"</table>"
}

function sortout(x,y){
    return ((x.volana.id == y.volana.id) ? 0 : ((x.volana.id > y.volana.id) ? 1 : -1));
}
function asortby(x,y){
    return ((x.title == y.title) ? 0 : ((x.title < y.title) ? 1 : -1));
}