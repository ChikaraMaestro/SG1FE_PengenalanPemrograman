const siswa = {
    nama: "Budi",
    umur: 17,
    lulus:true
}

//TERNARY OPERATOR
const lulus = siswa.lulus ? "Lulus" : "Tidak Lulus"

console.log(`Ada seorang siswa bernama ${siswa.nama}, umurnya ${siswa.umur}, ${lulus}`)
