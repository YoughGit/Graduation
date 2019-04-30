/**
 * 
 */
var fage = 0;
var agree = 0;
var disagree = 0;

function initOtherbook(){
	var url = location.search;
	url = url.substr(13);
	url = url.replace("#", "");
	d=url;
	var otherbook = {otherbookid:d,};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/otherbook/findOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(otherbook),
		success:function(data){
			document.getElementById("textbookname").innerHTML= data.data.data[0].otherbookname;
			document.getElementById("textbookimg").src= "img/otherbook/"+data.data.data[0].address+".png";
			document.getElementById("textbookContext").innerHTML=data.data.data[0].context;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 


function initTmessage(i){
	var url = location.search;
	url = url.substr(13);
	url = url.replace("#", "");
	d=url;
	var textbook = {
		otherbookid:d,
		order:i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/findOmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(textbook),
		success:function(data){
			$("#cmessagelist").html("");
			var c =$("#username").text();
				if(c==""){
					for(var i=0;i<data.data.data.length;i++){
					$("#cmessagelist").append(
						'<li>'
						+'<div class="ctitle">'
						+'<span><img src="images/b3.jpg"/></span>'
						+'<span class="name">'+data.data.data[i].username+'</span>'
						+'<span class="time" style="color:black;cursor:default">1111-11-11</span>'
						+'<span class="view" style="color:black;cursor:default">踩</span>'
						+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
						+'<span class="view" style="color:black;cursor:default">赞</span>'
						+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
						+'</div>'
						+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].omessagecontext+'</div>'
						+'</li>'
					)
					}
				}
			else{
				for(var i=0;i<data.data.data.length;i++){
					findMark(data.data.data[i].omessageid);
					if(fage == 1){
						if(agree == 1){
								$("#cmessagelist").append(
								'<li>'
								+'<div class="ctitle">'
								+'<span><img src="images/b3.jpg"/></span>'
								+'<span class="name">'+data.data.data[i].username+'</span>'
								+'<span class="time">1111-11-11</span>'
								+'<span class="view" style="color:black;cursor:default">踩</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
								+'<span class="view" style="color:red" onclick="downAgree('+data.data.data[i].omessageid+')">赞</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
								+'</div>'
								+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].omessagecontext+'</div>'
								+'</li>'
							)
						}
						if(disagree == 1){
								$("#cmessagelist").append(
								'<li>'
								+'<div class="ctitle">'
								+'<span><img src="images/b3.jpg"/></span>'
								+'<span class="name">'+data.data.data[i].username+'</span>'
								+'<span class="time">1111-11-11</span>'
								+'<span class="view" style="color:red" onclick="downDisagree('+data.data.data[i].omessageid+')">踩</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
								+'<span class="view" style="color:black;cursor:default">赞</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
								+'</div>'
								+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].omessagecontext+'</div>'
								+'</li>'
							)
						}
						agree = disagree = 0;
						
					}
					else{
						$("#cmessagelist").append(
							'<li>'
							+'<div class="ctitle">'
							+'<span><img src="images/b3.jpg"/></span>'
							+'<span class="name">'+data.data.data[i].username+'</span>'
							+'<span class="time">1111-11-11</span>'
							+'<span class="view" onclick="upDisagree('+data.data.data[i].omessageid+')">踩</span>'
							+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
							+'<span class="view" onclick="upAgree('+data.data.data[i].omessageid+')">赞</span>'
							+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
							+'</div>'
							+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].omessagecontext+'</div>'
							+'</li>'
						)
					}
					fage = 0;
				}
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
}


function initMyTmessage(){
	if($("#islogin").val()=="0"){
		$("#myMessage").html("<li><br>请登陆后查看评论</li>");
	}
	if($("#islogin").val()=="1"){
		var url = location.search;
		url = url.substr(13);
		url = url.replace("#", "");
		d=url;
		
	var mytmessage = {
		otherbookid:d,
		username:$("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/findOmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mytmessage),
		success:function(data){
			if(data.message=="success"){
			$("#myMessage").html(
				'<li>'
				+'<div class="ctitle">'
				+'<span><img src="img/user/'+data.data.data[0].address+'.png" /></span>'
				+'<span class="name">'+data.data.data[0].username+'</span>'
				+'<span class="time">1111-11-11</span>'
				+'<span class="view" onclick=deleteMyCmessage()>删除</span>'	
				+'<span class="view" onclick=open_updateLayout()>编辑</span>'	
				+'<span class="view">踩</span>'
				+'<span class="view">'+data.data.data[0].disagree+'</span>'
				+'<span class="view">赞</span>'
				+'<span class="view">'+data.data.data[0].agree+'</span>'
				+'</div>'
				+'<div class="ccontent">'+data.data.data[0].omessagecontext+'</div>'
				+'</li>'
			);
			}
			else
			$("#myMessage").html(
				"<li style='cursor: pointer;' onclick='open_mytmessage()'><br>请输入你的留言</li>"
			);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
	}
}

function open_mytmessage(){
	layer.open({
			      type: 1,
			      area: ['300px', '300px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>对本课程的留言</h4>'
					      +'<div>'
					      +'<textarea id="tmessagecontext" class="span8" rows="5" ></textarea>'
					      +'<span class="registerBtn" onclick="insertMytmessage()">留言</span></div></div>'
			   });
}

function deleteMyCmessage(){
	var url = location.search;
		url = url.substr(13);
		url = url.replace("#", "");
		d=url;
	var mycmessage = {
		otherbookid:d,
		username:$("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/deleteMyOmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mycmessage),
		success:function(data){
			if(data.message=="success"){
				alert("删除成功");
				location.reload();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function insertMytmessage(){
	var url = location.search;
		url = url.substr(13);
		url = url.replace("#", "");
		d=url;
		var s = $("#userimg")[0].src;
		s = s.slice(42,-4);
	var mytmessage = {
		textbookid:d,
		username:$("#username").text(),
		otherbookname:$("#textbookname").text(),
		tmessagecontext:$("#tmessagecontext").val(),
		address:s,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/insertMyOmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mytmessage),
		success:function(data){
			if(data.message=="success"){
				alert("留言成功");
				location.reload();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function open_updateLayout(){
	var v=$("#Mytmessagecontext").text();
	layer.open({
			      type: 1,
			      area: ['600px', '300px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>对本课程的留言</h4>'
					      +'<div>'
					      +'<textarea id="tmessagecontext" class="span8" rows=5 cols=2>'+v+'</textarea>'
					      +'<span class="registerBtn" onclick="updateMytmessage()">更改</span></div></div>'
			   });
}

function updateMytmessage(){
	var url = location.search;
		url = url.substr(13);
		url = url.replace("#", "");
		d=url;
	var mytmessage = {
		otherbookid:d,
		omessagecontext:$("#tmessagecontext").val(),
		username:$("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/updateMyOmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(myomessage),
		success:function(data){
			if(data.message=="success"){
				alert("留言成功");
				location.reload();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function findMark(i){
	var mark = {
		omessageid:i,
		username:$("#username").text(),
	};
	$.ajax({
		async:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/mark/findMark",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mark),
		success:function(data){
			if(data.message=="success"){
				if(data.data.data.agree!=0){
					agree = 1;
				}
				if(data.data.data.disagree!=0){
					disagree = 1;
				}
				fage = 1;
			}
			if(data.message=="fault"){
				fage = 0;
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
	
}

function insertMark(i,agree,disagree){
	var mark = {
		omessageid:i,
		username:$("#username").text(),
		agree:agree,
		disagree:disagree,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/mark/insertMark",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mark),
		success:function(data){
			if(data.message=="success"){
				initTmessage();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function upAgree(i){
	var tmessage = {
		omessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/upAgree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(tmessage),
		success:function(data){
			if(data.message=="success"){
				insertMark(i,1,0);
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function downAgree(i){
	var tmessage = {
		omessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/downAgree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(tmessage),
		success:function(data){
			if(data.message=="success"){
				deleteMark(i);
				initTmessage();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function upDisagree(i){
	var tmessage = {
		omessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/upDisagree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(tmessage),
		success:function(data){
			if(data.message=="success"){
				insertMark(i,0,1);
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function downDisagree(i){
	var tmessage = {
		omessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/downDisagree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(tmessage),
		success:function(data){
			if(data.message=="success"){
				deleteMark(i);
				initTmessage();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function deleteMark(i){
	var mark = {
		omessageid:i,
		username:$("#username").text(),
	};
	$.ajax({
		async:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/mark/deleteMark",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mark),
		success:function(data){
			if(data.message=="success"){
				initTmessage();
			}
			if(data.message=="fault"){
				
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
	
}


