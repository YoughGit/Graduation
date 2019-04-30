/**
 * 
 */

var fage = 0;
var agree = 0;
var disagree = 0;

function initCourse(){
	var url = location.search;
	url = url.substr(10);
	url = url.replace("#", "");
	d=url;
	var course = {courseid:d,};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/findCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
		success:function(data){
			for(var i=0;i<data.data.data.length;i++){
			document.getElementById("courseimg").src= "img/course/"+data.data.data[i].address+".png";
			document.getElementById("courseContext").innerHTML=data.data.data[i].context;
			document.getElementById("coursename").innerHTML=data.data.data[i].coursename;
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 

function initTextbook(){
	var url = location.search;
	url = url.substr(10);
	url = url.replace("#", "");
	d=url;
	var textbook = {
		courseid:d,
		pass:1,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/textbook/findTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(textbook),
		success:function(data){
			$("#textbook").append("<span>教材：</span>");
			for(var i=0;i<data.data.data.length;i=i+3){
				if(i+2<=data.data.data.length&&i+3>data.data.data.length )
				$("#textbook").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='textbook.html?textbookid="+data.data.data[i].textbookid+"'><img   src='img/textbook/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].textbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='textbook.html?textbookid="+data.data.data[i+1].textbookid+"'><img  src='img/textbook/"+data.data.data[i+1].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i+1].textbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
				)
			else if(i+3<=data.data.data.length)
			$("#textbook").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='textbook.html?textbookid="+data.data.data[i].textbookid+"'><img   src='img/textbook/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].textbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='textbook.html?textbookid="+data.data.data[i+1].textbookid+"'><img  src='img/textbook/"+data.data.data[i+1].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i+1].textbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='textbook.html?textbookid="+data.data.data[i+2].textbookid+"'><img   src='img/textbook/"+data.data.data[i+2].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i+2].textbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
					)
			else
				$("#textbook").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='textbook.html?textbookid="+data.data.data[i].textbookid+"'><img  src='img/textbook/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].textbookname+"</a></h4></div>"
				        +"<span  class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        
				        +"<div class=clear></div></div>"
					)
			}
		
		},
	})
}
function initOtherbook(){
	var url = location.search;
	url = url.substr(10);
	url = url.replace("#", "");
	d=url;
	var otherbook = {
		courseid:d,
		pass:1,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/otherbook/findOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(otherbook),
		success:function(data){
			$("#otherbook").append("<span>推荐书籍：</span>");
			for(var i=0;i<data.data.data.length;i=i+3){
			if(i+2<=data.data.data.length&&i+3>data.data.data.length)
				$("#otherbook").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='otherbook.html?otherbookid="+data.data.data[i].otherbookid+"'><img   src='img/otherbook/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].otherbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='otherbook.html?otherbookid="+data.data.data[i].otherbookid+"'><img  src='img/otherbook/"+data.data.data[i+1].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].otherbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
				)
			else if(i+3<=data.data.data.length)
			$("#otherbook").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='otherbook.html?otherbookid="+data.data.data[i].otherbookid+"'><img   src='img/otherbook/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].otherbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='otherbook.html?otherbookid="+data.data.data[i].otherbookid+"'><img  src='img/otherbook/"+data.data.data[i+1].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].otherbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='otherbook.html?otherbookid="+data.data.data[i].otherbookid+"'><img   src='img/otherbook/"+data.data.data[i+2].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].otherbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
					)
			else
				$("#otherbook").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='otherbook.html?otherbookid="+data.data.data[i].otherbookid+"'><img   src='img/otherbook/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].otherbookname+"</a></h4></div>"
				        +"<span class=likes><a href=#><img src=images/heart.png> 16</a></span>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
					)
		}
		},
	})
}

function initCmessage(i){
	var url = location.search;
	url = url.substr(10);
	url = url.replace("#", "");
	d=url;
	var cmessage = {
		courseid:d,
		order:i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/findCmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(cmessage),
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
						+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].cmessagecontext+'</div>'
						+'</li>'
					)
					}
				}
			else{
				for(var i=0;i<data.data.data.length;i++){
					findMark(data.data.data[i].cmessageid);
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
								+'<span class="view" style="color:red" onclick="downAgree('+data.data.data[i].cmessageid+')">赞</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
								+'</div>'
								+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].cmessagecontext+'</div>'
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
								+'<span class="view" style="color:red" onclick="downDisagree('+data.data.data[i].cmessageid+')">踩</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
								+'<span class="view" style="color:black;cursor:default">赞</span>'
								+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
								+'</div>'
								+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].cmessagecontext+'</div>'
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
							+'<span class="view" onclick="upDisagree('+data.data.data[i].cmessageid+')">踩</span>'
							+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].disagree+'</span>'
							+'<span class="view" onclick="upAgree('+data.data.data[i].cmessageid+')">赞</span>'
							+'<span class="view" style="color:black;cursor:default">'+data.data.data[i].agree+'</span>'
							+'</div>'
							+'<div class="ccontent" style="color:black;cursor:default">'+data.data.data[i].cmessagecontext+'</div>'
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



function initMyCmessage(){
	if($("#islogin").val()=="0"){
		$("#myMessage").html("<li><br>请登陆后查看评论</li>");
	}
	if($("#islogin").val()=="1"){
		var url = location.search;
		url = url.substr(10);
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
		url:"http://localhost:8008/graduation/cmessage/findCmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mycmessage),
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
				+'<div class="ccontent">'+data.data.data[0].cmessagecontext+'</div>'
				+'</li>'
			);
			}
			else
			$("#myMessage").html(
				"<li style='cursor: pointer;' onclick='open_mycmessage()'><br>请输入你的留言</li>"
			);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
	}
}

function open_mycmessage(){
	layer.open({
			      type: 1,
			      area: ['600px', '300px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>对本课程的留言</h4>'
					      +'<div>'
					      +'<textarea id="cmessagecontext" class="span8" rows="5" ></textarea>'
					      +'<span class="registerBtn" onclick="insertMycmessage()">留言</span></div></div>'
			   });
}

function deleteMyCmessage(){
	var url = location.search;
		url = url.substr(10);
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
		url:"http://localhost:8008/graduation/cmessage/deleteMyCmessage",
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

function insertMycmessage(){
	var url = location.search;
		url = url.substr(10);
		url = url.replace("#", "");
		d=url;
		var s = $("#userimg")[0].src;
		s = s.slice(42,-4);
	var mycmessage = {
		courseid:d,
		username:$("#username").text(),
		coursename:$("#coursename").text(),
		cmessagecontext:$("#cmessagecontext").val(),
		address:s,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/insertMyCmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mycmessage),
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
	var v=$("#Mycmessagecontext").text();
	layer.open({
			      type: 1,
			      area: ['600px', '300px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>对本课程的留言</h4>'
					      +'<div>'
					      +'<textarea id="cmessagecontext" class="span8" rows=5 cols=2>'+v+'</textarea>'
					      +'<span class="registerBtn" onclick="updateMycmessage()">更改</span></div></div>'
			   });
}

function updateMycmessage(){
	var url = location.search;
		url = url.substr(10);
		url = url.replace("#", "");
		d=url;
	var mycmessage = {
		courseid:d,
		cmessagecontext:$("#cmessagecontext").val(),
		username:$("#username").text(),
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/updateMyCmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(mycmessage),
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
		cmessageid:i,
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
		cmessageid:i,
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
				initCmessage();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function upAgree(i){
	var cmessage = {
		cmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/upAgree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(cmessage),
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
	var cmessage = {
		cmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/downAgree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(cmessage),
		success:function(data){
			if(data.message=="success"){
				deleteMark(i);
				initCmessage();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function upDisagree(i){
	var cmessage = {
		cmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/upDisagree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(cmessage),
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
	var cmessage = {
		cmessageid:i,
	};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/downDisagree",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(cmessage),
		success:function(data){
			if(data.message=="success"){
				deleteMark(i);
				initCmessage();
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
}

function deleteMark(i){
	var mark = {
		cmessageid:i,
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
				initCmessage();
			}
			if(data.message=="fault"){
				
			}
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
          
        }
	})
	
}
