const shaun = document.querySelector(".shaun");
const cogu = document.querySelector(".cogu");
const score = document.querySelector(".score");
let aJump = false;
let count = 0;



document.addEventListener("keydown", (e)=> {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
        jump();
    }
 }); 

function jump() {
    if(!shaun.classList.contains("jump")) {
        shaun.classList.add("jump");
        aJump = true;

        setTimeout(() => {
            shaun.classList.remove("jump");
            aJump = false;
        }, 1300);
    }
}

setInterval(() => {
    let shaunBottom = parseInt(
        window.getComputedStyle(shaun).getPropertyValue("bottom")
    );
    let coguLeft = parseInt(
        window.getComputedStyle(cogu).getPropertyValue("left")
    );

    if(coguLeft > 40 && coguLeft < 260 && shaunBottom <= 50 && !aJump) {
        alert(`Game Over! Seu score foi: ${count}`);
        count = 0;
    }

    count++;
    score.innerHTML = `SCORE: ${count}`;
}, 100);
