

var size = document.querySelectorAll(".drum").length;

for (var i = 0; i < size; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonclick = this.innerHTML;

        solve(buttonclick);

        animate(buttonclick);
    });
}

document.addEventListener("keydown", function (event) {
    solve(event.key);

    animate(event.key);
});



function animate(button) {
    var click = document.querySelector("." + button);

    click.classList.add("pressed");

    setTimeout(function () {
        click.classList.remove("pressed");
    }, 100);
}





function solve(clicked) {

    switch (clicked) {
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        default:
            console.log(clicked);
    }

}