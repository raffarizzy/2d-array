console.log("script loaded");

let pilihanMenu = 0;
let activeMenu = 0;
let goBtn = document.getElementById("goBtn");
let menu = document.getElementById("menu");
let input = document.getElementById("input");

const array2D = [
    ["Raffa", 100, 100 ,100],
    ["Andini", 100, 100, 100]
]

goBtn.addEventListener("click", function() {
    switch(Number(input.value)) {
        case 1 :
        activeMenu = 1;    
        let text = "";
            for (let i = 0; i < array2D.length; i++) {
                text += array2D[i][0] + "\n";
            }
            menu.innerHTML = "--- LIHAT SEMUA SISWA ---\n" + text + "0. Kembali";
            break;
        case 0 :
            if (activeMenu >= 1) {
                menu.textContent = 
                "--- MENU ---" +
                "\n1. Lihat Semua Siswa" +
                "\n2. Lihat Semua Nilai Bahasa Indonesia" +
                "\n3. Lihat Semua Nilai Matematika" +
                "\n4. Lihat Semua Nilai IPA" +
                "\n5. Lihat Semua Nilai Siswa" +
                "\n6. Cari Nilai Siswa"
                activeMenu = 0;
                break;
            } 
        default :
            alert("Angka menu tidak valid");
    }
})