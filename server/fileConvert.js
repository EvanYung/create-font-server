var fs = require("fs");
var fontCarrier = require("font-carrier");
var exec = require("child_process").execFile;
var pngTosvg = function (fn) {
  console.log("fun() start");

  exec(".\\pngtosvg.exe", function (err, data) {
    console.log("-------------------png成功转成SVG！----------------------");
    fn();
  });
};

//获取字体
var getFont = fs.existsSync("./views/font/createFont.ttf")
  ? fontCarrier.transfer("./views/font/createFont.ttf")
  : fontCarrier.create();

function addFontToTTF(str, fontSvg, suc) {
  // &#xe600;
  var setStr = "&#x" + str + ";";
  console.log(
    "🚀 ~ file: fileConvert.js ~ line 20 ~ addFontToTTF ~ setStr",
    setStr
  );

  getFont.setSvg(setStr, fontSvg);

  getFont.output({
    path: "./views/font/createFont",
  });

  console.log("-------------------字体输出成功！----------------------");

  setTimeout(function () {
    suc();
  }, 1000);
}

module.exports = addFontToTTF;
