var express = require('express');
var router = express.Router();
var passport = require('passport')
var userController = require('../controllers/userControllers')
var request = require('request');
var querystring = require('querystring');

/* GET users listing. */

/*登录*/
router.post('/login', function(req, res, next) {
        userController.login(req, res)
    })
    /*注册*/
router.post('/register', function(req, res, next) {
    userController.register(req, res)
});
/*认证*/

// 更改头像
router.post('/updateHeadPic', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.updateHeadPic(req, res)
});
//修改密码
router.post('/updatePassword', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.updatePassword(req, res)
});
// 忘记密码
router.post('/forgetPassword', function(req, res, next) {
    userController.forgetPassword(req, res)
});

// 验证码
//调用聚合接口，发送验证码
//node request模块安装命令：npm install request
router.get('/vCode/:telephone', function(req, res, next) {
    // console.log(req.body)
    var tel = req.params.telephone
    var code = ''
    for (var i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 10);
    }
    //手机号和验证码存到session
    console.log(tel)
    // req.session.cookie.TelvCode = []
    console.log('保存到session的cookie里面')
    console.log(req.session)
    console.log(code)
    // req.session.cookie.TelvCode.push(code)
    // req.session.cookie.TelvCode.push({ telephone: tel, vCode: code })
    // console.log(req.session.cookie.TelvCode)
    // console.log(req.session)
    // console.log('保存到session里面的手机号' + req.session.cookie.TelvCode[0].telephone)
    // console.log('保存到session里面的手机号验证码' + req.session.cookie.TelvCode)

    console.log('后台发出去的验证码：' + code)
    var queryData = querystring.stringify({
        "mobile": tel, // 接受短信的用户手机号码
        "tpl_id": "186858", // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": "#code#=" + code, // 您设置的模板变量，根据实际情况修改
        "key": "4e356f36ab5d1792a85d53505c79e3b8", // 应用APPKEY(应用详细页查询)
    });


    var queryUrl = 'http://v.juhe.cn/sms/send?' + queryData;

    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印接口返回内容
            res.json({ code: 200,data:code, msg: '验证码发送成功' })
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            console.log(jsonObj.error_code)
        } else {
            console.log('请求异常');
        }
    })
    // res.json({ code: 200,data:code, msg: '验证码发送成功' })
});
// 获取当前用户认证状态
router.get('/userStatus', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.userStatus(req, res)
});
//身份证识别
// 正面
router.post('/idCardFront', passport.authenticate('jwt', { session: false }), function(req, res, next) {
        userController.idCardFront(req, res)
    })
    //反面
router.post('/idCardBack', passport.authenticate('jwt', { session: false }), function(req, res, next) {
        userController.idCardBack(req, res)
    })
    
// 修改信息、完善信息
router.post('/updateInfo', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.updateInfo(req, res)
});
// 用户其他信息
router.get('/userInfo', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.otherInfo(req, res)
});
// 送出的礼物搜索
router.post('/from_Presents', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.from_Presents(req, res)
});
// 送出的礼物
router.post('/from_Present', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.from_Present(req, res)
});
// 收到礼物搜索
router.get('/to_Presents', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.to_Presents(req, res)
});
// 收到礼物
router.get('/to_Present', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.to_Present(req, res)
});
//关注我的
router.get('/attentionMe', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.attentionMe(req, res)
});
//我关注的
router.get('/iAttention', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.iAttention(req, res)
});
//订单
router.get('/userOrder', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    userController.userOrder(req, res)
});

module.exports = router;