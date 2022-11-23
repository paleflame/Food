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


function addZero(num){
    if (num < 10){
        return `0${num}`;
    }
    else {
        return String(num);
    }
}
const timer = document.querySelector(".promotion__timer");
const time = {
    elements: {
        days: timer.querySelector("#days"),
        hours: timer.querySelector("#hours"),
        minutes: timer.querySelector("#minutes"),
        seconds: timer.querySelector("#seconds"),
    },
    captions: {
        days: timer.querySelector(".days-caption"),
        hours: timer.querySelector(".hours-caption"),
        minutes: timer.querySelector(".minutes-caption"),
        seconds: timer.querySelector(".seconds-caption"),
    },
    timeLeft: 0,
    setTimeLeft(date){
        this.timeLeft = new Date(date) - new Date().getTime();
    },
    updateTime(){
        this.elements.days.textContent = addZero(Math.trunc(this.timeLeft /  ( 60 * 60 * 1000 * 24)));
        this.elements.hours.textContent = addZero( Math.trunc(this.timeLeft /  ( 60 * 60 * 1000)) % 24);
        this.elements.minutes.textContent =  addZero(Math.trunc(this.timeLeft /  (60 * 1000) % 60));
        this.elements.seconds.textContent = addZero( Math.trunc(this.timeLeft /  1000) % 60);
    },
    changeCaptions(){

    },
    changeTime(value){
        this.timeLeft += value;
        time.updateTime();
    }
};


time.setTimeLeft("2022-10-30");
console.log(time.timeLeft / (1000 * 60 * 60 * 24));
time.updateTime();

const timerInterval = setInterval(()=>{
    time.changeTime(-1000);
    if (time.timeLeft <= 0){
        clearInterval(timerInterval);
    }
}, 1000);

// console.log(time.days.innerText, time.hours.innerText, time.minutes.innerText, time.seconds.innerText);