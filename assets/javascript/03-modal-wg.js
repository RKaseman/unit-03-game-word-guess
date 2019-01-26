
$(document).ready(function () {

    var modalState = document.getElementById("modal-box");

    document.getElementById("modal-trig").onclick = function() {
        modalState.style.visibility = "visible";
    };
    
    document.getElementById("modal-close").onclick = function() {
        modalState.style.visibility = "hidden";
    };

});

