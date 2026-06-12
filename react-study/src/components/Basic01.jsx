
function Basic01() {

    //일반 js 코드 작성 영역
    let hello1 = "안녕하세요";
    let hello2 = "Hi Hello";

    let hello3;
    if(1==2){
        hello3 = "안녕";
    }else{
        hello3 = "잘가";
    }

    let flag = false;
    
    let himsg = "";

    for(let i = 1; i <= 10; i++){
        himsg += "안녕 ";
    }


    //js + xml (html 표기방식)
    return (
        <div>
            <h1>React Basic01</h1>
            <h2 className="font-red">hello react</h2>
            <h3>{hello1}</h3>   {/* js의 변수 출력 시 중괄호 사용  */}
            <h3>{hello2}</h3>
            <h3>{hello3}</h3>

            {
                // 삼항연산자 가능
                //조건식? 앞 : 뒤 (true or false)
                flag == true ? <p>{hello1}</p> : <p>{hello2}</p>
            }
            {
                flag == true && <p>{hello1}</p>
            }
            {
                flag == false && <p>{hello2}</p>
            }

            <h3 style={{ color : 'blue', fontSize : '25px'}}>{himsg}</h3>


        </div>
    )
}

export default Basic01;