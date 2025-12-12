// TUGAS 1 Front-end (Chikara Maestro Inozaki_102022500246)

const input= require('prompt-sync')({sigint: true})
const nama = input("Siapa Namamu: ")
const umur = Number(input("Masukan umur: "))


if(umur>=21)
{
    const uang = Number(input("Masukan Uang: "))
    if(uang>=500000)
    {
        console.log(`Selamat Datang ${nama}`);
    }
    else
    {
        console.log(`Maaf ${nama}, Uang kamu cuma ${uang}, Datang lagi lain kali`)
    }
}
else
{
    console.log(`Maaf ${nama}, Kamu belum cukup umur`)
}