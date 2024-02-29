function addNewWwField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form_control");
    newNode.classList.add('wefield');
    //    newNode.setAttribute("rows",3);
    let weob=document.getElementById("we");
    let weaddbuttonOb=document.getElementById("weaddbutton");
    weob.insertBefore(newNode,weaddbuttonOb);
    
    
    }