GreetingEng1 = document.getElementById("greetingEng1");
greetingEsp1 = document.getElementById("greetingEsp1");
HoldStatement = document.getElementById("HoldStatement");
MandClosing = document.getElementById("MandClosing");
EmpDisc = document.getElementById("EmpDisc");

GreetingEng1.addEventListener("click", ()=>{
    clipboard(GreetingEng1, GreetingEng1.id)
});
greetingEsp1.addEventListener("click", ()=>{
    clipboard(greetingEsp1, greetingEsp1.id)
});
HoldStatement.addEventListener("click", ()=>{
    clipboard(HoldStatement, HoldStatement.id)
});
MandClosing.addEventListener("click", ()=>{
    clipboard(MandClosing, MandClosing.id)
});
EmpDisc.addEventListener("click", ()=>{
    clipboard(EmpDisc, EmpDisc.id)
});

function clipboard(ElementTag, elementID) {
    //Creating the hidden input
    const Hiddeninput = document.createElement('input')
    Hiddeninput.setAttribute('value', document.getElementById(`${elementID}`).innerText);
    console.log(Hiddeninput.value)
    document.body.appendChild(Hiddeninput);
    //Copying the content
    Hiddeninput.select();
    document.execCommand('copy')
    document.body.removeChild(Hiddeninput);
    //Adding animation
    ElementTag.classList.add("seleccionado");
    setTimeout(function(){
        ElementTag.classList.remove("seleccionado");
    }, 500);
}
