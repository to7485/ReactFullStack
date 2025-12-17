export default function BadCounter(){
    //일반 자바스크립트 코드가 들어올 수 있다.
    let count = 0;
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                count = count +1;
                console.log("count:",count);
            }}>
                +1
            </button>
        </div>
    )
}