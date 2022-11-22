"use strict";

// tabs
const tabheader = document.querySelector(".tabheader"),
    tabheaderItems = document.querySelectorAll(".tabheader__item"),
    tabcontentOptions = document.querySelectorAll(".tabcontent");


tabheader.addEventListener("click", (e)=>{


    if (e.target.classList.contains("tabheader__item")){
        hideTabContent();
        tabheaderItems.forEach((item, index)=>{
            if (tabheaderItems[index] === e.target) showTabContent(index);
        });

    }
});



function hideTabContent(){
    tabcontentOptions.forEach((item)=>{
        item.classList.remove("tabcontent_visible");
    });
    tabheaderItems.forEach((item)=>{
        item.classList.remove("tabheader__item_active");
    });
}

function showTabContent(index){
    tabheaderItems[index].classList.add("tabheader__item_active");
    tabcontentOptions[index].classList.add("tabcontent_visible");
}



// timer

const time = {
    elements: {
        days: document.querySelector("#days"),
        hours: document.querySelector("#hours"),
        minutes: document.querySelector("#minutes"),
        seconds: document.querySelector("#seconds"),
    },

    timeLeft: 0,
    setTimeLeft(date){
        this.timeLeft = new Date(date) - new Date().getTime();
    },
    setTime(){
        this.elements.days.textContent = String( Math.trunc(this.timeLeft /  ( 60 * 60 * 1000 * 24)));
        this.elements.hours.textContent = String( Math.trunc(this.timeLeft /  ( 60 * 60 * 1000)) % 24);
        this.elements.minutes.textContent =  String(Math.trunc(this.timeLeft /  (60 * 1000) % 60));
        this.elements.seconds.textContent = String( Math.trunc(this.timeLeft /  1000) % 60);
    },
    changeTimeCaption(){

    },
    changeTime(value){
        this.timeLeft += value;
    }
};


time.setTimeLeft("2022-12-30");
console.log(time.timeLeft / (1000 * 60 * 60 * 24));
time.setTime();
const timerInterval = setInterval(()=>{
    time.setTime();
    time.changeTime(-1000);
    if (time.timeSummary < 0){
        clearInterval(timerInterval);
    }
}, 1000);
//





// console.log(time.days.innerText, time.hours.innerText, time.minutes.innerText, time.seconds.innerText);