import { useEffect,useState } from "react";

export default function RenderDebugger(){
    const [count, setCount] = useState(0);

    //의존성 배열이 없을 때
    //렌더링이 일어날때마다 콜백함수가 실행이된다.
    //"왜 화면이 자주 렌더링이 될까?"같은 성능점검을 할 때 사용
    //실제 서비스에서는 보통 남기지 않는다.
    useEffect(() => {
        console.log(`렌더링 발생 : ${count,new Date().toLocaleDateString()}`);
    })

    return(
        <div>
            <h3>렌더 디버거(개발용)</h3>
            <button onClick={() => setCount((p) => p + 1)}>+1</button>
            <p>count : {count}</p>
        </div>
    )
}