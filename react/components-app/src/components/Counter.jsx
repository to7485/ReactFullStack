const Counter = ({count}) => {
    //js의 구조분해 할당
    //객체나 배열에 들어있는 값을 한 번에 꺼내서 변수에 넣어버리는 문법
    //const arr = [10,20,30];
    // let x = arr[0];
    // let y = arr[1];
    // let z = arr[2];

    // const [x, y, z] = arr;

    // const user = {name:"Lee",age:30};

    // const {name, age} = user;


    return <p> 현재 숫자:{count}</p>
}

export default Counter;