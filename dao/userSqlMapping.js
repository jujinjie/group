// dao/userSqlMapping.js
// CRUD SQL语句
var user={
	insert:'INSERT INTO users(userid,username,phonenum,addr) VALUES(0,?,?,?)',
	update:'update users set username=? ,phonenum=?,addr=? where userid=?',
	delete:'delete from users where userid=?',
	queryById:'select * from users where userid=?',
	queryAll:'select * from users'
};

module.exports=user;
