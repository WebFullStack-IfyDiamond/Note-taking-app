$(document).ready(function(){

    $("#loginButton").click(function() {
        $("#loginModalBody").modal("show");
    });

    $("#loginModalHide").click(function() {
        $("#loginModalBody").modal('hide');
    });
    $("#signupButton").click(function() {
        $("#signupModalBody").modal("show");
    });
    $("#signupModalHide").click(function() {
        $("#signupModalBody").modal('hide');
    });
    
});