const express = require("express");
const app = express();

// Endpoint untuk mendapatkan gambar acak
app.get("/getrandomimage", async (req, res, next) => {
    try {
        // Mengimpor node-fetch secara dinamis
        const { default: fetch } = await import("node-fetch");
        // Mengambil data gambar acak dari Lorem Picsum API
        const response = await fetch("https://picsum.photos/200/300");
        // Mengambil URL gambar dari respons itu sendiri
        const imageUrl = response.url;
        // Mengirimkan respons HTML yang berisi tag img dengan URL gambar
        res.send(`<img src="${imageUrl}" alt="Random Image">`);
    } catch (error) {
        // Menangani kesalahan jika terjadi
        console.error("Error fetching random image:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Endpoint untuk mendapatkan nama acak
app.get("/randomData", (req, res, next) => {
    try {
        // Daftar nama acak
        const names = ["John", "Jane", "Bob", "Alice", "Michael", "Emily"];
        // Memilih nama acak dari daftar
        const randomName = names[Math.floor(Math.random() * names.length)];
        // Menghasilkan 2 digit terakhir NRP secara acak antara 10 dan 99
        const randomNrp = "522360008" + Math.floor(Math.random() * 90 + 10);
        // Mengirimkan nama dan NRP acak sebagai respons JSON
        res.json({ Name: randomName, Nrp: randomNrp });
    } catch (error) {
        // Menangani kesalahan jika terjadi
        console.error("Error generating random data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Mulai server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
