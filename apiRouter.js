const express = require("express");
const fs = require("fs");

const router = express.Router();
let resData = [];

fs.readFile("./data.json", (err, data) => {
  if (!err) {
    resData = JSON.parse(data).data;
  }
});

router.get("/get", (req, res) => {
  res.send({
    status: 0,
    msg: "请求机票数据成功",
    data: resData,
  });
});

module.exports = router;
