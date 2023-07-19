function hitungBMI(){
    event.preventDefault(); //Mencegah terjadinya event bawaan dari sebuah DOM
    let form = document.querySelector("#form");
    let hasil = document.querySelector("#hasil");
    let jk = document.querySelector('input[name="sex"]:checked').value;
    var us = document.getElementById('_us').value;
    var bb = document.getElementById('_bb').value;
    var tb = document.getElementById('_tb').value;

    // Validasi form
    if(jk==""|| us==""||us==0||isNaN(us)) {
        alert("Usia dan jenis kelamin wajib diisi dengan benar");
    }else if(bb==""||bb==0||isNaN(bb)){
        alert("Berat badan wajib diisi dengan benar");
    }else if(tb==""||tb==0||isNaN(tb)){
        alert("Tinggi badan wajib diisi dengan benar");
    }else{
        // Konversi cm to m
        meter = tb/100;
        // Hitung kuadrat
        kuadrat = meter*meter;
        // Hitung BMI
        bmi = bb/kuadrat;

        // Status berat badan
        if(bmi < 18.5){
            stat_bb = "Kekurangan berat badan";
            ket = "Anda kekurangan berat badan";
            range = "Hasil BMI kurang dari 18.5";
            psn = "Anda berada dalam kategori kurus atau berat badan kurang. Cara terbaik untuk menaikkan berat badan adalah dengan memperhatikan pola makan dan vitamin";
            saran = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal";
            penyakit = "Mudah lelah, gampang sakit karena imun lemah, dan tulang rentan cedera";
        }else if(bmi >= 18.5 && bmi < 24.9 ){
            stat_bb = "Normal (Ideal)";
            ket = "Anda memiliki berat badan normal";
            range = "Hasil BMI antara 19 dan 25";
            psn = "Anda berada dalam kategori normal atau berat badan ideal. Pertahankan pola makan anda saat ini dan berolahraga.";
            saran = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan berat badan saat ini";
            penyakit = "";
        }else if(bmi >= 25.0 && bmi < 29.9 ){
            stat_bb = "Kelebihan berat badan";
            ket = "Anda memiliki berat badan berlebih";
            range = "Hasil BMI antara 25 dan 30";
            psn = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kadar makanan yang dikonsumsi dan berolahraga.";
            saran = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal";
            penyakit = "Penyakit jantung, tekanan darah tinggi, diabetes, dan masalah pernapasan";
        }else{
            stat_bb = "Kegemukan (Obesitas)";
            ket = "Anda mengalami Obesitas";
            range = "Hasil BMI lebih dari 30";
            psn = "Anda berada dalam kategori terlalu gemuk atau obesitas, Anda perlu berkonsultasi ke Dokter";
            saran = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal";
            penyakit = "Penyakit jantung, tekanan darah tinggi, diabetes tipe 2, masalah pernapasan, dan jenis kanker tertentu";
        }

        //tampilkan hasil perhitungan
        form.style.display = 'none';
        hasil.style.display = 'block';
        
        document.querySelector("#person").innerHTML="("+jk+" "+us+" thn)";
        document.querySelector("#bmi_status").innerHTML= stat_bb;
        document.querySelector("#bmi_score").innerHTML= (bmi).toFixed(1);
        document.querySelector("#bmi_ket").innerHTML= ket;
        document.querySelector("#range").innerHTML= range;
        document.querySelector("#pesan").innerHTML= psn;
        document.querySelector("#saran").innerHTML= saran;

        if(penyakit!==""){ //jika terdapat penyakit tampilkan penyakit
            document.querySelector('#hasil .wrapper').style["box-shadow"] = 'rgb(93 50 50 / 25%) 0px 30px 60px -12px inset, rgb(255 0 0 / 30%) 0px 18px 36px -18px inset';
            document.querySelector(".wrapper.penyakit").style.display = 'block';
            document.querySelector("#penyakit").innerHTML= penyakit;
        }else{
            document.querySelector('#hasil .wrapper').style["box-shadow"] = 'rgb(50 89 93 / 25%) 0px 30px 60px -12px inset, rgb(0 6 255 / 30%) 0px 18px 36px -18px inset';
            document.querySelector(".wrapper.penyakit").style.display = 'none';
        }
        
        // console.log(stat_bb);
        // console.log('BMI = '+(bmi).toFixed(1));
        // console.log(ket);
        // console.log(range);
        // console.log(psn);
        // console.log(saran);
    }
}

function closeBMI(){ //tutup hasil perhitungan
    form.style.display = 'block';
    hasil.style.display = 'none';
}
