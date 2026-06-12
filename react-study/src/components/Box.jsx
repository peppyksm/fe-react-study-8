

//<Box title={arr[0]} msg={detail[0]}/>
//props = {text:"아침", detail:"졸리다"};  객체상태

// function Box(props) {
//     //probs : 컴포턴느 내부에 필요로하는 매개변수 전달받기

//     return (

//         <div>
//             <div style={{ backgroundColor: "lightgreen" }}>
//                 <h1>{props.text}</h1>
//                 <p>{props.detail}</p>
//             </div>
//         </div>
//     )
// }










//props = {text:"아침", detail:"졸리다"};  객체상태
//{text, detail} = {text:"아침", detail:"졸리다"}

//분해해서 받기


function Box({ text, detail }) {
    //probs : 컴포턴느 내부에 필요로하는 매개변수 전달받기

    return (

        <div>
            <div style={{ backgroundColor: "lightgreen" }}>
                <h1>{text}</h1>
                <p>{detail}</p>
            </div>
        </div>
    )
}



export default Box;