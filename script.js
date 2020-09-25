
var navList = document.querySelectorAll("nav .horizontal-list a, .vertical-list a");
//console.log(navList);
var interval;
for(let i=0; i<navList.length;i++){
    navList[i].addEventListener('click',function(event){
        event.preventDefault();

        var target = this.textContent.trim().toLowerCase();

        var targetSection = document.getElementById(target);

        var targetDistance = targetSection.getBoundingClientRect().top;

        interval = setInterval(function(){
            verticalScroll(targetDistance);
            targetDistance-=50;
        },10);
    });
}

function verticalScroll(targetDistance){
    if(targetDistance<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}

var perc = document.querySelectorAll(".performance div");
var skill = document.getElementById("my-name");
var targetSkill = skill.getBoundingClientRect().top;

var workExp = document.getElementById("work-exp");
var targetWork = workExp.getBoundingClientRect().top;

window.onscroll = function(){
    fillSkills();
}

function fillSkills(){
    if((document.body.scrollTop > targetSkill && document.body.scrollTop < targetWork) || (document.documentElement.scrollTop > targetSkill && document.documentElement.scrollTop < targetWork)){
        for(let i=0; i<perc.length; i++){
            var x = perc[i].getAttribute('data-val');
            perc[i].style.width = x;
        }
    }
    else{
        for(let i=0; i<perc.length; i++){
            perc[i].style.width = "0";
        }
    }
}

//Scroll Percent

var docHeight = document.documentElement.scrollHeight;
var viewPerc = document.getElementById("viewpercent");
var a = window.innerHeight;
var b = window.scrollY;

window.addEventListener('resize', function(){
    a = window.innerHeight;
    docHeight = document.documentElement.scrollHeight;
    b = window.scrollY;
})

window.addEventListener('scroll', function(){
    b = window.scrollY;
    var windowHeight = a;
    var percentViewed = Math.round((b/(docHeight-windowHeight))*100);
    viewPerc.innerText = percentViewed;
});