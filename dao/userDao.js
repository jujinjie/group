// dao/userDao.js
//实现与MySql交互
var mysql=require("mysql");
var $conf= require("../conf/conf");
var $util= require("../util/util");
var $sql=require("./userSqlMapping");

//使用连接池，提升性能
var pool=mysql.creatPool($util.extend({},$conf.mysql));

//向前台返回JSON方法的简单封装
var jsonWrite=function(res,ret){
	if(typeof ret==='undefined'){
		res.json({
			code:'1',
			msg:'操作失败'
		});
	}else{
		res.json(ret);
	}
};

module.exports={
	add:function(req,res,next){
	pool.getConnection(function(err,connectuon){
		var param =req.query||req.params;
		connection.query($sql.insert,[param.name,parma.phonenum,parma.addr],function(err,result){
	if(result){
		result={
			code:200,
			msg:"增加成功"
		};
	}
	jsonWrite(res,result);
	connection.release();
		});
	});
	}
};

