function Cld() {
    document.getElementById("display").value = "";
}

function del() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function apn(val){
    document.getElementById("display").value += val;
    
}

function evals() {
    let dis = document.getElementById("display");
    try {
        dis.value = eval(dis.value);
    } catch {
        dis.value = "ERROR!";
    }
}