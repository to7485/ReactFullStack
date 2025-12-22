import {useState} from 'react'

export default function EarlyReturnExample(){
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);

    const simulate = (next) => {
        setStatus(next);
        //status의 값에 따라서 data state를 세팅한다.
        if(next === 'success'){
            setData({title : "데이터 로딩 성공이다"});
        } else if(next === "nodata"){
            setData(null);
        } else{
            setData(null);
        }
    }

    const normalizedStatus = status === "success" ? "success" : status;

    return(
        <div style={styles.page}>
            <h2>Early Return</h2>

            <div style={styles.row}>
                <button style={styles.btn} onClick={() => simulate("loading")}>로딩</button>
                <button style={styles.btn} onClick={() => simulate("error")}>에러</button>
                <button style={styles.btn} onClick={() => simulate("nodata")}>데이터 없음</button>
                <button style={styles.btn} onClick={() => simulate("success")}>성공</button>
                <button style={styles.btn} onClick={() => simulate("idle")}>초기화</button>
            </div>

            <Page status={normalizedStatus} data={data} />
        </div>
    )
}
//컴포넌트를 같은 페이지 만들면 export를 하거나 import를 안해도 된다.
function Page({status,data}){

    if(status === 'idle') return <Box text="대기상태" />
    if(status === 'loading') return <Box text="로딩중..." />
    if(status === 'error') return <Box text="에러 발생" />
    if(!data) return <Box text="데이터 없음" />

    return(
        <div style={styles.card}>
            <p style={{margin:0}}>성공 화면</p>
            <h3 style={{marginBottom: 0}}>{data.title}</h3>
        </div>
    )
}

function Box({text}){
    return <div style={styles.card}>{text}</div>
}

const styles ={
    page : {fontFamily : "sans-serif", padding : 20},
    row : {display:"flex", gap : 8, margin : "12px 0", flexWrap: "Wrap"},
    card : {padding : 16, border : "1px solid #ddd", borderRadius : 12, maxWidth : 520},
    btn : {padding : "10px 12px", border : "1px solid #bbb", borderRadius : 10}
}