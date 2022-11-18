"use strict";

const tabheader = document.querySelector(".tabheader"),
    tabheaderItems = document.querySelectorAll(".tabheader__item"),
    tabcontentOptions = document.querySelectorAll(".tabcontent");


tabheader.addEventListener("click", (e)=>{
    if (e.target.classList.contains("tabheader__item")){
        tabcontentOptions.forEach((item, index)=>{
            item.classList.remove("tabcontent_visible");
        });
        tabheaderItems.forEach((item, index)=>{
            item.classList.remove("tabheader__item_active");
            if (item === e.target){
                activateTab(index);
            }
        });

    }
});

function activateTab(index){
    tabheaderItems[index].classList.add("tabheader__item_active");
    tabcontentOptions[index].classList.add("tabcontent_visible");
}


