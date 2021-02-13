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
    $(".devour").on("click", function(event){
        $.ajax("/api/burgers/"+this.id, {
            type: "PUT"
        }).then(function(response){
            location.reload();
        })
    })
    $(".digest").on("click", function(event){
        $.ajax("/api/burgers/"+this.id, {
            type: "DELETE"
        }).then(function(response){
            location.reload();
        })
    })
});