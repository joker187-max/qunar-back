// 导入express实例
const express = require("express");
const cros = require("cors");
const router = require("./apiRouter");
// 创建服务器实例
const app = express();

// 解决资源访问跨域问题
app.use(cros());
app.use("/api", router);

app.listen(8080, () => {
  console.log("express server running at http://127.0.0.1");
});
