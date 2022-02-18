const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("OK");
        reject(new Error("err....."));
    }, 1000);
});

console.log("시작");
pr.then((result) => {
    console.log(result);
})
 .catch((err) => {
    console.log(err);
 })
 .finally(() => {
    console.log("끝");
});

const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    },1000);
};

const f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    },3000);
};

const f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    },2000);
};

console.log('시작');
f1(function () {
 f2(function () {
  f3(function () {
     console.log("끝");
    });
   });
});

const f4 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("4번 주문 완료");
        }, 1000);
    });
}

const f5 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("xxx");
        }, 3000);
    });
}

const f6 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("6번 주문 완료");
        }, 2000);
    });
}

console.time('시작');
f4()
 .then((res) => f5(res))
 .then((res) => f6(res))
 .then((res)=> console.log(res))
 .catch(console.log)
 .finally(() => {
    console.timeEnd("시작");
 });

 // Promise.all
 console.time("x");
 Promise.all([f4(), f5(), f6()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
 });