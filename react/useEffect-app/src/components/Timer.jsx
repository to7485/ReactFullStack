import { useState,useEffect } from "react";

export default function Timer(){
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log("타이머 시작");

        const id = setInterval(() => {
            setTime((prev) => prev + 1);
        },1000);

        return () => {
            console.log("타이머 cleanup 실행");
            clearInterval(id);
        };
    },[]);

    return <h2>{time}초</h2>;
}