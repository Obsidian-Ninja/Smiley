document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(event) {
    var eye = document.querySelectorAll(".eye");
    eye.forEach(function(eye) {
        // x and y are the center coordinates of the eye
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        // Calculate the angle between the eye center and mouse pointer
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;

        // Rotate the eye toward the pointer
        eye.style.transform = "rotate(" + rot + "deg)";
    });
}
