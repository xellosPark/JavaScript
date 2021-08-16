// Q1. make a string out of an array
// 배열를 문자열 변환 
// 배열.join  join(separator?: string): string;
{
    const fruits = ['apple', 'banana', 'orange'];
    //const result = fruits.join(); //apple,banana,orange
    //const result = fruits.join('|'); //apple|banana|orange
    //const result = fruits.join('^'); //apple^banana^orange
    //const result = fruits.join(', and '); //apple, and banana, and orange
    const result = fruits.join('');//applebananaorange

    console.log(result);

}

// Q2. make an array out of a string
// 문자열을 배열로 만들기
//문자열.split() split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
//문자열.split() // 인자 1, 구분자 , 제한
{
    const fruits = '🌶,🍖,🍟,🥩';
    //const result = fruits.split(',', 2); //(2) ["🌶", "🍖"]
    //const result = fruits.split(); //["🌶,🍖,🍟,🥩"]  length:1 구분자 꼭 사용해야한다 
    const result = fruits.split(','); //(4) ["🌶", "🍖", "🍟", "🥩"]
    console.log(result);
}

// Q3. make this array look like this: [5,4,3,2,1]
// 배열 뒤지기 [5,4,3,2,1] -> [1,2,3,4,5]
// 배열.reverse()  reverse(): T[];
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result); // (5) [5, 4, 3, 2, 1]
    console.log(array); // (5) [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
//  배열값에서 중간 자르기 
// 배열.splice  splice(start: number, deleteCount?: number): T[];
// 배열.slice(start?: number, end?: number): T[];
{
    const array = [1,2,3,4,5];
    // const result = array.splice(0,2); 
    // console.log(result); //(2) [1, 2]
    // console.log(array);  //(3) [3, 4, 5]
    //const result = array.slice(0,2); //(2) [1, 2]

    const result = array.slice(2, 5); //(2) [1, 2]
    console.log(result);  //(3) [3, 4, 5]
    console.log(array);  //(5) [1, 2, 3, 4, 5]
}

class Student {
    constructor(name,age,enrolled,score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// 90이상 값 찾기
//class.find //find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
console.clear();
{
 //const result = student.find(function const result = student.find({
//       console.log(student, index);
//       return student.score === 90;
//    });
    const result = student.find((student)=> student.score === 90);
    
    console.log(result);//Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. Make an array of enrolled students
// class에 enrolled 등록 분류 (TURE,FLASE)
// calss.enrolled filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
{
    const result = student.filter((student)=> student.enrolled);
    console.log(result);

    //(3) [Student, Student, Student]
    //0: Student {name: "A", age: 29, enrolled: true, score: 45}
    //1: Student {name: "C", age: 30, enrolled: true, score: 90}
    //2: Student {name: "E", age: 18, enrolled: true, score: 88}
    //length: 3

}

// Q7. Make an array constaining only the studens' scores
// result should be: [45, 80, 90, 66, 88]
// 학생들 scores 값만 가져오기
// students.map  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
{
    //const result = student.map((student) => student.score); //(5) [45, 80, 90, 66, 88]
    const result = student.map((student) => student.name);   //(5) ["A", "B", "C", "D", "E"]
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 50점 이하 학생을 찾자라
// class.some  some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
// class.every  every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
// boolean  반환
{
    console.clear();
    //some 하나라도 조건이 있으면 ture
    const result = student.some((student) => student.score < 50);
    console.log(result); //true
    //evert 전체값 조건
    const result2 = student.every((student) => student.score < 50);
    console.log(result2); //false
}
console.clear();
// Q9. Compute students' average score
// 평균값 구하기
// class.reduce reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
{
    const result = student.reduce((prev, curr) => {
        console.log('--------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0); // 0 값은 시작할때 0값으로 설정
    console.log(result / student.length);
}

// Q10. Make a string containing all the scores
// 전체 점수 값만 출력
// result should be: '45, 80, 90, 66, 88'
{
    const result = student
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

// Q Bonus! do sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// 정력
{
    const result = student
        .map((student) => student.score)
        //.sort((a, b) => a - b) //45,66,80,88,90
        .sort((a, b) => b - a) //90,88,80,66,45
        .join();
    console.log(result);

}