const axios = require('axios');
const cheerio = require('cheerio');

// 단어를 검색하는 함수
async function crawlWordDefinition(word) {
  try {
    const url = `https://krdict.korean.go.kr/eng/dicSearch/SearchView.jsp?searchKeyword=${encodeURIComponent(word)}&searchType=word`;

    // axios로 페이지 요청
    const { data } = await axios.get(url);

    // cheerio로 HTML 파싱
    const $ = cheerio.load(data);
    
    const definition = $('#wordDef').text().trim();

    if (definition) {
      return { word, definition };
    } else {
      return { word, definition: '[시스템] 단어 크롤링 오류. };
    }
  } catch (error) {
    console.error('크롤링 중 오류 발생:', error);
    return { word, definition: '정의를 가져올 수 없습니다.' };
  }
}

module.exports = { crawlWordDefinition };
