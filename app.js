const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < 13; i++) {
    var total = logo[i].getTotalLength();
console.log(total);
}
