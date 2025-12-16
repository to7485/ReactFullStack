//매개변수 이름은 그냥 변수명이라서 아무이름으로 써도 된다.
//다만 관례상 props를 많이 쓴다.
//const props = {text : "확인"};
const Button = (props) => {
    return(
        <button>
            {props.text ? props.text : "기본 버튼"}
        </button>
    )
}

export default Button;