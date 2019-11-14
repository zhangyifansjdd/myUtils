let express = require("express");
let app = express();

app.use(express.static("dist"));//关键是这一句，我的目录是html的目录

app.listen(8010, ()=> {
  console.log("服务启动成功。");
})