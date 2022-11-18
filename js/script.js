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
    days: document.querySelector("#hours"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
    timeSummary: 0,
    calcTimeSummary(){
        // calculates whole amount of
        this.timeSummary = (+this.seconds.innerText * 1000) + (+this.minutes.innerText * 60 * 1000) + (+this.hours.innerText * 60 * 60 * 1000) + (+this.days.innerText * 60 * 60 * 1000 * 24);
    },
    setEndDay(futureDate){

        this.timeSummary = (new Date()).prototype.getMilliseconds();

    },
    setTime(){
        this.days.textContent = String( Math.trunc(this.timeSummary /  ( 60 * 60 * 1000 * 24)));
        this.hours.textContent = String( Math.trunc(this.timeSummary /  ( 60 * 60 * 1000)) % 24);
        this.minutes.textContent =  Math.trunc(this.timeSummary /  (60 * 1000) % 60);
        this.seconds.textContent = String( Math.trunc(this.timeSummary /  1000) % 60);
    },
    changeTime(value){
        this.timeSummary += value;
    }
}

time.calcTimeSummary()
const timerInterval = setInterval(()=>{
    time.setTime();
    time.changeTime(-1000);
    if (time.timeSummary < 0){
        clearInterval(timerInterval);
    }
}, 1000);





// console.log(time.days.innerText, time.hours.innerText, time.minutes.innerText, time.seconds.innerText);