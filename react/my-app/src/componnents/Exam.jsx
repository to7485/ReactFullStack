const Exam = () => {
    //name 변수에 이름을 하나 넣고
    //<h1>안녕하세요, xxx님</h1> 출력하기

    //age 변수에 나이를 하나 넣고
    //성인입니다 또는 미성년자입니다 출력하기

    //배열 ["HTML","CSS","JS","React"]를 ul > li 목록으로 출력하시오.

    //isDarkMode가 true면 배경색을 검정, false면 흰색으로 바꾸시오. 
    //(인라인 style 객체 사용)

    //users = [{id:1,name:"Kim"},{id:2,name:"Lee"}]를 map으로 출력하되 
    // key는 id를 사용하시오.
    const users = [{id:1,name:"Kim"},{id:2,name:"Lee"}];



    return(
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Exam;

