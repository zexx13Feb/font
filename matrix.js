  // ****************************************************************
        // ************************** BACKGROUND ***************************
        // ****************************************************************
        var c = document.getElementById("bg");
        var ctx = c.getContext("2d");

        // membuat ukuran canvas sesuai dengan ukuran layar
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        // karakter untuk efek - diambil dari charset unicode
        var nameText = "INDONESIAN HECKER RULES";
        // mengubah string menjadi array karakter
        nameText = nameText.split("");

        var font_size = 10;
        var columns = c.width/font_size; // jumlah kolom untuk efek hujan
        // array untuk menampung posisi drop - satu per kolom
        var drops = [];
        // x di bawah adalah koordinat x
        // 1 = koordinat y dari drop (sama untuk setiap drop awalnya)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        // fungsi menggambar karakter
        function draw() {
            // Latar belakang hitam untuk canvas
            // Latar belakang tembus pandang untuk menunjukkan jejak
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);
            
            ctx.fillStyle = "#0F0"; // teks hijau
            ctx.font = font_size + "px arial";
            // looping di setiap drop
            for(var i = 0; i < drops.length; i++) {
                // karakter random untuk dicetak
                var text = nameText[Math.floor(Math.random()*nameText.length)];
                // x = i*font_size, y = nilai dari drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                
                // mengembalikan drop ke atas secara acak setelah melewati layar
                // menambah keacakan pada reset untuk membuat drop tersebar di sumbu Y
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;
                
                // menaikkan koordinat Y
                drops[i]++;
            }
        }

        // Mengatur interval untuk menggambar ulang efek setiap 33 ms
        setInterval(draw, 33);
