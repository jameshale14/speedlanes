var qrcode;

// Initialisation code - used to define visibility of screen elements
function init() {
    var qrval = getQrVal();
    if (qrval !== null && qrval !== "undefined" && qrval !== "") {
        // the value of the QR code has been retrieved, so generate the QR code and set the screen to display mode
        createCode(qrval);
        document.getElementById("changebtn").style.display = "block";
        document.getElementById("qrvaldiv").style.visibility = "hidden";
        document.getElementById("generate").style.visibility = "hidden";
    } else {
        // this is an initial install (we can't find a stored QR code value), so hide the change button
        document.getElementById("changebtn").style.display = "none";
    }
    document.getElementById("cancelbtn").style.display = "none";
}

// Changes the state of the app to either be in edit mode or display mode
function changeMode() {
    if (document.getElementById("changebtn").style.display == "block") {
        // the app is in display mode, set it to edit mode
        document.getElementById("changebtn").style.display = "none";
        document.getElementById("cancelbtn").style.display = "block";
        document.getElementById("qrvaldiv").style.visibility = "visible";
        document.getElementById("generate").style.visibility = "visible";
    } else {
        // the app is in edit mode, change it to display mode
        document.getElementById("qrvaldiv").style.visibility = "hidden";
        document.getElementById("generate").style.visibility = "hidden";
        document.getElementById("changebtn").style.display = "block";
        document.getElementById("cancelbtn").style.display = "none";
    }
}

// Get the value of the QR code from localStorage (if supported)
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

// Generate a QR code, or clear if the QR code is empty
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

// Create a QR code from a given value 
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

// Save the value of the QR code to localStorage
function saveQrVal(qrval) {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("qrval", qrval);
    }
}