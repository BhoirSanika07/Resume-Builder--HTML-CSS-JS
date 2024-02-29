function addNewWwField(){
let newNode = document.createElement("textarea");
newNode.classList.add("form_control");
newNode.classList.add('wefield');
//    newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","enter here");
let weob=document.getElementById("we");
let weaddbuttonOb=document.getElementById("weaddbutton");
weob.insertBefore(newNode,weaddbuttonOb);


}
function AddNewWwField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form_control");
    newNode.classList.add('wefield');
    //    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");
    let weob=document.getElementById("WE");
    let weaddbuttonOb=document.getElementById("Weaddbutton");
    weob.insertBefore(newNode,weaddbuttonOb);
    
    
    }

    // for cgenerate cv
function GenerateCv(){
//   1--> for name 
    //  to peeek value of name field ,create namefield object
let namefield=document.getElementById("nameField").value; 
// same to put 
let nameT1=document.getElementById("nameT1");
// transfer value form nameField to nameT
nameT1.innerHTML=namefield;
// perfect example of Dom manipulation
nameT2.innerHTML=namefield;

// 2--> for contact number
let contactField =document.getElementById("contactField").value;
let contactT=document.getElementById("contactT");
contactT.innerHTML=contactField;

// 3--> for address 
let addressField =document.getElementById("addressField").value;
let addressT=document.getElementById("addressT");
addressT.innerHTML=addressField;

// 4-->for instagram
let InstagramField =document.getElementById("InstagramField").value;
let instaT=document.getElementById("instaT");
instaT.innerHTML=InstagramField;

// 5-->for twitter
let TwitterField =document.getElementById("TwitterField").value;
let twitterT=document.getElementById("twitterT");
twitterT.innerHTML= TwitterField;

// 3-->for linkedin
let LinkedinField =document.getElementById("LinkedinField").value;
let linkedinT=document.getElementById("linkedinT");
linkedinT.innerHTML= TwitterField;

// 4--> for objective

//  new one for objective
document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;




const weS= document.getElementById("work");
let str =" ";
for(let e of weS)
{
    str = str + `<li> ${e.value} </li>`;
   
}
document.getElementById("workT").innerHTML=str;

// 5--> for .work
// let work =document.getElementById("work").value;
// let workT=document.getElementById("workT");
// workT.innerHTML= work;

// 6--> for academic
// let academic =document.getElementById("academic").value;
// let academicT=document.getElementById("academicT");
// academicT.innerHTML=academic;
const acq= document.getElementById("work");
let str1 =" ";
for(let e of acq)
{
    str1 = str1 + `<li> ${e.value} </li>`;
   
}
document.getElementById("acfield").innerHTML=str1;


//  to hide cv form 
// document.getElementById('cv_form').style.display='none';
// document.getElementById('cv_template').style.display='block';
}

// for print cv
function PrintCv(){
    window.print();

}
