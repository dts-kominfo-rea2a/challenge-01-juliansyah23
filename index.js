// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : ["Yellow", "Pink", "White", "Purple"],
    isHavePet : true,
    education : [
            {name : "SD 01", city : "Jakarta", graduation : 2009},
            {name : "SMP 02", city : "Jakarta", graduation : 2012},
            {name : "SMA 03", city : "Tangerang", graduation : 2015},
        ],
    favoriteRestaurant : {geprek : "Bensu", katsu : "Rabenshi", tempura : "Yusukekun"},
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