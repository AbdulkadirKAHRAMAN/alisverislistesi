let lists=[];
let listNumber=  prompt("Kaç adet ürün girmek istiyorsunuz");
for (let index = 0; index < listNumber; index++) {
    let list = prompt("ürünü girin:");
    lists.push(list);
}
console.log("Alışveriş Listeniz:");
for (let list2 of lists) {
  console.log(list2);
}