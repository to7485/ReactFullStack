import { useEffect,useState } from "react";

export default function NoticeSlider(){
    //api에 요청을 하고 난 후 받은 결과물을 저장할 state
    const [posts, setPosts] = useState([]);
    //게시글의 index값을 저장할 state
    const [index, setIndex] = useState(0);
    //통신 상태를 보여주는 state
    const [status, setStatus] = useState("");

    //컴포넌트가 화면에 띄워지면 데이터를 자동으로 받아왔으면 좋겠어
    //https://jsonplaceholder.typicode.com/posts?_limit=5에 요청
    useEffect(() => {
        //컴포넌트가 언마운트 된 후에는 상태 업데이트를 하지 않도록 막는 변수
        let ignore = false;

        //비동기 함수를 만든다.
        async function load(){
            try {
                setStatus("loading");
                const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
                //res.ok : HTTP 응답 상태 코드가 "성공 범위인지"를 나타내는 Boolean값이다.
                //200 ~ 299 -> true
                //이외의 것들은 -> false
                if(!res.ok) {
                    throw new Error("HTTP_ERROR");
                }

                //정상적으로 통신이 완료 됐다면
                const data = await res.json(); //데이터 파싱

                if(!ignore){
                    setPosts(data);//비어있는 배열에 게시글 형태의 객체가 순차적으로 들어가게 된다.
                    setStatus("success");
                    setIndex(0);
                }
            } catch (error) {
                if (!ignore){
                    setStatus("error");
                }
            }
        }

        load(); //비동기 함수를 호출

        return () => {
            ignore = true;
        }
    },[])

    //posts가 준비되면 3초마다 index를 자동 증가시키는 useEffect
    useEffect(() => {
        //넘어온 값이 없으면 멈춤
        if(posts.length === 0){
            return;
        }

        //setInterval() : 일정 시간마다 콜백함수를 작동시키는 함수
        const id = setInterval(() => {
            //인덱스의 값을 증가
            setIndex((prev) => (prev + 1) % posts.length);
            //만약에 index의 값이 5보다 커지면 다시 1로 바꿔
        },3000);

        return () => clearInterval(id);
    },[posts]);

    const box = {
        width : 560,
        borderRadius : 14,
        padding : 16,
        border : "1px solid #e5e7eb",
        background : "#f9fafb",
        boxShadow : "0 8px 20px rgba(0,0,0,0.06)",
        fontFamily : "system-ui, sans-serif",
    };

        const badge = {
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: 999,
        border: "1px solid #e5e7eb",
        background: "white",
        fontSize: 12,
        fontWeight: 800,
    };

    return(
        <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
      <div style={box}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0 }}>공지사항</h3>
          <span style={badge}>
            {posts.length ? `${index + 1} / ${posts.length}` : "0 / 0"}
          </span>
        </div>

        {status === "loading" && <p style={{ marginTop: 12 }}>공지 불러오는 중...</p>}
        {status === "error" && <p style={{ marginTop: 12, color: "#ef4444" }}>불러오기 실패</p>}

        {status === "success" && posts.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 6 }}>
              {posts[index].title}
            </div>
            <div style={{ color: "#6b7280", lineHeight: 1.6 }}>
              {posts[index].body}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",
                  background: "white",
                  fontWeight: 700,
                }}
                onClick={() => setIndex((prev) => (prev - 1 + posts.length) % posts.length)}
              >
                이전
              </button>
              <button
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",
                  background: "white",
                  fontWeight: 700,
                }}
                onClick={() => setIndex((prev) => (prev + 1) % posts.length)}
              >
                다음
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    )
}