let result = document.querySelector(".result");
let btn = document.querySelector(".btn");

btn.addEventListener("click",function(){
    let color = Math.random().toString(16).substring(2,8);
    color = "#" + color;
    result.innerHTML = color;
    document.body.style.backgroundColor = color;
    
})

