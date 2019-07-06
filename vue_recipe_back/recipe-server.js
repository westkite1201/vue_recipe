// 서버 => express (express생성)
// express라이브러리 로드 
var express=require('express')
// 서버 생성 
var app=express();
// 서버구동 
app.listen(3355,function(){
	console.log("서버 구동 완료","http://localhost:3355")
})
/*
    app.get("/",function(req,res){
	res.send("Hello Node...")
    })
*/
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.get("/",(req,res)=>{
	res.send("Hello Node...")
})

// 라이브러리 로딩 
var Client=require('mongodb').MongoClient;
/*
	 MongoClient : Connection
	 db   => database (mydb)
	 collection => table (recipe,chef,chef_detail,recipe_detail,today )
*/
app.get('/recipe',(req,res)=>{
	var url="mongodb://211.238.142.181:27017"
	var page=req.query.page;
	var rowSize=20;
	var skip=(page*rowSize)-rowSize;
	/*
		1page => 5
		   0~4
		2page => 5
		   5~9
	*/
	//  getParameter("page")  => /recipe?page=2
	// 접속
	Client.connect(url,(err,client)=>{
		var db=client.db('mydb');
		//  데이터 읽기
		// SELECT * FROM recipe
		db.collection('recipe').find({}).skip(skip).limit(rowSize).toArray(function(err,docs){
			res.json(docs);
			client.close();
		})
	})
})
app.get('/total',(req,res)=>{
	var url="mongodb://211.238.142.181:27017"
	
	// 접속
	Client.connect(url,(err,client)=>{
		var db=client.db('mydb');
		// SELECT (COUNT(*)) FROM recipe
		db.collection('recipe').find({}).count(function(err,count){
			res.json({total:Math.ceil(count/20.0)})
			client.close();
		})
	})
})
// recipe_detail => 데이터 전송 
/*
   NodeJs => 요청 주소 => 사용자요청정보 (request), 전송하는 객체(response)
*/
app.get('/recipe_detail',function(req,res){
   // 데이터 받기 (6915297)
   console.log("no:"+req.query.no);// getParameter("no")
   // /recipe_detail?no=6915297
   // 몽고 디비연결 
   var url="mongodb://211.238.142.181:27017";
   // 몽고디비 연결 
   /*
      db.getCollection('recipe_detail').find({no:'6915298'})
   */
   Client.connect(url,(err,client)=>{
	  // database명
	  var db=client.db('mydb'); 
	  // table연결 
	  db.collection('recipe_detail').find({no:String(req.query.no)}).
	  toArray(function(err,docs){
		   console.log(docs);
		   res.json(docs);// 일반 문자열 => res.send('Hello')
		   client.close();// disConnection()
	  })
   })

});
var xml2js=require('xml2js');
var request=require('request');//<script src="">,import request
// news?fd=영화&fd1=축구 
/*
      axios.get('/news',{
		  params:{
			  fd:'영화',
			  fd1:'축구'
		  }
	  })
*/
app.get('/news',function(req,res){
   var query=encodeURIComponent(req.query.fd); //인코딩 
   // encode => never서버 decode(한글)
   var url="http://newssearch.naver.com/search.naver?where=rss&query="+query;
   var parser=new xml2js.Parser();
   request.get({url:url},function(err,request,xml){
	   // console.log(xml);
	   parser.parseString(xml , function(err,pJson){
		//console.log(pJson)
		res.send(pJson.rss.channel.item)
	   });
   })
});










