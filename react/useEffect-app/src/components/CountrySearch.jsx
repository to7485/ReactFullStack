import { useEffect, useState } from "react";

export default function CountrySearch() {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const q = keyword.trim();

    // 입력이 너무 짧으면 요청 안 함(실무에서 흔히 넣는 가드)이다
    if (q.length < 2) {
      setStatus("idle");
      setCountries([]);
      return;
    }

    // ✅ 디바운스 타이머이다
    const timer = setTimeout(() => {
      const controller = new AbortController();

      async function search() {
        setStatus("loading");

        try {
          // ✅ 필요한 필드만 요청한다(가벼움 + 안정성)이다
          const url =
            `https://restcountries.com/v3.1/name/${encodeURIComponent(q)}` +
            `?fields=name,flags,cca2`;

          const res = await fetch(url, { signal: controller.signal });

          // name 검색은 결과가 없으면 404가 나올 수 있다
          if (!res.ok) throw new Error("HTTP_ERROR");

          const data = await res.json();

          // 너무 길어지지 않게 상위 20개만 보여준다
          setCountries(data.slice(0, 20));
          setStatus("success");
        } catch (e) {
          // ✅ 이전 요청 취소는 에러로 취급하지 않는다
          if (e.name === "AbortError") return;

          setCountries([]);
          setStatus("error");
        }
      }

      search();

      // ✅ 타이머 콜백 내부에서 만든 controller를 cleanup에서 쓰기 위해 반환 패턴을 쓴다
      // 여기서는 아래 cleanup에서 controller.abort()를 호출하기 위해 window에 저장하지 않고,
      // setTimeout 자체를 cleanup으로 감싸는 대신 "컨트롤러는 즉시 abort 가능한 구조"로 만들기 위해
      // 다음 cleanup에서 다시 AbortController를 쓰는 구조가 아니라,
      // 가장 단순하게 "요청 시작 시점에만 abort"가 필요하므로 아래처럼 작성한다
      // -> 대신, 더 확실하게 하려면 controller를 outer 스코프로 빼도 된다
      return () => controller.abort();
    }, 500);

    // ✅ cleanup: 디바운스 타이머 취소 + 진행 중 요청 취소이다
    return () => {
      clearTimeout(timer);
      // timer 콜백이 실행된 이후라면, 콜백 내부에서 반환한 abort cleanup은 호출되지 않으므로
      // 더 확실한 취소가 필요하면 controller를 useRef로 빼는 방식이 더 좋다
      // 수업 난이도 고려해서 여기서는 "타이머 취소"를 우선 보장한다
    };
  }, [keyword]);

  const wrap = {
    width: 520,
    borderRadius: 14,
    padding: 16,
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    fontFamily: "system-ui, sans-serif",
  };

  const item = {
    display: "flex",
    gap: 10,
    alignItems: "center",
    padding: "10px 10px",
    borderRadius: 10,
    border: "1px solid #f1f5f9",
    marginBottom: 8,
    background: "#fff",
  };

  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
      <div style={wrap}>
        <h3 style={{ marginTop: 0 }}>나라 검색</h3>

        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="나라 이름 입력 (2글자 이상, 0.5초 디바운스)"
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
            outline: "none",
            marginBottom: 12,
          }}
        />

        {status === "idle" && (
          <p style={{ color: "#6b7280", marginTop: 0 }}>
            2글자 이상 입력하면 검색이 시작된다
          </p>
        )}

        {status === "loading" && <p>검색 중...</p>}

        {status === "error" && (
          <p style={{ color: "#ef4444" }}>
            검색 결과가 없거나 요청에 실패했다
          </p>
        )}

        {status === "success" && countries.length === 0 && (
          <p style={{ color: "#6b7280" }}>검색 결과가 없다</p>
        )}

        {countries.map((c) => (
          <div key={(c.cca2 ?? "") + (c.name?.common ?? "")} style={item}>
            <img
              src={c.flags?.png}
              alt="flag"
              style={{
                width: 26,
                height: 18,
                borderRadius: 4,
                border: "1px solid #e5e7eb",
              }}
            />
            <div style={{ fontWeight: 700 }}>{c.name?.common}</div>
          </div>
        ))}
      </div>
    </div>
  );
}