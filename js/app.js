$(document).ready(function() {

    var computerInput = Math.floor((Math.random() * 3) + 1);

    $(document).on("click", "#rock", function() {
        if (computerInput === 1) {
            alert("You tied!");
        }
        if (computerInput === 2) {
            alert("You lost!");
        }
        if (computerInput === 3) {
            $(this).addClass("success");
        }
    });

    $(document).on("click", "#paper", function() {
        if (computerInput === 1) {
            $(this).addClass("success");
        }
        if (computerInput === 2) {
            alert("You tied!");
        }
        if (computerInput === 3) {
            alert("You lost!");
        }
    });

    $(document).on("click", "#scissors", function() {
        if (computerInput === 1) {
            alert("You lost!");
        }
        if (computerInput === 2) {
            $(this).addClass("success");
        }
        if (computerInput === 3) {
            alert("You tied!");
        }
    });



});
