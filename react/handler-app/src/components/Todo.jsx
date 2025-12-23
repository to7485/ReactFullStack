import { useState } from "react";

export default function Todo(){
    //입력한 값을 저장할 state
    const [text, setText] = useState("");

    //할일들을 저장할 state
    const [todos, setTodos] = useState([
        {id : 1, title:"React 이벤트 연습하기", done:false},
        {id : 2, title:"조건부 렌더링 연습하기", done:true},
    ])

    //진행중/완료를 필터링 하여 렌더링 하기 위한 state
    const [filter, setFilter] = useState("success");

    //필터링된 항목 만들기
    let filteredTodos = todos;
    if(filter === "active") {
        filteredTodos = todos.filter((t) => !t.done);
    }

    if(filter === "done"){
        filteredTodos = todos.filter((t) => t.done);
    }

    //요소의 개수 세기
    const total = todos.length;
    const doneCount = todos.filter((t) => t.done).length;
    const activeCount = total - doneCount;

    //입력창에 적은 값을 state에 세팅하는 함수
    const handleChangeText = (e) => setText(e.target.value);

    //추가하기
    const handleAdd = () => {
        const title = text.trim();
        if(title === ''){
            return;
        }

        const newTodo = {
            id:Date.now(),
            title,
            done:false
        }

        setTodos((prev) => [newTodo,...prev]);
        setText("");
    };

    //완료여부를 바꾸는 함수
    const handleToggle = (id) => {
        setTodos((prev) => 
            prev.map((t) => (t.id === id?{...t, done:!t.done} : t))
        );
    };

    const handleRemove = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }

    const handleClearDone = () => {
        setTodos((prev) => prev.filter((t) => !t.done));
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            handleAdd();
        }
    }

    return(
        <Page>
            <h2 style={{marginTop:0}}>미니 Trello(할 일 관리)</h2>
            <div style={styles.row}>
                <input
                    style={styles.input}
                    value={text}
                    onChange={handleChangeText}
                    onKeyDown={handleKeyDown}
                    placeholder="할 일을 입력한다"
                />
                <button style={styles.btn} onClick={handleAdd}>
                    추가
                </button>

                {/* 필터버튼
                전체, 진행중, 완료, 전체삭제 */}
                <div style={styles.row}>
                    <FilterButton
                        active={filter === "all"}
                        onClick={() => setFilter("all")}
                        text={`전체(${total})`}
                    />

                    <FilterButton
                        active={filter === "active"}
                        onClick={() => setFilter("active")}
                        text={`미완료(${activeCount})`}
                    />

                    <FilterButton
                        active={filter === "done"}
                        onClick={() => setFilter("done")}
                        text={`완료(${doneCount})`}
                    />

                    <button style={styles.btn} onClick={handleClearDone}>
                        완료 삭제
                    </button>
                </div>

                {/* 필터링된 항목이 있으면 표시 없으면 표시할 항목이 없다. */}
                {filteredTodos.length === 0 ? (
                    <Box>표시할 항목이 없다.</Box>
                ):(
                    <ul style={styles.list}>
                        {filteredTodos.map((t) => (
                            <li key={t.id} style={styles.item}>
                                <label style={styles.label}>
                                    <input
                                        type="checkbox"
                                        checked={t.done}
                                        onChange={() => handleToggle(t.id)}
                                    />
                                    <span
                                        style={{
                                            marginLeft : 10,
                                            textDecoration: t.done ? 'line-through' : 'none'
                                        }}
                                    >
                                        {t.title}
                                    </span>

                                    <button
                                        style={styles.dangerBtn}
                                        onClick={() => handleRemove(t.id)}
                                    >
                                        삭제
                                    </button>
                                </label>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </Page>
    )
}

function Page({children}){
    return <div style={styles.page}>{children}</div>
}

function Box({children}){
    return <div style={styles.box}>{children}</div>
}

function FilterButton({active, onClick, text}){
    return(
        <button
            style={{
                ...styles.btn,
                borderColor: active ? '#333' : '#bbb',
                fontWeight : active ? "700" : "400",
            }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

const styles={
    page:{
        padding : 20,
        maxWidth : 900,
        margin : "0 auto"
    },
    card : {
        padding : 16, 
        border: "1px sold #ddd", 
        borderRadius : 12
    },
    row : {
        display : 'flex',
        gap : 8,
        flexWrap : 'wrap',
        alignItems : 'center',
        marginTop : 12,
    },
    input : {
        flex : 1,
        minWidth : 240,
        padding : "10px 12px",
        border : "1px solid #bbb",
        borderRadius : 10,
    },
    btn: {
        padding : '10px 12px',
        border : '1px solid #bbb',
        borderRadius : 10,
        background : 'white'
    },
    dangerBtn : {
       padding : '10px 12px',
        border : '1px solid #ff9b9b',
        borderRadius : 10,
        background : 'white'
    },
    list : {
        margin : "12px 0 0 0",
        paddingLeft : 0,
        listStyle: "none"
    },
    item : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        gap : 12,
        padding : 12,
        border : "1px solid #eee",
        borderRadius : 12,
        marginTop : 8,
    },
    label:{
        display : 'flex',
        alignItems : 'center',
        flex : 1
    },
    box : {
        padding : 16,
        border : '1px dashed #bbb',
        borderRadius : 12,
        marginTop : 12
    },

}