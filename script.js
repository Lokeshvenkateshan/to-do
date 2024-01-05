const inputb = document.getElementById("input")
const listc = document.getElementById("list")

function addwork(){
    if(inputb.value === ''){
        alert("Add Your Work Something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputb.value   + "<button onclick='del(event)'>Delete</button>" ;
        listc.appendChild(li);
        save();
        li.addEventListener('click',()=>{
            li.style.textDecoration = 'line-through'
            save();
        })
    }
    inputb.value=''
    save();
}

function del(event){
    event.target.parentElement.remove()
    save();
}
function save(){
    localStorage.setItem("data",list.innerHTML)
}
function showsave(){
    list.innerHTML=localStorage.getItem("data")
}
showsave();