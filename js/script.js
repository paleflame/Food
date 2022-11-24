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
        const timeLeft = new Date(date) - new Date().getTime();
        if (timeLeft > 0){
            this.timeLeft = timeLeft;
        }
        else {
            this.timeLeft = 0;
        }

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
        if (this.timeLeft > 0){
            this.timeLeft += value;
        }

        time.updateTime();
    }
};


time.setTimeLeft("2022-12-30");
time.updateTime();
const timerInterval = setInterval(()=>{
    if (time.timeLeft <= 0){
        clearInterval(timerInterval);
    }
    time.changeTime(-1000);
}, 1000);

// modal
const modal = document.querySelector(".modal"),
    modalButtons = document.querySelectorAll("[data-modalBtn]");

console.log(modalButtons);

modalButtons.forEach(button=>{
    button.addEventListener("click", openModal)
})
modal.addEventListener("click", closeModal)

function closeModal(e){
    if (e.target.classList.contains("modal") || e.target.classList.contains("modal__close")){
        modal.classList.remove("modal_opened")
    }
}

function openModal(e){
    modal.classList.add("modal_opened");
}