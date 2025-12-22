import { useState } from "react";

export default function HandlerCounter(){
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(c => c+1);
    };

    const handleMinus = () => {
        setCount(c => { 
            if(c-1 <0) {
                return 0;
            }
            return c-1;
        });
    };

    return(
        <div style={styles.card}>
            <h3 style={styles.h3}>핸들러 방식의 카운터</h3>
            <p>count : {count}</p>

            <button style={styles.btn} onClick={handlePlus}>
                +1
            </button>

            <button style={styles.btn} onClick={handleMinus}>
                -1(0미만 방지)
            </button>
        </div>
    );
}

const styles= {
    card : {padding : 16, border : "1px solid #ddd", borderRadius : 12, maxWidth : 520},
    h3 : {marginTop : 0},
    btn : {marginRight : 8, padding : "10px 20px", border: "1px solid #bbb", borderRadius : 10}
}