const postlist = document.querySelector('.post-list')
const formpost = document.querySelector('.add-form-post')
const nom = document.getElementById('name-value')
const mail = document.getElementById('email-value')
const num = document.getElementById('num-value')
const message = document.getElementById('body-value')

const url = 'http://localhost:1337/forums'

let output='';

const renderpost = (posts)=>{
    posts.forEach(post=>{
        output+=`
        <div class="card col-md-12 mt-4 bg-light">
                <div class="card-body">
                    <h5 class="card-title">
                       ${post.Nom}
                    </h5>
                    <h6 class="card-text mb-2 text-muted">${post.Email}</h6>
                    <h7 class="card-text mb-2 text-muted">${post.tel}</h7>
                    <p class="card-text">
                        ${post.Message}
                    </p>
                </div>
            </div>
        `;
        
    });
    postlist.innerHTML = output;
}
//get and read 
fetch(url)
.then(res=>res.json())
.then(data=>renderpost(data))


//create new post 
formpost.addEventListener('submit', (e)=>{
    e.preventDefault();
    fetch(url,{
        method: 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({
            Nom : nom.value,
            Message : message.value,
            Email : mail.value,
            tel : num.value
        })
    })
    .then(res=>res.json())
    .then(data=>{
        const dataArr=[];
        dataArr.push(data);
        renderpost(dataArr);
    })
})