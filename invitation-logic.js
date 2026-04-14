// invitation-logic.js

document.addEventListener("DOMContentLoaded", () => {
    const orbit = document.getElementById('bowls-orbit');
    const petalContainer = document.getElementById('petal-container');

    // 1. GENERATE 84 BOWLS (Chaurasi Byanjan)
    const totalBowls = 84;
    const radius = 135; // Position the bowls outside the photo frame

    for (let i = 0; i < totalBowls; i++) {
        const bowl = document.createElement('div');
        bowl.className = 'mini-bowl';
        
        // Circular distribution math
        const angle = (i / totalBowls) * 360;
        const x = 112 + radius * Math.cos(angle * Math.PI / 180) - 5;
        const y = 112 + radius * Math.sin(angle * Math.PI / 180) - 3;
        
        bowl.style.left = `${x}px`;
        bowl.style.top = `${y}px`;
        
        // Random slight delays so they don't look perfectly static
        if (i % 5 === 0) bowl.style.filter = "brightness(1.2)";

        orbit.appendChild(bowl);
    }

    // 2. GENERATE FALLING MARIGOLD PETALS
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const size = Math.random() * 10 + 8;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 4 + 's';
        
        // Variations in petal color (Orange to Gold)
        const colors = ['#FFD700', '#FFA500', '#FF8C00'];
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        petalContainer.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 7000);
    }

    // Start petal snowfall
    setInterval(createPetal, 200);
});
