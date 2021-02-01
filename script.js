//Slider
const slider = document.getElementById("range-line");
const pageview = document.getElementById("num-pv");
const price = document.getElementById("num-price");
//Toggle
const toggle = document.getElementById("toggle");
const choosePlan = document.getElementById('plan');
let discount = 1;
//Button
const btnStart = document.getElementById("start-trial-btn");
btnStart.addEventListener("click", () => console.log("Welcome!! Access Succesful"))

slider.addEventListener("mouseup",changePrice);
toggle.addEventListener('click',activeToggle)

function changePrice(){
    if(slider.value == 0){
        pageview.innerHTML = '10K'
        price.innerHTML = "$"+ discount * 8.00 +".00";
    }
    if(slider.value == 25){
        pageview.innerHTML = '50K'
        price.innerHTML = "$"+discount * 12.00 + ".00";
    }
    if(slider.value == 50){
        pageview.innerHTML = '100K'
        price.innerHTML ="$"+ discount * 16 + ".00";
    }
    if(slider.value == 75){
        pageview.innerHTML = '500K'
        price.innerHTML = "$"+discount * 24 + ".00";
    }
    if(slider.value == 100){
        pageview.innerHTML = '1M'
        price.innerHTML = "$"+discount * 36+".00";
    }
}

function activeToggle(){
    if(toggle.checked){
        choosePlan.innerHTML = '/ Yearly';
        discount = .75;
        changePrice();
    }
    else{
        choosePlan.innerHTML = '/ Monthly';
        discount = 1;
        changePrice();
    }
}
