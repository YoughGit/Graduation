function loginUser(){
	
	if($("#login_username").val()=="root"){
		rootLogin();
	}
	
	else{
		var user = {
				username: $("#login_username").val(),
				password: $("#login_password").val(),
		}
		$.ajax({
			xhrFields:{withCredentials:true},
			cache:false,
			type:'post',
			url:"http://localhost:8008/graduation/user/loginUser",
			contentType:'application/json;charset=utf-8', 
			traditional:true,
			dataType:"JSON",
			data:JSON.stringify(user),
			success:function(data){
				if(data.message=="1")
				location.reload();
				if(data.message=="0")
				alert("用户名或密码错误");
			},	
			error:function(data, XMLHttpRequest, textStatus, errorThrown){  
				}  
		}) 
	}
}

function register(){
	var user = {
			username: $("#register_username").val(),
			password: $("#register_password").val(),
	}
	$.ajax({
		xhrFields:{withCredentials:true},
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/insertUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:JSON.stringify(user),
		success:function(data){
			alert("注册成功");
			location.reload();
		},	
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}

function initSessionUser(){
	$.ajax({
		async:false,
		xhrFields:{withCredentials:true},
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/getSessionUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:{},
		success:function(data){
			if(data.message=="success"){
				$("#islogin").val("1");
				if(data.data.data=="root"){
					$("#session_username").html(
					"<a id='username' href='root.html'>"+data.data.data+"</a>"
					+"<span id='relogin' onclick='relogin()' style='cursor: pointer;'>注销</span>"
					);
				}
				else{
					$("#session_username").html(
						"<span><img id='userimg' src='img/user/"+data.data.data.address+".png' width=50px;height=50px; /></span>"
						+"&nbsp;&nbsp;<a id='username' href='user.html'>"+data.data.data.username+"</a>&nbsp;"
						+"<span id='relogin' onclick='relogin()' style='cursor: pointer;'>注销</span>"
					);
					
				}
			}
		},
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}

function relogin(){
	$.ajax({
		xhrFields:{withCredentials:true},
		cache:false,
		type:'post',
		url:"http://localhost:8008/graduation/user/repealSession",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		dataType:"JSON",
		data:{},
		success:function(data){
			if(data.message=="success")
			location.reload();
		},
		error:function(data, XMLHttpRequest, textStatus, errorThrown){  
			}  
	}) 
}

function rootLogin(){
	var root = {
				name: $("#login_username").val(),
				password: $("#login_password").val(),
		}
		$.ajax({
			xhrFields:{withCredentials:true},
			cache:false,
			type:'post',
			url:"http://localhost:8008/graduation/root/loginRoot",
			contentType:'application/json;charset=utf-8', 
			traditional:true,
			dataType:"JSON",
			data:JSON.stringify(root),
			success:function(data){
				if(data.message=="success")
				location.reload();
			},	
			error:function(data, XMLHttpRequest, textStatus, errorThrown){  
				}  
		}) 
}
