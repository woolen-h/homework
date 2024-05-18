# 🍎 <span style="color:#E93C3A;">apple 제품 카드</span>
```
# 그리드를 사용하여 구현하고 구현 결과를 움직이는 이미지로 생성하여 삽입해주세요.
```
<figure style="margin:0; background-color:black; padding:20px 40px 10px; border:5px solid #ddd;">
  <img src="./[멋쟁이사자처럼] Apple 구현 비디오 - 김한울.gif" width="100%">
  <figcaption style="display: flex; justify-content:center; color: #777;">[멋쟁이사자처럼] Apple 구현 비디오</figcaption>
</figure>

## 🚲 <span style="color:#E93C3A;">레이아웃</span>
### <span style="background-color: #E93C3A; color: #f5f5f7;">전체</span>
- 그리드와 미디어쿼리로 `large` / `small` 스크린의 배열을 서로 다르게 적용하였습니다.

### <span style="background-color: #E93C3A; color: #f5f5f7;">카드 내부</span>
- 그리드로 중간 정렬, 탑 정렬을 하여 내부 요소들을 배치
- 각 간격은 `row-gap`으로 적용
<br><br>

---
---

## 🎁 <span style="color:#E93C3A;">스타일</span>
### <span style="background-color: #E93C3A; color: #f5f5f7;">각 요소의 LOOK</span>
- 전체적인 폰트는 공통되게 적용
- 버튼은 클래스로 컴포넌트를 만들어 적용
- `card`의 룩이 `light`, `dark`인 경우를 분리하여 폰트 컬러 적용