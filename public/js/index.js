var qrcode;

function init() {
    var qrval = getQrVal();
    if (qrval !== null && qrval !== "undefined" && qrval !== "") {
        createCode(qrval);
        document.getElementById("changebtn").style.display = "block";
        document.getElementById("qrvaldiv").style.visibility = "hidden";
        document.getElementById("generate").style.visibility = "hidden";
    } else {
        document.getElementById("changebtn").style.display = "none";
    }
    document.getElementById("cancelbtn").style.display = "none";
}

function changeMode() {
    if (document.getElementById("changebtn").style.display == "block") {
        document.getElementById("changebtn").style.display = "none";
        document.getElementById("cancelbtn").style.display = "block";
        document.getElementById("qrvaldiv").style.visibility = "visible";
        document.getElementById("generate").style.visibility = "visible";
    } else {
        document.getElementById("qrvaldiv").style.visibility = "hidden";
        document.getElementById("generate").style.visibility = "hidden";
        document.getElementById("changebtn").style.display = "block";
        document.getElementById("cancelbtn").style.display = "none";
    }
}

function getQrVal() {
    var qrval;

    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        qrval = localStorage.getItem("qrval");
        if (qrval !== null && qrval !== "undefined" && qrval !== "") {

        } else {
            qrval = document.getElementById("qrval").value;
        }
    } else {
        // Sorry! No Web Storage support..
        qrval = document.getElementById("qrval").value;
    }

    return qrval;
}



function generate() {
    var qrval = document.getElementById("qrval").value;
    if (qrval !== null && qrval !== "undefined" && qrval !== "") {
        createCode(qrval);
        changeMode();
    } else {
        document.getElementById("qrcode").innerHTML = "";
        document.getElementById("qrcodevalue").innerHTML = "";
        this.qrcode = null;
    }
}

function createCode(qrval) {
    if (this.qrcode) {
        this.qrcode.makeCode(qrval);
    } else {
        this.qrcode = new QRCode(document.getElementById("qrcode"), {
            text: qrval,
            width: 300,
            height: 300
        });
    }
    saveQrVal(qrval);
    document.getElementById("qrcodevalue").innerHTML = qrval;
}

function saveQrVal(qrval) {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("qrval", qrval);
    }
}