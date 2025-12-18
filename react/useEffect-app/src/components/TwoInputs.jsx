import { useState } from "react";

const TwoInputs = () => {
    //email을 관리하는 state
    const [email, setEmail] = useState("");
    //password를 관리하는 state
    const [password, setPassword] = useState("");

    return(
        <div>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"/>
            <br />
            <p>email : {email}</p>
            <p>password : {password}</p>
        </div>
    )
}

export default TwoInputs;