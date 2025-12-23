import styled from "styled-components";

const Btn = styled.button`
  padding: 12px 16px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  font-weight: 700;

  /* ✅ props로 스타일 분기한다 */
  background: ${(props) => (props.variant === "primary" ? "#2563eb" : "transparent")};
  color: ${(props) => (props.variant === "primary" ? "white" : "#111827")};
  border: ${(props) => (props.variant === "primary" ? "0" : "2px solid #111827")};

  /* ✅ 상태 스타일도 가능하다 
  &  -> 현재 컴포넌트 자신
  &:disabled 이 컴포넌트가 disabled 상태일때 */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function Demo() {
  return (
    <div style={{ padding: 16 }}>
      <Btn variant="primary">확인</Btn>
      <Btn variant="outline" style={{ marginLeft: 8 }}>취소</Btn>
      <Btn disabled style={{ marginLeft: 8 }}>비활성</Btn>
    </div>
  );
}
