const { crawlWordDefinition } = require('./crawler');
const { setLevel } = require('./level');

// 게임 설정을 위한 라운드 수와 시간 설정 (게임 UI와 연결됨)
let rounds = 5;
let timeLimit = 60; // 초

// 단어 연습을 시작하는 함수
async function startWordPractice() {
  const word = '사랑'; // 예시 단어 (실제 단어를 가져오는 방식은 사용자가 선택하거나 랜덤으로 할 수 있습니다)
  const result = await crawlWordDefinition(word);

  // 단어와 정의를 출력
  console.log(`단어: ${result.word}`);
  console.log(`정의: ${result.definition}`);

  // 경험치 계산 로직 추가 필요
  let experience = 10; // 예시 경험치 (빠르고 정확하게 입력할 때 경험치 추가)

  const newLevel = setLevel(experience);
  console.log(`현재 레벨: ${newLevel.level}, 경험치: ${newLevel.experience}`);
}

module.exports = { startWordPractice };
