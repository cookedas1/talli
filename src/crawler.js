const axios = require('axios');
const cheerio = require('cheerio');

// 단어를 검색하는 함수
async function crawlWordDefinition(word) {
  try {
    // 예시 URL (이 URL은 실제 웹사이트에 맞게 수정해야 합니다)
    const url = `https://krdict.korean.go.kr/eng/dicSearch/SearchView.jsp?searchKeyword=${encodeURIComponent(word)}&searchType=word`;

    // axios로 페이지 요청
    const { data } = await axios.get(url);

    // cheerio로 HTML 파싱
    const $ = cheerio.load(data);

    // 단어의 정의를 추출 (실제 HTML 구조에 맞게 수정 필요)
    const definition = $('#wordDef').text().trim(); // 예시 CSS 선택자

    if (definition) {
      return { word, definition };
    } else {
      return { word, definition: '정의가 없습니다.' };
    }
  } catch (error) {
    console.error('크롤링 중 오류 발생:', error);
    return { word, definition: '정의를 가져올 수 없습니다.' };
  }
}

module.exports = { crawlWordDefinition };
