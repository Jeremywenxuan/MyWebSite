document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');

  // 模拟文章数据
  const articles = [
    { title: "生物医学研究的新进展", content: "这篇文章讨论了生物医学领域的最新研究成果..." },
    { title: "大学生活体验", content: "分享我作为一名生物医学专业学生的日常生活..." },
    { title: "科研方法论", content: "探讨了进行科学研究的有效方法和技巧..." }
  ];

  function performSearch() {
    const query = searchInput.value.toLowerCase();
    const results = articles.filter(article => 
      article.title.toLowerCase().includes(query) || 
      article.content.toLowerCase().includes(query)
    );

    displayResults(results);
  }

  function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
      searchResults.innerHTML = '<p>未找到相关文章，请尝试其他关键词。</p>';
      return;
    }

    results.forEach(article => {
      const resultElement = document.createElement('div');
      resultElement.className = 'search-result';
      resultElement.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.content.substring(0, 100)}...</p>
      `;
      searchResults.appendChild(resultElement);
    });
  }

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});
