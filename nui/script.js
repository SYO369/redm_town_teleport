let destination = "valentine";

function initSlider() {
    const slider = document.querySelector(".slider");
    const items = document.querySelectorAll(".slider .item img");
    const confirmBtn = document.getElementById("confirmBtn");
    
    let currentIndex = 0;
    const totalItems = items.length;
    const angleStep = 360 / totalItems;
    
    function updateSlider(index) {
        const rotation = index * -angleStep;
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `perspective(1000px) translateZ(-2300px) rotateX(-5deg) rotateY(${rotation}deg)`;
    }
    
    items.forEach((img, index) => {
        img.addEventListener("click", function () {
            if (currentIndex !== index) {
                currentIndex = index;
                updateSlider(currentIndex);
            }
            //console.log(`Selected Image: ${img.src.split('/').pop().split(".")[0]}`);
            destination = `${img.src.split('/').pop().split(".")[0]}`;
        });
    });
    
    // Initialize without animation
    updateSlider(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    initSlider();
    confirmBtn.addEventListener("click", function () {
        axios.post(`https://${GetParentResourceName()}/teleport`, {
            town: destination,
        });
        setTimeout(() => {
            document.getElementById('banner').style.display = 'none';
        }, 1);
    });
});


window.addEventListener('message', (event) => {
    const data = event.data;
    if (data.type === 'open') {
        document.getElementById('banner').style.display = 'inline';
    }
});