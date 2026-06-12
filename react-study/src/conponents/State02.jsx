


function State02() {

    let numArr = [1, 1, 1, 1]; //단순 반복 용도로 사용(4회 반복)


    //실제 화면에 그려지는 요소로 사용되는 데이터 배열
    let msgArr = ["안녕", "하이", "반가워", "Hi", "반갑꼬리", "반갑따라따따따", "반갑티비", "반갑냉장고"];

    let text = "";

    for (let i = 1; i <= 5; i++) {
        text += "<p>안녕하세요! test for문</p>"
    }

    //element 요소 모아둔 배열
    let eleArr = [];

    for (let i = 0; i <= 5; i++) {
        eleArr.push(<p>안녕하세요! test for</p>);
    }
    return (
        <div>
            {
                numArr.map(() => {
                    return (
                        <p>안녕하세요! numArr map()</p>
                    )
                })
            }

            <hr />
            {text}   {/*  배열로서 태그 없이 그대로 출력됨 */}

            <hr />
            {eleArr}  {/* 태그 처리돼서 출력됨 */}

            <hr />
            {
                msgArr.map((msg) => {
                    return(
                        <p>인사 : {msg}</p>
                    )
                })
            }

            <p>인사 : 인사1</p>
            <p>인사 : 인사2</p>
            <p>인사 : 인사3</p>
            <p>인사 : 인사4</p>


        </div>



    );


}

export default State02;