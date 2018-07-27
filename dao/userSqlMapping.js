// dao/userSqlMapping.js
// CRUD SQL语句
var user={
	insert:'INSERT INTO user(userid,username,phonenum,addr) VALUES(0,?,?,?)',
	update:'update user set username=? ,phonenum=?,addr=? where userid=?',
	delete:'delete from user where userid=?',
	queryById:'select * from user where userid=?',
	queryAll:'select * from user'
};

module.exports=user;
