window.onscroll=function(){myfunction()};

var button =document.getElementById("click");
var navbar=document.getElementById("nav");
var sticky=navbar.offsetTop;
function myfunction(){
    if(window.pageYOffset>=sticky){                      
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}

button.onclick=()=>{
    var myrequest=new Request("https://reqres.in/api/users?page=1"); // -->request to the Api 
    fetch(myrequest,{
        method:"get"
    })

    .then(Response => Response.json())     
    .then(res=>{
        
             res.data.forEach(element => {

            var container=document.createElement("div");           // create a div for user data 
            container.className="container";

            var img =document.createElement("img");              // fectch the img and add in img element
            img.className="img";
            img.src=element.avatar;

            var UserContent=document.createElement("div");          // create a div for User info 
            UserContent.className="UserContent";

            var span1=document.createElement("span");                   // spna for user ID 
            var label1=document.createElement("label");            
            label1.append("ID: ");
            var label2=document.createElement("label");
            label2.append(element.id);
            span1.append(label1,label2);

            var span2=document.createElement("span");                   // spna for user first name and last name 
            var label3=document.createElement("label");            
            label3.append("NAME: ");
            var label4=document.createElement("label");
            label4.append(element.first_name);
            var label5=document.createElement("label");
            label5.append(element.last_name);
            span2.append(label3,label4,label5);

            var span3=document.createElement("span");                   // spna for user Email 
            var label6=document.createElement("label");            
            label6.append("E-MAIL: ");
            var label7=document.createElement("label");
            label7.append(element.email);
            span3.append(label6,label7);


           UserContent.append(span1);
           UserContent.append(span2)
           UserContent.append(span3)
           container.append(img);
           container.append(UserContent);

           document.getElementById("content").append(container);

           
          });
      


    })
    
}