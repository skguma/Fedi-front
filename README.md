# Fedi-front

## Airbnb의 React 스타일 가이드
-	[Airbnb의 React/JSX 스타일 가이드](https://github.com/airbnb/javascript/tree/master/react)
-	[번역한 블로그](https://firejune.com/1795/Airbnb%EC%9D%98+React%252FJSX+%EC%8A%A4%ED%83%80%EC%9D%BC+%EA%B0%80%EC%9D%B4%EB%93%9C)

## 디자인 패턴
- [X] Presentational & container pattern
- [ ] Atomic design pattern

## 커밋 컨벤션

## 브랜치 전략
- [git 브랜치 전략에 대해서](https://tecoble.techcourse.co.kr/post/2021-07-15-git-branch/)
- [ ] Git-flow
- [ ] Github-flow
- [X] Gitlab-flow

### 1. feature 브랜치  
- 모든 기능은 feature 브랜치에서 진행됨
- master 브랜치에서 나와 master 브랜치로 머지됨
- 기능이 완료되면 merge request 보냄
### 2. master 브랜치  
- git flow의 develop 브랜치와 같음
- feature브랜치에서 병합된 기능을 test함
- 전체적인 테스트가 진행되어 기능보장이 완료되면 production 브랜치로 머지함
### 3. production 브랜치  
- 배포 브랜치

### 각 브랜치 기능
- feature/camera: 카메라로 사진 입력받는 기능
- feature/result: 유사도 분석 결과 보여주는 기능
- feature/networkmap: 네트워크맵을 통해 사진유포 트윗의 리트윗/좋아요 계정을 보여주는 기능
- feature/report: 센터와 트위터에 계정을 신고하는 기능

## 스타일링
- [X] Styled-components
- [X] Material-ui (신고 계정 아바타)
- [ ] CSS module (미확정)
