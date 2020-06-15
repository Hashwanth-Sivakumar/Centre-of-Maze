var express=require('express');
var app=express();
var port=process.env.PORT || 8080
app.use(express.static(_dirname));
app.get("/",function(req,res)
{
	res.render("my_website");
})
app.listen(port,function()
{
	console.log("app running");
})