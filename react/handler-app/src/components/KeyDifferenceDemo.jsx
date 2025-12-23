import { useState } from "react";

export default function KeyDifferenceDemo(){
    const [users, setUsers] = useState([
        {id:1,name:"kim"},
        {id:2,name:"Lee"},
        {id:3,name:"Park"},
    ])

    function addFront(){
        const nextId = Math.max(...users.map((u) => u.id))+1;
        setUsers((prev) => [{id:nextId, name:"NewUser"},...prev])
    }

    return(
        <div style={{padding : 12}}>
            <button onClick={addFront}>맨앞에 추가</button>

            {/* users의 내용을 <li>에 출력하는 코드 작성하기
            key는 id값으로 한다. */}
            {users.map((user) => (
                <li key={user.id} style={{marginTop : 8}}>
                    {user.name} : 
                    <input defaultValue={user.name} />
                    <span style={{marginLeft : 8}}>(id : {user.id})</span>
                </li>
            ))}
        </div>
    )
}