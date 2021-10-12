document.getElementById("b1").addEventListener("click", onclick);
document.addEventListener("keydown", onkeydown)

function onkeydown(e){
    if(e.key === "Enter");
}

function onclick(){
    var i1 = Number(document.getElementById("i1").value);
    var i2 = Number(document.getElementById("i2").value);
    var i3 = Number(document.getElementById("i3").value);
    // Compare
    var max = i1;
    if(i2 > max)
        max = i2;
    if (i3 > max)
        max = i3;
    // Show
    document.getElementById("p1").innerHTML = max;
}