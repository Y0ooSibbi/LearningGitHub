let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');



form.addEventListener('submit',(f)=>{
    f.preventDefault();
    console.log('submit suc');
    formValidation();
})

let formValidation = ()=>{
    if(input.value ===""){
        msg.innerHTML = "Please write something";
    }else{
        console.log('again suc');
        acceptData();

    }
}
let data ={};

let acceptData = ()=>{
    data['text']=input.value;
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`
    
    input.value="";
}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e)=>{
    input.value= e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}