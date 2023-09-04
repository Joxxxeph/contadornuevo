const hh = document.querySelector(".hh")
const incre = document.querySelector(".incre")
const decre = document.querySelector(".decre")
const reset = document.querySelector(".reset")
let count = 0
hh.textContent = count

incre.addEventListener("click", function(){
    count++;
    hh.textContent = count;
    if(count >= 5) hh.style.color = "#00bfff";
    if(count >= 10) hh.style.color = "#e60023";
        
    
});
decre.addEventListener("click", function(){
    if (count > 0){
        count --;
        hh.textContent= count;
    }
    if (count >= 0) hh.style.color = '#000';
    if(count >= 5) hh.style.color = "#00bfff";
    if(count >= 10) hh.style.color = "#e60023";

});
reset.addEventListener("click", function(){
    count = 0;
    hh.textContent = count;
    hh.style.color = "#000";
});

