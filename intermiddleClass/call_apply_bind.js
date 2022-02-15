const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName();
// call this 넘겨준다.
// call 메서드는 모든 함수에서 사용할 수 있으며. this를 특정값으로 지저할 수 있습니다.
showThisName.call(mike);
showThisName.call(tom);

function updata(birhYear, occupation) {
    this.birhYear = birhYear;
    this.occupation = occupation;
}

updata.call(mike, 1999, "singer");
console.log(mike);

updata.call(tom, 2002, "teacher");
console.log(tom);

// apply 매개변수를 배열로 준다
// apply는 함수 매게변수를 처리하는 방법을 제외하면 call과 완전히 같습니다.
// call은 일반적인 함수의 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 베일로 받습니다.
updata.apply(mike, [1999, "singer"]);
console.log(mike);

updata.apply(tom, [2002, "teacher"]);
console.log(tom);

const nums = [3, 10, 1, 6, 4];
const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);

console.log(minNum);
console.log(maxNum);

const minNumapply = Math.min.apply(null, nums);
const maxNumapply = Math.max.call(null, ...nums);

console.log(minNumapply);
console.log(maxNumapply);
// bind 함수의 this 값을 영구히 바꿀 수 있습니다.
const updataMike =  updata.bind(mike);
updataMike(1980, "police");
console.log(mike);

const user = {
    name: "Mike",
    showName: function () {
        console.log(`hello,${this.name}`);
    },
};
// call
user.showName();
let fn = user.showName;
fn.call(user);
//bind
let bounFn = fn.bind(user);
bounFn();