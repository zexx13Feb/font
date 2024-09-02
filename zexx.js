const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Mengatur ukuran canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const yPositions = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '15pt monospace';

    yPositions.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);

        if (y < canvas.height / 2) {
            ctx.fillStyle = '#FF0000'; // Merah untuk bagian atas
        } else {
            ctx.fillStyle = '#FFFFFF'; // Putih untuk bagian bawah
        }

        const x = index * 20;
        ctx.fillText(text, x, y);

        if (y > canvas.height * 0.5 + Math.random() * 1e4) {
            yPositions[index] = 0;
        } else {
            yPositions[index] = y + 20;
        }
    });
}

setInterval(drawMatrix, 50);

// Menyesuaikan ukuran canvas saat ukuran jendela berubah
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    yPositions.fill(0);
});
      
