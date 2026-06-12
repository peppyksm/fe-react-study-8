import { useState } from "react";


function State03() {

    //let arr = [1, 2, 3, 4, 5]; // 일반배열변수

    let [arr, setArr] = useState([1, 2, 3, 4, 5]);


    //let count = 10;   count = 20;

    //참조변수 (주소)
    //{key:value, key:value}
    //[ㅇ,ㅇ,ㅇ]
    //{key:value, key:value, key:[]}
    //[{},{},[}]]

    return (
        <div>
            <button onClick={() => {
                // 배열에 값 추가 : push, unshoft. splice(i,i,i)
                // [1,2,3,4,5]
                // arr.push(7); //[1,2,3,4,5]
                // setArr(arr); //화면 재렌더링 발생x
                // console.log(arr);

                // setArr([1, 2, 3, 4, 5, 7]);


                // 깊은복사 -> 새로운 주소에 데이터 생성
                let temp = [...arr];
                temp.push(7);   //[1,2,3,4,5,7]
                setArr(temp);   //state 변수 arr에 들어있는 값(배열의 주소)에 저장


            }}>배열변경버튼</button>

            {
                arr.map((val) => {
                    return <p>{val}</p>
                })
            }
        </div>
    )
}

export default State03;