import React from 'react';
import styled from 'styled-components';

// <h1> 태그에 고정된 스타일을 적용한 PrimaryTitle 컴포넌트 정의
const PrimaryTitle = styled.h1`
  font-size: 32px;
  color: #ff0000;
  text-align: center;
  margin-bottom: 20px;
`;

// 사용 예시
function SolutionOne() {
  return (
    <PrimaryTitle>styled-components 강의 실습 시작</PrimaryTitle>
  );
}

export default SolutionOne;