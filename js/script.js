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


modalButtons.forEach(button=>{
    button.addEventListener("click", openModal)
})
modal.addEventListener("click", closeModal)

// const openaModalTimeout = setTimeout(openModal, 50_00);

function closeModal(e){
    if (e.target.classList.contains("modal") || e.target.classList.contains("modal__close") || e.code === "Escape"){
        modal.classList.remove("modal_opened")
    }
    document.body.style.overflow = "scroll";

}
function openModal(e){
    modal.classList.add("modal_opened");
    document.body.style.overflow = "hidden";
    clearTimeout(openaModalTimeout);
}

document.addEventListener("keydown", (e)=>{
        closeModal(e);
});

window.addEventListener("scroll", modalOnScroll);

function modalOnScroll(){
    if (document.documentElement.scrollHeight - document.documentElement.clientHeight ===  document.documentElement.scrollTop){
        window.removeEventListener("scroll", modalOnScroll);
        openModal();
    }
}

// формируем карточки с помощью классов

class MenuItem {
    constructor(imageSrc, altText, menuName, description, price, currency, parentSelector) {
        this.imageSrc = imageSrc;
        this.altText = altText;
        this.menuName = menuName;
        this.description = description;
        this.price = price;
        this.currency = currency;
        this.parent = document.querySelector(parentSelector);

    }
    render(){
        const element = document.createElement("div");
        element.classList.add("menu__item");
        element.innerHTML = `
                    <img src="${this.imageSrc}" alt="${this.altText}">
                    <h3 class="menu__item-subtitle">Меню "${this.menuName}"</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> ${this.currency}/день</div>
                    </div>`
        this.parent.append(element);



    }
}
new MenuItem("img/tabs/vegy.jpg", "vegetarian", "Фитнес", "Меню \"Фитнесс\" это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!", 229, "грн.", ".menu__field .container" ).render()
new MenuItem("img/tabs/elite.jpg", "elite", "Премиум", "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!", 550, "грн.", ".menu__field .container" ).render();
new MenuItem("img/tabs/post.jpg", "Post", "Постное", "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. </div>\n", 430, "грн.", ".menu__field .container").render();






/*
*
                <div class="menu__item">
                    <img src="img/tabs/elite.jpg" alt="elite">
                    <h3 class="menu__item-subtitle">Меню “Премиум”</h3>
                    <div class="menu__item-descr">В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>550</span> грн/день</div>
                    </div>
                </div>
                <div class="menu__item">
                    <img src="img/tabs/post.jpg" alt="post">
                    <h3 class="menu__item-subtitle">Меню "Постное"</h3>
                    <div class="menu__item-descr">Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>430</span> грн/день</div>
                    </div>
                </div>
            </div>
        </div>*/
