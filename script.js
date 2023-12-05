function valuesetters() {
    // gsap.set("#nav", {y: "100%", opacity: 0 });
    gsap.set("#home span .child", {y: "100%"});
    gsap.set("#home .row img", {y: "100%"});
}

function revealtospan() {
    document.querySelectorAll(".reveal").forEach(function(elem){
        //Create two spans
        let parent = document.createElement("span");
        let child = document.createElement("span");
    
    
        //Parent and childs both sets their respective clases
        parent.classList.add("parent");
        child.classList.add("child");
    
        //Span parent gets childs and childs gets elem details
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
    
        //elem gets replaces its valuewith parent span
        elem.innerHTML = "";
        elem.appendChild(parent)
    });
    
}



function loaderanimation() {
    
var tl = gsap.timeline();
tl.from("#loader .child span", {
    x: "100px",
    duration: 1,
    delay: 1,
    stagger: .2,
    ease: Expo.easeInOut
})
.to("#loader .parent .child", {
    y: "-100%",
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut
})
.to("#loader", {
    height: 0,
    duration: 1,
    ease: Expo.easeInOut
})
.to("#green", {
    height: "100%",
    top: 0,
    duration: 0.6,
    delay: -.1,
    ease: Circ.easeInOut
})
.to("#green", {
    height: "0%",
    top: 0,
    duration: 0.6,
    delay: -.1,
    ease: Circ.easeInOut,
    oncomplete: function (){
        animatehomepage();
    }
})


}





function animatehomepage(){
    

    var tl = gsap.timeline();
    tl.to("#home .parent .child ", {
        y: 0, 
        stagger: .1,
        duration:.5,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child ", {
        opacity: 1,
        ease: Expo.easeInOut,
    })
}



  
revealtospan();
valuesetters();
loaderanimation();


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
});
const hiddenelements = document.querySelectorAll(".hidden");
hiddenelements.forEach((el)=> observer.observe(el));

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show2')
        }else{
            entry.target.classList.remove('show2')
        }
    });
});
const hiddenelements2 = document.querySelectorAll(".hidden2");
hiddenelements2.forEach((el)=> observer2.observe(el));

const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show3')
        }else{
            entry.target.classList.remove('show3')
        }
    });
});
const hiddenelements3 = document.querySelectorAll(".hidden3");
hiddenelements3.forEach((el)=> observer3.observe(el));






let h6 = document.getElementById("h6")
let ex = document.getElementById("nav")

h6.addEventListener("click", function(){
    
    if(ex.style.height === "400px"){
        ex.style.height = "0px"
        ex.style.transition = "all ease .4s"
    }else{
        ex.style.height = "400px"
        ex.style.transition = "all ease .4s"
    }
})



 
































