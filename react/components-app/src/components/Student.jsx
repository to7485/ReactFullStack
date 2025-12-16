const Student = ({name="홍길동",age,isStudent}) => {
    const greeting = `안녕하세요, 저는${name}이고 ${age}살입니다.`

    return(
        <div>
            <h3>{greeting}</h3>
            <p>학생여부 : {isStudent ? 'O' : 'X'}</p>
        </div>
    )
}
export default Student;