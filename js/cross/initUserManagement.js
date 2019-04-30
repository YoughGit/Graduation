function findUser(){
	var userCustom = {
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/findUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(userCustom),
		success:function(data){
			$("#userList").html();
			
			for (var i=0;i<data.data.data.length;i=i+2)
			{	
				if(i+1<data.data.data.length){
				$("#userList").append(
					'<div class="row-fluid">'
					+'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i].address+'.png" ></a>'
                    +'<div class="media-body"><h3 id="username2" class="media-title">'
                    + data.data.data[i].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i+1].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i+1].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i+1].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i+1].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'</div><br/>'
				)
			}
				if(i+1>=data.data.data.length)
				$("#userList").append(
					'<div class="row-fluid">'
					+'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'</div><br/>'
				)
				
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
           
        }
	})
}

function findUserByUsername(){
	if($("#find_Username").val()!=""){
		var userCustom = {
			username:$("#find_Username").val(),
		}
	}
	if($("#find_Username").val()==""){
		var userCustom = {
			
		}
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/findUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(userCustom),
		success:function(data){
			
			$("#userList").html("");
			
			for (var i=0;i<data.data.data.length;i=i+2)
			{	
				if(i+1<data.data.data.length){
				$("#userList").append(
					'<div class="row-fluid">'
					+'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i+1].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i+1].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i+1].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i+1].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'</div><br/>'
				)
			}
				if(i+1>=data.data.data.length)
				$("#userList").append(
					'<div class="row-fluid">'
					+'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i].username
                    +'</h3><p><small class="muted">'
                    +'Pakistan'
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'</div><br/>'
				)
				
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
           
        }
	})
}

function findUserBySex(i){
	var userCustom = {
			sex:i,
		}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/findUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(userCustom),
		success:function(data){
			
			$("#userList").html("");
			
			for (var i=0;i<data.data.data.length;i=i+2)
			{	
				if(i+1<data.data.data.length){
				$("#userList").append(
					'<div class="row-fluid">'
					+'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i+1].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i+1].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i+1].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i+1].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'</div><br/>'
				)
			}
				if(i+1>=data.data.data.length)
				$("#userList").append(
					'<div class="row-fluid">'
					+'<div class="span6"><div class="media user"><a class="media-avatar pull-left" href="#">'
                    +'<img src="img/user/'+data.data.data[i].address+'.png" ></a>'
                    +'<div class="media-body"><h3 class="media-title">'
                    + data.data.data[i].username
                    +'</h3><p><small class="muted">'
                    + data.data.data[i].name
                    +'</small></p><div class="media-option btn-group shaded-icon">'
                    +'<button class="btn btn-small"><i class="icon-plus" onclick="mark('+data.data.data[i].username+')"></i></button>'
                    +'<button class="btn btn-small">'
                    +'<i class="icon-share-alt"></i>'
                    +'</button></div></div></div></div>'
                    +'</div><br/>'
				)
				
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
           
        }
	})
}

function mark(u){
	
	var status = {
		username1: $("#username").text(),
		username2: u,
		status:0,
	}
	
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/status/insertStatus",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(status),
        success: function (data) {
        	if(data.message=="success"){
        		alert("等待对方确认");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

