// خلفية الجسيمات المتحركة الهادئة
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const numberOfParticles = 30;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.35)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
initParticles();

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// عداد الدعوات
const blessBtn = document.getElementById('blessBtn');
const counterValue = document.getElementById('counterValue');
let count = 1425;

blessBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count.toLocaleString();
    blessBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم إرسال دعوتك بسلام ❤️';
    blessBtn.style.background = '#10b981';
    setTimeout(() => {
        blessBtn.innerHTML = '<i class="fa-solid fa-plus"></i> أرسل دعوة جديدة بالشفاء';
        blessBtn.style.background = '';
    }, 2000);
});

// النافذة المنبثقة للرسالة
const surpriseModal = document.getElementById('surpriseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOkBtn = document.getElementById('modalOkBtn');

function openModal() {
    surpriseModal.classList.add('active');
}

closeModalBtn.addEventListener('click', () => {
    surpriseModal.classList.remove('active');
});

modalOkBtn.addEventListener('click', () => {
    surpriseModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === surpriseModal) {
        surpriseModal.classList.remove('active');
    }
});