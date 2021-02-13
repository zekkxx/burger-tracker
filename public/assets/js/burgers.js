$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        let newBurger = {
            name: $("#burger").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(response){
            location.reload();
        })
    })
});