//import menus from "../data/mydata01";
import menus from "../data/mydata01";
import { menu1, menu3 } from "../data/mydata01";
import { menu4, menu5, menu6 } from "../data/mydata02";
//{}로 익스포트 하면 임포트 할때도 {}로 받아야함

function Export01() {




    return (

        <div>
            <h1>Export01</h1><br />
            mydata01.js
            <h2>{menus}</h2>
            <h2>{menu1}</h2>
            <h2>{menu3}</h2>
            <br /><br />
            mydata02.js
            <h2>{menu4}</h2>
            <h2>{menu5}</h2>
            <h2>{menu6}</h2>


            
        </div>

    )
}


export default Export01;

// <script src = "index.js">
// ES 모듈방식
//ECMAScript 모듈 방식