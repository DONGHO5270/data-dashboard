# 데이터 분석 대시보드

React와 TypeScript를 활용한 데이터 분석 대시보드 프로젝트입니다. Supabase를 백엔드로 사용하여 데이터 관리, 인증, 실시간 업데이트 기능을 제공합니다.

## 주요 기능

- **대시보드 관리**: 여러 대시보드 생성, 수정, 공유 기능
- **차트 시각화**: 다양한 유형의 데이터 시각화 차트 (선형, 막대, 파이, 영역 등)
- **실시간 데이터 업데이트**: Supabase Realtime을 활용한 실시간 데이터 동기화
- **데이터 소스 관리**: 다양한 데이터 소스(CSV, JSON, API, 데이터베이스) 연결 및 관리
- **사용자 인증 및 권한 관리**: 안전한 인증 및 세분화된 접근 제어
- **맞춤형 필터링 및 분석**: 사용자 정의 필터 및 데이터 분석 도구

## 기술 스택

### 프론트엔드
- React 18
- TypeScript
- Recharts (데이터 시각화)
- React Router (라우팅)
- Tailwind CSS (스타일링)

### 백엔드
- Supabase (인증, 데이터베이스, 스토리지, 실시간 기능)

### 테스트
- Jest (단위 테스트)
- React Testing Library (컴포넌트 테스트)
- Playwright (E2E 테스트)

## 설치 및 실행 방법

### 사전 요구사항
- Node.js 16.0 이상
- npm 또는 yarn
- Supabase 계정

### 설치

```bash
# 저장소 클론
git clone https://github.com/DONGHO5270/data-dashboard.git
cd data-dashboard

# 종속성 설치
npm install
# 또는
yarn install

# 환경 변수 설정
cp .env.example .env
# .env 파일에 Supabase 프로젝트 URL과 API 키 입력
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

개발 서버가 http://localhost:5173 에서 실행됩니다.

### 테스트 실행

```bash
# 유닛 테스트
npm run test
# 또는
yarn test

# E2E 테스트
npm run test:e2e
# 또는
yarn test:e2e
```

## 프로젝트 구조

```
data-dashboard/
├── public/           # 정적 파일
├── src/              # 소스 코드
│   ├── assets/       # 이미지, 폰트 등 자산
│   ├── components/   # 재사용 가능한 컴포넌트
│   │   ├── auth/     # 인증 관련 컴포넌트
│   │   ├── charts/   # 차트 컴포넌트
│   │   ├── common/   # 공통 UI 컴포넌트
│   │   ├── dashboard/# 대시보드 관련 컴포넌트
│   │   └── layout/   # 레이아웃 컴포넌트
│   ├── context/      # React Context
│   ├── hooks/        # 커스텀 훅
│   ├── pages/        # 페이지 컴포넌트
│   ├── services/     # API 및 서비스
│   ├── types/        # TypeScript 타입 정의
│   └── utils/        # 유틸리티 함수
├── tests/            # 테스트 파일
│   ├── e2e/          # E2E 테스트
│   ├── integration/  # 통합 테스트
│   └── unit/         # 단위 테스트
├── config/           # 설정 파일
├── .env.example      # 환경 변수 예제
├── package.json      # 프로젝트 메타데이터 및 종속성
├── vite.config.ts    # Vite 설정
└── README.md         # 프로젝트 문서
```

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이센스

[MIT](LICENSE)

## 연락처

프로젝트 관리자: [이메일 주소]

프로젝트 이슈: [GitHub 이슈 페이지](https://github.com/DONGHO5270/data-dashboard/issues)