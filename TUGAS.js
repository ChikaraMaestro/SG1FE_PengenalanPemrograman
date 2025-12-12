const input= require('prompt-sync')({sigint: true})
const nama = input("Siapa Namamu: ")
const umur = Number(input("Masukan umur: "))


if(umur>=21)
{
    
}
else
{
    console.log(`Maaf ${nama}, Kamu belum cukup umur`)
}