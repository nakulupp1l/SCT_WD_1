var header = document.querySelector("header");
var links = document.querySelectorAll(".link");
var sections = document.querySelectorAll('.sections');
window.onscroll = function(){
    if(window.pageYOffset >  header.offsetHeight){
    header.style.background = 'rgba(0,0,0,0.5)';
    }
    else{
        header.style.background = 'black';
    }
    var current = 'home';
    sections.forEach((section)=>{
        const sectionTop =  section.offsetTop;
        if(pageYOffset >= sectionTop-150){
            current = section.getAttribute('id');
        }
    })
    links.forEach((item)=>{
    console.log(item)
    item.classList.remove('active');
    if(item.href.includes(current)){
        item.classList.add("active")
    }
    else{
    console.log("else")
    item.classList.remove("active")

    }
   })
}