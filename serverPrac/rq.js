module.exports = {
  basic : `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const tagMake = require('./examModule.js')
      const root = document.getElementById('root')
      tagMake(root,'div',1)
    </script>
  </body>
  </html>
  `
}