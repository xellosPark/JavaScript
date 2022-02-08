function Itme(title, price){
    // this = {};

    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격 ${price}원 입니다.`)
    }
    //return this;
}

const itme1  = new Itme('인형', 3000);
const itme2  = new Itme('가방', 4000);
const itme3  = new Itme('지갑', 9000);

console.log(itme1,itme2,itme3);

itme3.showPrice();
