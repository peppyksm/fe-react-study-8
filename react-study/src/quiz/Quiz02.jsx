function Quiz02() {
    
    let count = 1;

    return (
        <div className="main">
            <div className="container">
                <p id="text">하나</p>
                <button id="btn" onClick={()=>{
                    const text = document.getElementById('text');

                    if(count == 3){
                        count = 0;
                    }
                    count++;

                    if(count == 1){
                        text.textContent = "하나";
                    }else if(count == 2){
                        text.textContent = "둘";
                    }else if(count == 3){
                        text.textContent = "셋";
                    }
                    console.log(count)


                }}>변경버튼</button>
            </div>

        </div>
    )
}

export default Quiz02;