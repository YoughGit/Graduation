/**
 * 
 */
var fage = 0;
var agree = 0;
var disagree = 0;

function initTextbook(){
	var url = location.search;
	url = url.substr(12);
	url = url.replace("#", "");
	d=url;
	var textbook = {textbookid:d,};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/textbook/findTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(textbook),
		success:function(data){
			document.getElementById("textbookname").innerHTML= data.data.data[0].textbookname;
			document.getElementById("textbookimg").src= "img/textbook/"+data.data.data[0].address+".png";
			document.getElementById("textbookContext").innerHTML=data.data.data[0].context;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 


function initTmessage(i){
	var url = location.search;
	url = url.substr(12);
	url = url.replace("#", "");
	d=url;
	var textbook = {
		textbookid:d,
		order:i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/findTmessage",
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
						+'<span><img src="img/user/'+data.data.data[i].address+'.png" /></span>'
						+'<span class="name">'+data.data.data[i].username+'</span>'
						+'<span class="time" style="color:black;cursor:default">1111-11-11</span>'
						+'<span class="view" style="color:black;cursor:default">踩</span>'
						+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
						+'<span class="view" style="color:black;cursor:default">赞</span>'
						+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
						+'</div>'
						+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].tmessagecontext+'</div>'
						+'</li>'
					)
					}
				}
			else{
				for(var i=0;i<data.data.data.length;i++){
					findMark(data.data.data[i].tmessageid);
					if(fage == 1){
						if(agree == 1){
								$("#cmessagelist").append(
								'<li>'
								+'<div class="ctitle">'
								+'<span><img src="img/user/'+data.data.data[i].address+'.png" /></span>'
								+'<span class="name">'+data.data.data[i].username+'</span>'
								+'<span class="time">1111-11-11</span>'
								+'<span class="view" style="color:black;cursor:default">踩</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
								+'<span class="view" style="color:red" onclick="downAgree('+data.data.data[i].tmessageid+')">赞</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
								+'</div>'
								+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].tmessagecontext+'</div>'
								+'</li>'
							)
						}
						if(disagree == 1){
								$("#cmessagelist").append(
								'<li>'
								+'<div class="ctitle">'
								+'<span><img src="img/user/'+data.data.data[i].address+'.png" /></span>'
								+'<span class="name">'+data.data.data[i].username+'</span>'
								+'<span class="time">1111-11-11</span>'
								+'<span class="view" style="color:red" onclick="downDisagree('+data.data.data[i].tmessageid+')">踩</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
								+'<span class="view" style="color:black;cursor:default">赞</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
								+'</div>'
								+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].tmessagecontext+'</div>'
								+'</li>'
							)
						}
						agree = disagree = 0;
						
					}
					else{
						$("#cmessagelist").append(
							'<li>'
							+'<div class="ctitle">'
							+'<span><img src="img/user/'+data.data.data[i].address+'.png" /></span>'
							+'<span class="name">'+data.data.data[i].username+'</span>'
							+'<span class="time">1111-11-11</span>'
							+'<span class="view" onclick="upDisagree('+data.data.data[i].tmessageid+')">踩</span>'
							+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
							+'<span class="view" onclick="upAgree('+data.data.data[i].tmessageid+')">赞</span>'
							+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
							+'</div>'
							+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].tmessagecontext+'</div>'
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
		url = url.substr(12);
		url = url.replace("#", "");
		d=url;
		
	var mytmessage = {
		textbookid:d,
		username:$("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/findTmessage",
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
				+'<div class="ccontent">'+data.data.data[0].tmessagecontext+'</div>'
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
		url = url.substr(12);
		url = url.replace("#", "");
		d=url;
	var mycmessage = {
		courseid:d,
		username:$("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/deleteMyTmessage",
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
		url = url.substr(12);
		url = url.replace("#", "");
		d=url;
		var s = $("#userimg")[0].src;
		s = s.slice(42,-4);
	var mytmessage = {
		textbookid:d,
		username:$("#username").text(),
		textbookname:$("#textbookname").text(),
		tmessagecontext:$("#tmessagecontext").val(),
		address:s,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/insertMyTmessage",
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
		url = url.substr(12);
		url = url.replace("#", "");
		d=url;
	var mytmessage = {
		textbookid:d,
		tmessagecontext:$("#tmessagecontext").val(),
		username:$("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/updateMyTmessage",
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

function findMark(i){
	var mark = {
		tmessageid:i,
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
		tmessageid:i,
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
		tmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/upAgree",
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
		tmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/downAgree",
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
		tmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/upDisagree",
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
		tmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/downDisagree",
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
		tmessageid:i,
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


