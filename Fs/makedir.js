const fs = require('fs');

try {
  fs.mkdirSync("makeFolder");
} catch(error)  {
  console.log(error);
}