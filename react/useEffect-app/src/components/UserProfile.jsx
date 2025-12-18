import { useEffect,useState } from "react";

function UserProfile(){
    //현재 상태를 가지고 있는 state
    const [ status, setStatus ] = useState("idle");
    const [ user, setUser ] = useState(null);

    //useEffect의 콜백함수는 async를 사용하여 비동기 함수로 만들 수 없다.
    //콜백함수는 아무것도 반환하지 않거나 cleanup함수만 반환해야 한다.
    //async를 붙이게 되면 Promise객체를 반환해서 의도와 다르게 동작할 수 있다.
    useEffect(() => {
        let ignore = false;

        //https://jsonplaceholder.typicode.com/users/1
        async function load(){
            setStatus("loading");
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
                const data = await res.json();
                if(!ignore){
                    setUser(data);
                    setStatus("success");
                }
            } catch (error) {
                if(!ignore) setStatus("error");
            }
        }

        load();
        return () => {ignore = true;};
    },[])

    return(
        <div>
            <h3>프로필</h3>
            <p>status : {status}</p>
            {user && (
                <div>
                    <p>name : {user.name}</p>
                    <p>email : {user.email}</p>
                </div>
            )}
        </div>
    )
}

export default UserProfile;