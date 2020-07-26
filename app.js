var list=document.getElementById('list');
function addTask(){
    var add=document.getElementById('task');
    var listItem=document.createElement('li');
    console.log(listItem);
    if(add.value===""){
        alert("Task value can't be empty")
    }
    else{
    var taskValue=document.createTextNode(add.value);
    console.log(taskValue);
    listItem.appendChild(taskValue);
    list.appendChild(listItem);

    //delete button
    var delbtn=document.createElement('button');
    
    var delVal=document.createTextNode('Delete');
     delbtn.setAttribute('onClick','deleteTask(this)');
     delbtn.setAttribute('class','btn-dark');
     
      delbtn.setAttribute("style","margin-top:5px");
      
    delbtn.appendChild(delVal);
    listItem.appendChild(delbtn);

    var editbtn=document.createElement('button');
    var editVal=document.createTextNode('Edit');
    editbtn.setAttribute('onClick','editTask(this)');
    editbtn.setAttribute('class','btn-dark'); editbtn.setAttribute("style","margin-top:5px");
    

    
    editbtn.appendChild(editVal);
    listItem.appendChild(editbtn);
    list.appendChild(listItem);
    add.value="";
    }

}
function deleteTask(e){
    
    e.parentNode.remove();
   
   
}
function editTask(e){
    
    var newTask=prompt("Enter new task:",e.parentNode.childNodes[0].nodeValue);
    e.parentNode.childNodes[0].nodeValue=newTask;
}
function deleteAll(){
    list.innerHTML="";
}
