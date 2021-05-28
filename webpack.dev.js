const common = require('./webpack.config.js')
const fs = require('fs')
fs.readFile("./dist/index.html", 'utf8', function (err,data) {
  const formatted = data.replace(/(\.min)?\.js/g, '.js');
  fs.writeFile("./dist/index.html", formatted, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
module.exports = Object.assign(common, {
  mode: 'development',
  devtool: 'inline-source-map'
})
