//일반 형태의 함수로 작성해도 되고, 요즘에는 화살표 함수로 많이 작성한다.
const Hello = () => {
    //JavaScript에서 return은 하나의 값만 반환할 수 있다.
    //여러줄의 코드를 안전하고 읽기 좋게 반환하기 위해 소괄호를 사용한다.
    return (
        <div>
            <h2>Hello Component</h2>
            <p>이것은 함수형 컴포넌트입니다.</p>
        </div>
    )
}

//export + default(기본 내보내기) : 가장 많이 쓰는 방식
export default Hello;