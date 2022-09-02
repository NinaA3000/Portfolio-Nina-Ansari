const myImage = new Image();



/* _________Laden des Bildes verbessern___________ */

myImage.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.heiht = 706;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 5000;

    /* Wie fallen die Partikel übers Bild */
    class Particle {
        constroctor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 3.5;
            this.size = Math.random() * 1.5 + 1;
        }

        update() {
            this.y += this.velocity;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    /* _________Wie oft soll die Animation stattfinden___________ */

    function init() {
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate(){
        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
      
    }
    animate();



});

