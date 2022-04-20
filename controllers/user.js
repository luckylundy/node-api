var dbModels = require("../models/");
var userController = {
  //メソッド1
  //パス: /user/
  //レスポンス: 全てのユーザーを表示する
  showAllUsers: (req, res, next) => {
    //sequelizeのUserモデルを使ってデータを取得する
    dbModels.User.findAll().then((users) => {
      if (!users) {
        console.log("ユーザーデータを取得できませんでした");
        res.send("Error");
      } else {
        res.render("allUsers.ejs", { users: users });
      }
    });
  },
  //メソッド 2
  //パス: /user/:userId
  //レスポンス: IDで指定されたユーザーを表示する
  showUserById: (req, res, next) => {
    const userId = req.params.userId;
    if (!userId) {
      console.log("ユーザーIDを取得できませんでした");
      res.send("Error");
    } else {
      //sequelizeのUserモデルを使って特定のidのデータを取得する
      dbModels.User.findByPk(userId).then((user) => {
        if (!user) {
          console.log("ユーザーデータを取得できませんでした");
          res.send("Error");
        } else {
          res.render("oneUser.ejs", { user: user });
        }
      });
    }
  },
  //メソッド 3
  //パス: /user/json
  //レスポンス: DBのデータをJSON形式で返す
  sendJson: (req, res, next) => {
    // Sequelizeのモデルを使ってデータを取得する
    dbModels.User.findAll().then((users) => {
      console.log(users);
      if (!users) {
        console.log("ユーザーデータを取得できませんでした");
        res.send("Error");
      } else {
        res.json(users);
      }
    });
  },
};

module.exports = userController;
