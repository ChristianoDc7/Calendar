if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then((reg)=>console.log('service worker registered',reg))
    .catch((err)=>console.log('service worker not registered',err))
}else{
    console.log('Votre Navigateur ne supporte pas la version offline')
}