
/*const add=function(){
    const data =document.getElementById("Store")
   
    
        data.innerText="hii welcome"
        
        data.style.backgroundColor="yellow"
      };
function move(){
    data=document.getElementById("p")
    data.style.backgroundColor="black"
};
function out(){
    data=document.getElementById("Store")
    data.style.backgroundColor="white"
};    
const delet=() => {
    const data =document.getElementById("dele")
    document.body.removeChild(data)

}
const para= function(){
    const div =document.createElement("p")
    document.getElementById("root").appendChild(div)
    div.innerHTML="hiii"
}
const act = ()=>{
    const element =document.activeElement.tagName
    console.log(element);
    
}
const dele=()=>{
    const data =document.getElementsByClassName("dele")
    document.getElementById("root").removeChild(data[1])
}
const para= function(){
    const div =document.createElement("p")
    document.getElementById("root").appendChild(div)
    div.innerHTML="hiii"
}
function add(){
    const data= document.getElementsByClassName("hi1").value;
    for (let i=1;i< data.length;i++){
        data[i].style.color="blue"
    }
    console.log((data));
    
}
function add1(){
    const data =document.getElementById("hi1").value
    const data1 = document.createElement("p")
    data1.innerHTML = data.innerHTML
    
    
}
const button=document.getElementById("git")
button.addEventListener("click", function(){

    const para=document.createElement("p")
        para.innerHTML="Lingesh";
        document.body.appendChild(para);
    
})*/
$(document).ready(function(){
    $("#git").click(function(){
        $("#para").html("hii da")
    } )
})




    
