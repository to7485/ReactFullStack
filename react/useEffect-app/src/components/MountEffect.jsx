import { useEffect, useState } from "react";

export default function MountEffect() {

    const [count, setCount] = useState(0);

    //비어있는 의존성 배열
    //컴포넌트가 화면에 최초로 렌더링 될 때(mount) useEffect의 콜백함수가
    //1회 실행이 된다.
    //초기 설정을 할 때, API 초기 호출
    useEffect(() => {
        console.log("컴포넌트 최초 마운트 시 1회 실행")
    },[]);

    return(
        <div>
            <button onClick={() => setCount((p) => p + 1)}>+1</button>
            <p>count : {count}</p>
        </div>
    )
}