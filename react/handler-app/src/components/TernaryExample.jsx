import { useState } from "react";

export default function TernaryExample(){
    const [isLogin, setIsLogin] = useState(false);
    
    return(
        <div style={styles.page}>
            <h2 style={styles.h2}> 삼항 연산자 예제</h2>
            <div style={styles.card}>
                {isLogin ? (<LogoutView setIsLogin={setIsLogin} />) : (<LoginView setIsLogin={setIsLogin} />)}
            </div>
        </div>
    )
}

function LogoutView({setIsLogin}){
    return(
        <div>
            <p style={{marginTop : 0}}>현재 로그아웃 상태이다.</p>
            <button styles={styles.btn} onClick={() => { setIsLogin(prev => !prev)}}>로그인</button>
        </div>
    )
}

function LoginView({setIsLogin}){
    return(
        <div>
             <p style={{marginTop : 0}}>현재 로그인 상태이다.</p>
            <button styles={styles.btn} onClick={() => {setIsLogin(prev => !prev)}}>로그아웃</button>
        </div>
    )
}

const styles ={
    page : {fontFamily : "sans-serif", padding : 20},
    h2 : {margin: "0 0 10px 0"},
    row : {display:"flex", gap : 8, margin : "12px 0", flexWrap: "Wrap"},
    card : {padding : 16, border : "1px solid #ddd", borderRadius : 12, maxWidth : 520},
    btn : {padding : "10px 12px", border : "1px solid #bbb", borderRadius : 10}
}