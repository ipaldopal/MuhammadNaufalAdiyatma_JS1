// IF

let stokBuku = 10;
let jumlahPeminjaman = 5;

if (jumlahPeminjaman <= stokBuku) {
    console.log("\nBuku dapat dipinjam, Terimakasih\n");
}

// IF ELSE

let umurPeminjam = 15;

if (umurPeminjam >= 18) {
    console.log("Kamu dapat meminjam buku ini.");
} else {
    console.log("Maaf, Kamu belum cukup umur untuk meminjam buku ini\n");
}

// NESTED IF

let umurPeminjam1 = 20;
let izinOrangTua = true;

if (umurPeminjam1 >= 18) {
    if (izinOrangTua) {
        console.log("Kamu dapat meminjam buku ini dengan izin ortumu.\n");
    } else {
        console.log("Maaf, kamu harus izin ortumu dulu buat meminjam buku ini.\n");
    }
} else {
    console.log("Maaf, Kamu belum cukup umur untuk meminjam buku ini\n");
}

// SWITCH CASE

let statusPeminjaman = "dipinjam";

switch (statusPeminjaman) {
    case "tersedia":
        console.log("Buku tersedia. Kamu dapat meminjam buku ini.\n");
        break;
    case "dipinjam":
        console.log("Maaf, buku ini masih dipinjam oleh orang lain. Silakan meminjam dilain hari.\n");
        break;
    case "terlambat":
        console.log("Kamu terlambat mengembalikan buku.\n");
        break;
    default:
        console.log("Status peminjaman tidak jelas.\n");
}

// FOR STATEMENT

let jumlahPeminjaman1 = 5;

for (let i = 1; i <= jumlahPeminjaman1; i++) {
    console.log(`Peminjaman ke-${i}: Buku berhasil dipinjam.`);
}

console.log("Semua buku telah dipinjam.\n");

// WHILE

let stokBuku2 = 5;
let jumlahPeminjaman2 = 0;

while (jumlahPeminjaman2 < stokBuku2) {
    console.log(`Peminjaman ke-${jumlahPeminjaman2 + 1}: Buku berhasil dipinjam.`);
    jumlahPeminjaman2++;
}

console.log("Semua buku telah dipinjam.\n");

// DO-WHILE

let stokBuku3 = 5;
let jumlahPeminjaman3 = 0;

do {
    console.log(`Peminjaman ke-${jumlahPeminjaman3 + 1}: Buku berhasil dipinjam.`);
    jumlahPeminjaman3++;
} while (jumlahPeminjaman3 < stokBuku3);

console.log("Semua buku telah dipinjam.\n");

// FUNCTION

function pinjamBuku(jumlahPeminjaman6) {
    let stokBuku4 = 10;

    if (jumlahPeminjaman6 <= stokBuku4) {
        return `Berhasil meminjam ${jumlahPeminjaman6} buku. Terimakasih!\n`;
    } else {
        return "Maaf, stok buku tidak mencukupi untuk peminjaman ini.\n";
    }
}

let jumlahPeminjaman4 = 5;
let jumlahPeminjaman5 = 12;

console.log(pinjamBuku(jumlahPeminjaman4));
console.log(pinjamBuku(jumlahPeminjaman5)); 
