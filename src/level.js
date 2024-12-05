// 레벨 계산을 위한 함수
function setLevel(experience) {
    let level = 1;
    let expToNextLevel = 10;
  
    // 경험치가 증가할 때마다 레벨업을 확인
    while (experience >= expToNextLevel) {
      level++;
      expToNextLevel = Math.floor(expToNextLevel * 1.5); // 다음 레벨까지 필요한 경험치 (1.5배 증가)
    }
  
    return { level, experience };
  }
  
  module.exports = { setLevel };
  