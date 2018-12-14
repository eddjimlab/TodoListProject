// check off specific Todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
// click on X to delete Todos
$("ul").on("click", "span", function (evt) {
    // Remove parent object!!!
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    // stop Bubling
    evt.stopPropagation();
});
$("input[type='text']").keypress(function (evt) {
    if (evt.which === 13) {
        // grabbing new Todo text from input
        var todoText = $(this).val();
        // clear input
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class= 'fas fa-trash-alt' ></i></span> " + todoText + "</li>");
    }
});
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});