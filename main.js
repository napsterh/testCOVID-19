var posicion = -1;
var contact = -1;
var symptoms = -1;


function retornarModal1(){
    $("#myModal2").modal('hide');
    $("#myModal1").modal();
}

function retornarModal2(){
    $("#myModal3").modal('hide');
    $("#myModal2").modal();
}

var x = document.getElementById("myAudio");
function playAudio() {
x.play();
}



/* ***********************************************/

function displayRadioValue1yes() {
    posicion = 1;
    $("#myModal1").modal('hide');
    $("#myModal2").modal();
}
;function displayRadioValue1no() {
    posicion = 0;
    $("#myModal1").modal('hide');
    $("#myModal2").modal();
}
;function displayRadioValue2yes() {
    contact = 1;
    $("#myModal2").modal('hide');
    $("#myModal3").modal();
}
;function displayRadioValue2no() {
    contact = 0;
    $("#myModal2").modal('hide');
    $("#myModal3").modal();
}
;function displayRadioValue3yes() {
    symptoms = 1;
    $("#myModal3").modal('hide');
    nextresponse();
}
;function displayRadioValue3no() {
    symptoms = 0;
    $("#myModal3").modal('hide');
    nextresponse();
}
;function nextresponse() {
    if ((posicion == 0) && (contact == 0)) {
        if (symptoms == 0) {
            $("#myModalA").modal();
        } else {
            $("#myModalD").modal();
        }
    }
    if ((posicion > 0) || (contact > 0)) {
        if (symptoms == 0) {
            if (contact == 0) {
                $("#myModalB").modal();
            } else {
                $("#myModalB2").modal();
            }
        } else {
            $("#myModalC").modal();
        }
    }
}
function displaymessage() {
    if ((posicion == 0) && (contact == 0)) {}
    if ((posicion > 0) || (contact > 0)) {
        if (symptoms == 0) {} else {}
    }
}