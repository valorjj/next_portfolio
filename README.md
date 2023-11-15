<!-- @format -->

# Server VS Client Components

| 구분                                                 | 서버 | 클라이언트 |
| ---------------------------------------------------- | ---- | ---------- |
| 데이터 fetch                                         | 👌   | 💩         |
| 직접적인 백엔드 자원 접근                            | 👌   | 💩         |
| 토큰, API 키 등 민감한 정보를 서버에 저장            | 👌   | 💩         |
| 많은 의존성을 서버에 저장                            | 👌   | 💩         |
| 상호작용과 이벤트 리스너 사용                        | 💩   | 👌         |
| 브라우저에서만 사용가능한 API 사용 가능?             | 💩   | 👌         |
| useState, useEffect 에 의존하는 커스텀 훅 사용 가능? | 💩   | 👌         |
| React Class 컴포넌트 사용 가능?                      | 💩   | 👌         |

`'use client'` 사용 시, React Tree 에 boundary 가 생성된다.
해당 컴포넌트에서 호출한 다른 컴포넌트는 boundary 안에 속하기 때문에, client 컴포넌트가 된다.

# 진행 중 메모

- Hydration 과정 중, state 변경은 위험하기 때문에 useEffect 훅을 사용한다. 해당 프로젝트는 ActiveSection 상태를 기준으로 여러 동작이 정해진다.

- data.ts 에서 가져오는 데이터 [] as const 가 존재하기 때문에, 아무 string 만 되는 것이 아니라 정확히 배열에 존재하는 값만 들어갈 수 있다.

- Intro 안에 있는 내용들 처럼 연관되어 있는 경우 div 말고 section 태그 사용

- `useEffect` 를 사용하는 이유

  - 외부 환경과 동기화하기 위해서!

- `scroll-mt-28`

## vertical-timeline

`npm i --save-dev @types/react-vertical-timeline-component`

## resend

## react-hot-toast

> 에러 핸들링
