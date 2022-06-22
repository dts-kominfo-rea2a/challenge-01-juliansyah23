// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = {
    name : "Rival Adrian Juliansyah",
    gender : "Laki-Laki",
    age : 24,
    email : "rival@juliansyah.my.id",
    favoriteColor : ["Hitam", "Putih", "Abu-Abu", "Biru"],
    isHavePet : true,
    education : [
            {name : "SD", city : "Bandung", graduation : 2009},
            {name : "SMP", city : "Bandung", graduation : 2012},
            {name : "SMA", city : "Bandung", graduation : 2015},
        ],
    favoriteRestaurant : {bakso : "Semar", minuman : "Mixue", kebab : "Kebab Bosman"},
};
const secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : ["Blue", "Black", "Gray"],
    isHavePet : false,
    education : [
        {name : "SD 02", city : "Jakarta", graduation : 2010},
        {name : "SMP 03", city : "Bogor", graduation : 2013},
        {name : "SMA 01", city : "Surabaya", graduation : 2016},
        {name : "Universitas Maju", city : "Tangerang"},
    ],
    favoriteRestaurant : {tempura : "Yusukekun", katsu : "Rabenshi", geprek : "KFC"},
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser,secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};