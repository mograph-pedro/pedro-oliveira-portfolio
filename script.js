```javascript
const video = document.getElementById("showreel-video");
const soundToggle = document.getElementById("sound-toggle");

const soundOnIcon = soundToggle.querySelector(".sound-on");
const soundOffIcon = soundToggle.querySelector(".sound-off");

soundToggle.addEventListener("click", function () {

    video.muted = !video.muted;

    if (video.muted) {
        soundOnIcon.style.display = "none";
        soundOffIcon.style.display = "block";
        soundToggle.setAttribute("aria-label", "Turn sound on");
    } else {
        soundOnIcon.style.display = "block";
        soundOffIcon.style.display = "none";
        soundToggle.setAttribute("aria-label", "Turn sound off");
    }

});
```
