const ball = document.getElementsByClassName("ball-container");

window.onload = function () {
    document.addEventListener('keydown',moveBall);  
}


function moveBall(event) {
    let key = event.key;
    
    if (key==="n") {
        let position1 = 'translate(0,0)';
        let position2 = 'translate(500%,500%)';
        ball[0].animate([
            // key frames
            { transform: position1 },
            { transform: position2 }
            ], {
        // sync options
            duration: 1500,
            fill: "forwards"
        });
    }
    

}


