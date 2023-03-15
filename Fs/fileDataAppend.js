const fs = require('fs')

try {
  const file = "test.html";
  const data = "<h1>뭘 보는줄 아냐?</h1>";
  fs.appendFileSync(file,data);
} catch (error) {
  console.log(error);
}

// 기존데이터에 추가로 입력할 수 있다.