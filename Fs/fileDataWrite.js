const fs = require('fs')

try {
  const file = "test.html";
  const data = "<h1>뭘봐</h1>";
  fs.writeFileSync(file,data);
} catch (error) {
  console.log(error);
}