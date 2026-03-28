console.log("hello Calc");

buttons = document.querySelectorAll(".num")
display = document.querySelector(".display")
buttons.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerText === '=') {
            try {
                let a = eval(display.innerText);
            display.innerText = `${a}`;
            } catch (error) {
                display.innerText = `ERROR`;
            }
            
        }
        else if(e.innerText==='⌫'){
            display.innerText=display.innerText.slice(0,-1);
        }
        else {
            display.innerText += `${e.innerText}`;
        }
        
    })
});
