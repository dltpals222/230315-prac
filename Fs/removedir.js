const fs = require('fs');

try {
  fs.rmdirSync("makeFolder");
} catch(error) {
  console.log(error);
}