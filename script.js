const inputBox = document.getElementById('input-box');
const listCntainer = document.getElementById('list-container');
let buttons = document.querySelector('button');
console.log(buttons);
buttons.addEventListener('click',(e)=>{
    addTask()
})

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listCntainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ='';
    saveData();
}

listCntainer.addEventListener('click', (e)=>{
    if(e.target.tagName=== 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
       e.target.parentElement.remove();
       saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listCntainer.innerHTML);
}

function showTask(){
    listCntainer.innerHTML = localStorage.getItem("data");
}
showTask();
