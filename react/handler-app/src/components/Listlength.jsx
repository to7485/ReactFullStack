import { useState } from "react";

export default function ListLengthExample(){
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    //할일 추가
    function add(){

    }

    //전체삭제
    function clear(){

    }

    return(
        <div style={styles.page}>
            <h2 style={styles.h2}>배열 길이 기반 분기</h2>

            <div style= {styles.row}>
                <input
                    style={styles.input}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="항목을 입력한다."
                />
                <button style={styles.btn} onClick={add}>추가</button>
                <button style={styles.btn} onClick={clear}>전체삭제</button>
            </div>

            {/* 배열의 길이가 0이면 결과없음
            배열의 길이가 0이 아니면 배열을 List 컴포넌트의 props로 전달하여 렌더링 */}
            {items.length === 0 ? (
                <div style={styles.card}>결과 없음</div>
            ) : (
                <List items={items} />
            )}
        </div>
    )
}

function List({item}){
    return(
        <div>
            <ul>
                {item.map((it) => {
                    <li key={it.id}>{it.title}</li>
                })}
            </ul>
        </div>
    )
}

const styles ={
    page : {fontFamily : "sans-serif", padding : 20},
    h2 : {margin: "0 0 10px 0"},
    row : {display:"flex", gap : 8, margin : "12px 0", flexWrap: "Wrap"},
    card : {padding : 16, border : "1px solid #ddd", borderRadius : 12, maxWidth : 520},
    btn : {padding : "10px 12px", border : "1px solid #bbb", borderRadius : 10},
    input : {flex : 1, padding: "10px 20px", border: "1px solid #bbb", borderRadius: 10},
    ul : {margin : 0, paddingLeft : 18, lineHeight : 1.8},
}