const Jsx = () => {

    //HTML태그를 변수에 직접 담을 수 있다.
    const element = <h1>Hello, world!</h1>

    //JavaScript 값은 중괄호로 넣을 수 있다.
    const name = "Kim";
    const age = 20;

    const boxStyle = {
        backgroundColor : 'lightgray',
        padding : "12px",
        borderRadius : "8px",
    }
    
    //JSX에서 자주 사용하는 패턴
    //1. 조건부 렌더링(삼항연산자)
    //JSX안에서 if문을 직접 쓸 수는 없고, 보통 삼항연산자를 사용한다.
    const isLogin = true;

    //2. 조건부 렌더링(AND연산자 &&)
    //조건이 true면 렌더링을 한다.
    const hasMessage = false;

    //3. 리스트 렌더링(map() 메서드)
    //배열을 ul 목록으로 바꿀 때 map()메서드를 사용한다.
    const fruits = ["사과","바나나","포도"];

    return (
        //반드시 하나의 부모 요소로 감싸야 한다.
        //불필요한 div를 쓰고싶지 않다면 Fragment를 사용한다.
        //<> </>
        <>
            {element}
            <h2>이름 : {name}</h2>
            <h2>나이 : {age}</h2>
            <h2>내년 나이 : {age + 1}</h2>
            
            {/* class는 예약어라서 JSX에서는 className을 쓴다. */}
            <div className="container">박스</div>

            {/* CSS 문자열이 아니라 JavaScript 객체형태로 써야 한다.
            속성들은 fontSize, backgroundColor처럼 카멜표현식으로 써야한다. */}
            <div style={{color:'red','fontSize':'20px'}}>스타일박스</div>
            <div style={boxStyle}>스타일박스2</div>

            {/* 태그는 반드시 닫는다. */}
            <input />
            <img src="logo.png" alt="logo"/>

            {isLogin ? <h1>환영합니다</h1> : <h1>로그인해주세요</h1>}
            <div>{hasMessage && <p>새 메시지가 있습니다.</p>}</div>

            <ul>
                {fruits.map((item,index) => (
                    // 이때 li의 속성으로 key를 쓰는것이 좋다.
                    // 리액트가 각 li를 구분하는 용도로 쓴다.
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default Jsx;