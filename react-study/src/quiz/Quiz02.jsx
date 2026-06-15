import { useState } from "react";

function Quiz02() {

    let [count, setCount] = useState(0);
    let text = ['하나', '둘', '셋'];

    const countBtn = (() => {
        if (count == 2) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    })


    return (
        <div className="main">
            <div className="container">
                <p>{text[count]}</p>
                <button onClick={countBtn}>변경버튼</button>
            </div>

        </div>
    )
}

export default Quiz02;