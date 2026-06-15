import { useState } from "react";
import Box from "./Box";


function Probs02() {


    //배열의 값 변경 -> 변경된 값 유지 -> 화면제 재렌더링

    let [textArr, setTextArr] = useState(["아침", "점심", "저녁"]);
    let [detailArr, setDetailArr] = useState(["졸리다", "배부르다", "피곤하다"]);

    return (

        <div>

            <button onClick={() => {

                //데이터 기반으로 화면에 표시
                //데이터 조작

                //야식 정보 -> 배열에 추가

                let temp = [...textArr];

                temp.push('야식');
                setTextArr(temp);

                //let temp2 = ...detail

                detailArr.push('행복하다');
                setDetailArr(detailArr);

                //재렌더링 발생 조건 -> state 변수값이 set함수를 통해서 변경


            }}>야식추가버튼</button>

            {
                textArr.map((item, index) => {
                    return (
                        // <Box text={arr[index]} detail={detail[index]}/>
                        <Box text={item} detail={detailArr[index]} key={index} />
                    )
                })
            }

        </div>

    )
}

export default Probs02;