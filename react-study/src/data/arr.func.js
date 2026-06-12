

//반복 for for in for of forEach

let arr = [10, 20, 30, 40];

//js함수

// js함수

//1)map 배열 안의 요소들을 하나씩 접근해 return

arr.map(() => {        //요소 수만큼 단순 반복
    console.log('arr map');
});

arr.forEach((v) => { //매개변수에 arr 요소 한개씩 대입
    console.log("forEach : " + v)
});

arr.map((item) => { //매개변수 1개 선언된 콜백함수 -> item = value
    console.log("arr map : " + item);
});

arr.map((item, index) => { //매개변수 2개 선언 , item=value    index=index
    console.log("arr map item : " + item + "arr map index : " + index);
});

let result1 = arr.map(() => {  //arr.length가 4개, return이 4번 반복 (99를 4번 리턴)
    return 99;
});

console.log(result1);

let result2 = arr.map((item) => {
    console.log(item);  //출력만
});

console.log(result2); // -> return을 안해서 undefined

let result3 = arr.map((item) => {
    return item + 100;  //본래 arr의 value + 100을 return
});

console.log(result3);

let result4 = arr.map((item) => {
    return '원래 가지고 있던 값 : ' + item;
});

console.log(result4); //map의 리턴은 배열로 처리돼서 '원래 가지고 있던 값 : ' + item;이 배열로 들어감



let menuArr = ['라면', '우동', '김밥'];

let result5 = menuArr.map((menu) => {
    return "<p>" + menu + "</p>";   //String 값으로 html 태그 포함해서 리턴
});

console.log(result5);

//화살표 함수에 중괄호 안하고 바로 값 적으면 return이랑 같음
let result6 = menuArr.map((menu) => "<p>" + menu + "</p>");

console.log(result6);




//filter  거르기

arr = [10, 20, 30, 40];

let result7 = arr.filter((value) => {  //전체 리턴
    return true;
});

console.log(result7);

let result8 = arr.filter((value) => {  //15 미만 거르기
    return value > 15;
});
console.log(result8);

let result9 = arr.filter((value) => {  //30 거르기
    return value != 30;
});

console.log(result9);


//find  
let result10 = arr.find((value) => {
    return value == 20;         //값 20만 남기기(한번 찾으면 함수코드 종료),      없는값 = undefined
});

console.log(result10);



//findindex
let result11 = arr.findIndex((value) => {
    return value == 20;          //값이 20인 인덱스 찾기,  없는값이면 -1 리턴
})

console.log(result11);




//return, 구조분해할당(destructuring assignment)

//변수명 부분에 배열처럼 []안에 변수 이름들을 넣고 배열 값을 넣으면 1대1로 저장됨

let arr2 = [10, 20, 30];
console.log(arr2);
console.log(arr2[1]);

let [n1, n2, n3] = [77, 88, 99];
console.log(n1);
console.log(n2);
console.log(n3);

function func1() {
    console.log('func1()');
}

let [c, f] = [50, func1];

console.log(c);
f();


let [count, setCount] = useState(0);  //useState 함수로 값이 2개인 배열 리턴돼서 각각 저장됨

function useState(n) {
    let v = n;

    function setV(input) {
        v = input;
    }

    return [v, setV];
}

console.log(count);
setCount(10);
console.log(count);

let obj = {
    num1: 30,
    num2: 50
};

console.log(obj.num1);
console.log(obj.num2);

let obj2 = obj; //객체 복사

console.log(obj2.num1);
console.log(obj2.num2);



//구조분해할당, 변수명이 객체 내의 이름과 같아야 할당됨 (순서 바뀌어도 같은 이름으로 할당)

let { num1, num2 } = obj;

console.log(num1);
console.log(num2);