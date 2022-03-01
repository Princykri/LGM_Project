const inputArea= document.querySelector(".inputArea input");
const addbtn =document.querySelector(".inputArea button");
const mylist =document.querySelector(".mylist");
const clearAll=document.querySelector(".clear");

inputArea.onkeyup=()=>{
    let userInput =inputArea.value;      // store user input in  "userInput ""
        if(userInput.trim()!=0){
            addbtn.classList.add("active");      //add the "active class property" 
        }else{
            addbtn.classList.remove("active"); 
        }
}
showtask();     //  data will listed in the list from local storage if present

addbtn.onclick=()=>{
    let  userInput =inputArea.value;
    let getLocalStorage =localStorage.getItem("new task");
    if(getLocalStorage == null){
        taskArr=[];       // create a space
    }else {
        taskArr=JSON.parse(getLocalStorage);    // Parse - JSON string -> js Object
    
    }
    taskArr.push( userInput);                                  // Storing userInput to taskArr 
    localStorage.setItem("new task",JSON.stringify(taskArr));  // stringify - js object -> JSON string 
    showtask();
}

function showtask(){
    let getLocalStorage =localStorage.getItem("new task");
    if(getLocalStorage == null){
        taskArr=[];      
    }else {
        taskArr=JSON.parse(getLocalStorage);    
    
    }
    let Savedtag =' ';
     taskArr.forEach((element,index) => {
         Savedtag +=`<li> ${element} <span onclick="deleteTask(${index})" ><i class="fa-solid fa-trash"></i></span></li>`;
     });
     mylist.innerHTML=Savedtag;            // add the task to the " ul "
     inputArea.value=" ";                 //--> After task  added return to space
}
function deleteTask(index){
    let getLocalStorage =localStorage.getItem("new task");
    taskArr=JSON.parse(getLocalStorage);  
    taskArr.splice(index,1);
    localStorage.setItem("new task",JSON.stringify(taskArr));  
    showtask();

}

clearAll.onclick=()=>{
    taskArr=[];
    localStorage.setItem("new task",JSON.stringify(taskArr));  
    showtask();
}