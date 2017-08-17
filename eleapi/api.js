var express = require('express');
var router = express.Router();
var https =require("https");
var spider = require("./spider");
var User = require('../modules/UserM');
var mongoose = require('mongoose');



var md5 = require('md5');

//主页，热搜
router.get("/indexnav",function(req,res){
	spider("/shopping/v3/hot_search_words?latitude=38.88889&longitude=121.53827",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

//列表页，美食
router.get("/listmeishi",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=209&restaurant_category_ids[]=211&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=218&restaurant_category_ids[]=219&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=263&restaurant_category_ids[]=264&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

//列表页，美食2
router.get("/listmeishi2",function(req,res){
	spider("/shopping/v2/restaurant/category?latitude=38.88889&longitude=121.53827",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

//首页，轮播
router.get("/indexswiper",function(req,res){
	spider("/shopping/v2/entries?latitude=38.88889&longitude=121.53827&templates[]=main_template",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

//首页，推荐
router.get("/indextuijian",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&offset=20&limit=20&extras[]=activities&terminal=h5",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

//列表页，饮品
router.get("/listdrink",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=240&restaurant_category_ids[]=241&restaurant_category_ids[]=242",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


//列表页，商超便利
router.get("/supermarket",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=254&restaurant_category_ids[]=255&restaurant_category_ids[]=256&restaurant_category_ids[]=257&restaurant_category_ids[]=258&restaurant_category_ids[]=271&restaurant_category_ids[]=272&restaurant_category_ids[]=273&restaurant_category_ids[]=274",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


//列表页，水果蔬菜
router.get("/listfruit",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=245&restaurant_category_ids[]=246&restaurant_category_ids[]=247",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


//列表页，新店
router.get("/listnew",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=209&restaurant_category_ids[]=211&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=218&restaurant_category_ids[]=219&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=240&restaurant_category_ids[]=241&restaurant_category_ids[]=242&restaurant_category_ids[]=245&restaurant_category_ids[]=246&restaurant_category_ids[]=247&restaurant_category_ids[]=249&restaurant_category_ids[]=250&restaurant_category_ids[]=251&restaurant_category_ids[]=254&restaurant_category_ids[]=255&restaurant_category_ids[]=256&restaurant_category_ids[]=257&restaurant_category_ids[]=258&restaurant_category_ids[]=263&restaurant_category_ids[]=264&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=270&restaurant_category_ids[]=271&restaurant_category_ids[]=272&restaurant_category_ids[]=273&restaurant_category_ids[]=274",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


//列表页，准时达
router.get("/listtimes",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&keyword=&offset=0&limit=20&extras[]=activities",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


//列表页，午餐
router.get("/listlunch",function(req,res){
	spider("/shopping/restaurants?latitude=38.88889&longitude=121.53827&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=215&restaurant_category_ids[]=265",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})






















//详情页，中国妈妈菜
router.get('/detail1',function(req,res){
	var id = req.query.id;


	spider("/shopping/restaurant/" + id + "?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=38.88889&longitude=121.53827",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


router.get('/detail2',function(req,res){
	var id = req.query.id;
	console.log(id);
	spider(`/shopping/v2/menu?restaurant_id=${id}`,function(data){
		res.send(data);
	})
	// res.send('饿了么');
})

router.get('/detail3',function(req,res){
	var id = req.query.id;
	spider("/ugc/v2/restaurants/"+id+"/ratings?has_content=true&offset=0&limit=10",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})


router.get("/detail4",function(req,res){
	var id = req.query.id;
	spider("/ugc/v2/restaurants/"+id+"/ratings/tags",function(data){
		res.send(data);
	})
	// res.send('饿了么');
})








router.post('/login', function(req, res, next) {
	//接收数据
	console.log("2222");         
	let username = req.body.username;
	let password = md5(req.body.password);

	//生成model对象 
	var UserModel = mongoose.model('user',User);
	UserModel.findOne({username:username,password:password},function(err,userItem){
		if (err) {

			var result = {
				code:0,
				msg:"登录失败"
			}

			console.log(err);
			res.send(JSON.stringify(result));
			return;
		};

		if(userItem){
			var result = {
				code:1,
				msg:"登录成功"
			}
			
			res.cookie("username",username);
			res.cookie("sign",md5(username));

			res.send(JSON.stringify(result));
		}else{
			var result = {
				code:0,
				msg:"您的账号存在风险，未保护账户安全，请进行短信验证"
			}
			res.send(JSON.stringify(result));
		}
	})
});

module.exports = router;


