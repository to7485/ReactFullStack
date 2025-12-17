import { useState } from "react";

function CounterFunctional(){
    //1. 상태(state) 정의 : useState()훅 사용하기
    //[현재 상태의 값을 담을 변수, 상태의 값을 변경할 수 있는 함수] = useState(초기값);
    const [count,setCount] = useState(0);

    return(
        <div>
            <h2>함수형 컴포넌트 카운터</h2>
            <p>현재 숫자 : {count}</p>
            <button onClick={() => {
                setCount(count+1);
            }}>
                +1 증가
            </button>
        </div>
    )
}

export default CounterFunctional;