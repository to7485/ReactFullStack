import { useState } from "react";

export default function Immutability(){
    //객체 state
    const [user,setUser] = useState({name:"",age:0});
    
    //배열 state
    const [todos, setTodos] = useState([]);

    return(
        <>
            <p>이름 : {user.name}</p>
            <button onClick={() => {
                //user.name="kim" 객체의 프로퍼티를 직접 변경할 수 없다.
                //setUser((prev) => prev.name = "kim"); 같은 객체를 참조
                //객체를 수정할 때는 값을 복사한 새로운 객체를 만들어야
                //리액트가 state가 변경됐구나 하고 재렌더링을 한다.
                setUser({
                    ...user,
                    name:"Lee",
                })
            }}>
                이름 변경
            </button>

            <h2>배열 상태</h2>
            <button onClick={() => {
                setTodos((prev) => [...prev, {id:Date.now(), title:'공부'}])
            }}>할 일 추가</button>

            <ul>
                //todos배열에 들어있는 요소의 개수만큼 <li>제목</li>을 만들어주세요
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>





        </>
    )
}