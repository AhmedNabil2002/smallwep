// select landing bage element 
let landing = document.querySelector(".landing-area")
let images=["./picture/download (1).jpg","./picture/download (2).jpg","./picture/download (3).jpg","./picture/download (4).jpg"
,"./picture/download (0).jpg"]
let maincolor=localStorage.getItem("color_obtion")
let pictituree=document.getElementById("cv")
if(maincolor!== null){
    document.documentElement.style.setProperty("--main--color",maincolor)
    if(maincolor=="rgb(204, 160, 16)"){
        pictituree.innerHTML='<img src="./picture/elio.jpg">'
    }else if(maincolor=="coral"){
        pictituree.innerHTML='<img src="./picture/cora.jpg">'
    }else if(maincolor=="aqua"){
        pictituree.innerHTML='<img src="./picture/aqua.jpg">'
    }
    else if(maincolor=="crimson"){
        pictituree.innerHTML='<img src="./picture/crimson.jpg">'
    }
    else if(maincolor=="darkviolet"){
        pictituree.innerHTML='<img src="./picture/drakviolet.jpg">'
    }
    
    
}

const colorli=document.querySelectorAll(".colores li ")
colorli.forEach(li=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
        localStorage.setItem("color_obtion",e.target.dataset.color)

        handell(e)
    })
})
const randomback=document.querySelectorAll(".option-box span ")
randomback.forEach(span=>{
    span.addEventListener("click",(e)=>{ 
        handell(e)
        if(e.target.dataset.background==="yes"){
            backgroundoption=true
            localStorage.setItem("background_option",true)
            randomizeImage()
        }
        else {
            backgroundoption=false
            localStorage.setItem("background_option",false)
            clearInterval(backgroundInterval)
        }
    })
})
// start setting-box
document.querySelector(".fa-gear").onclick=function(){
    document.querySelector(".setting-box").classList.toggle("oben")
}
let backgroundoption;
let backgroundInterval;
//check if localstoreg
let backgroundlocalitem=localStorage.getItem("background_option")
if (backgroundlocalitem!==null){
    if(backgroundlocalitem=="true"){
        backgroundoption=true
    }else{
        backgroundoption=false
    }
    document.querySelectorAll(".option-box span").forEach(element=>{
        element.classList.remove("active")
    });

    if(localStorage.getItem("background_option")==="true"){
        document.querySelector(".option-box .yes").classList.add("active")
    }
    else{
        document.querySelector(".option-box .no").classList.add("active")
    }
}

function randomizeImage(){
    if(backgroundoption==true){
backgroundInterval=setInterval( ()=>{
    let randamnumber =Math.floor(Math.random()*images.length)
    landing.style.backgroundImage ='url("'+images[randamnumber] +'")';
},1000)
    }
}
randomizeImage()
// skilles 
let ourskilles=document.querySelector(".skills")
window.onscroll=function(){
    let skillesofsettop=ourskilles.offsetTop;
    let skillesofsethieght=ourskilles.offsetHeight;
    let windowhieght=this.window.innerHeight;
    let windowscrolltop = this.pageYOffset;
    if( windowscrolltop > ( skillesofsettop + skillesofsethieght - windowhieght )){
        let allskilles =document.querySelectorAll(".skill-box .skill-progretes .lk")
        allskilles.forEach(skill=>{

            skill.style.width=skill.dataset.progres;
        })
    }
}
// creat pop gallary
let ourgallary =document.querySelectorAll(".gallare img")
let overlay=document.createElement("div")
ourgallary.forEach(img=>{
    img.addEventListener('click',(e)=>{
        overlay.className="popup-overlay"
        document.body.appendChild(overlay)
        let popupbox=document.createElement("div")
        popupbox.className="popup-box"
        if(img.alt!==null){
            let imgheading=document.createElement("h3")
            let imgtext=document.createTextNode(img.alt)
            imgheading.appendChild(imgtext)
            popupbox.appendChild(imgheading)
        }
        let popupimg=document.createElement("img")
        popupimg.src=img.src
        popupbox.appendChild(popupimg)
        document.body.appendChild(popupbox)
        let closebottom=document.createElement("span")
        closebottom.className="close-bottom"
        let closebottomtext=document.createTextNode("X")
        closebottom.appendChild(closebottomtext)
        popupbox.appendChild(closebottom)
        
    })
})
// close popup
document.addEventListener("click",function(e){
    if(e.target.className=="close-bottom"){
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove()
    }
})
// #############################################################################
// let allbuletes=document.querySelectorAll(".nav-pullets .pullet");
// allbuletes.forEach((bullet)=>{
//     bullet.addEventListener("click",(e)=>{
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:"smooth"
//         })
//     })
// })
// let alllinkes=document.querySelectorAll(".linkes a");
// allbuletes.forEach((link)=>{
//     link.addEventListener("click",(e)=>{
        
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:"smooth"
//         })
//     })
// })

let bulletes=document.querySelectorAll(".bullets-optiones span")
let bulletlocal=localStorage.getItem("local-optiones")
let navv=document.querySelector(".nav-pullets")
if(bulletlocal!==null){
    bulletes.forEach(span=>{
        span.classList.remove(".active")
    })
    if(bulletlocal==="block"){
        
        navv.style.display="block";
        document.querySelector(".bullets-optiones .yes").classList.add("active")


    }
    else{

        navv.style.display="none";
        document.querySelector(".bullets-optiones .no").classList.add("active")

    }
}
bulletes.forEach(span=> {
    span.addEventListener("click",(e)=>{
        if(span.dataset.display === "show"){

            navv.style.display="block";
            localStorage.setItem("local-optiones","block")


        }
        else{

            navv.style.display="none";
            localStorage.setItem("local-optiones","none")

        }

        handell(e)
    })
})
function handell(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(n=>{
        n.classList.remove("active")
    })
    ev.target.classList.add("active")
}
// reset botton
document.querySelector(".reset-box").onclick=function(){
    localStorage.clear();
    window.location.reload();
}
// toggle meun
let tuggle=document.querySelector(".tuggel-menu")
let linkes =document.querySelector(".linkes")
tuggle.onclick=function(e){
    e.stopPropagation()
    this.classList.toggle("menu-active")
    linkes.classList.toggle("open")
    

}
linkes.onclick=function(e){
    e.stopPropagation()
}
document.addEventListener("click",function(e){
if(e.target!==tuggle && e.target!==linkes){
    if(linkes.classList.contains("open")){
        tuggle.classList.toggle("menu-active")
        linkes.classList.toggle("open")
    }
}
})