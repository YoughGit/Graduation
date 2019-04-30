function initStatus(){
	
	var status = {
		username2: $("#username").text(),
		status:0,
	}
	
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/status/findStatus",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(status),
        success: function (data) {
        	if(data.message=="success"){
        		for(var i=0;i<data.data.data.length;i++){
	        		$("#status").append(
	        			'<tr onclick=openStatus('+data.data.data[i].username1+') class="unread starred">'
	                    +'<td class="cell-check"></td>'
	                    +'<td class="cell-icon">'
	                    +'</td>'
	                    +'<td class="cell-author hidden-phone hidden-tablet">'
	                    +data.data.data[i].username1
	                    +'</td>'
	                    +'<td class="cell-title">'
	                    +'</td>'
	                    +'<td class="cell-icon hidden-phone hidden-tablet">'
	                    +'<i class="icon-paper-clip-no"></i>'
	                    +'</td>'
	                    +'<td class="cell-time align-right">'
	                    +'</td>'
	                    +'</tr>'
	        		)
        		}
        		
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function openStatus(u){
	var user = {
		username: u,
	}	
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/user/findUser",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(user),
        success: function (data) {
        	layer.open({
			      type: 1,
			      area: ['550px', '500px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'&nbsp;&nbsp;<h4>好友申请</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/photo_icon.png" width="90" height="90" >'
						  +'</div>'
					      +'<div class="category">'
					      +'<span>好友用户名：</span>'
					      +'<span>'+data.data.data[0].username+'</span>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>好友昵称：</span>'
					      +'<span>'+data.data.data[0].name+'</span>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>个性签名：</span>'
					      +'<span>'+data.data.data[0].presentation+'</span>'
					      +'</div>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=agree('+data.data.data[0].username+')>同意</span>'
						  +'<span class="registerBtn" onclick=disagree()>不同意</span>'  
        	});
         },
        error: function(data) {
         }
    });
}

function agree(u){
	
	var friend = {
		username: $("#username").text(),
		friendname:u,
	}
	
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/friend/insertFriend",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(friend),
        success: function (data) {
        	if(data.message=="success"){
        		updateStatus(u);
        		
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function updateStatus(u){
	
	var status = {
		username2: $("#username").text(),
		username1:u,
		status:1,
	}
	
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/status/updateStatus",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(status),
        success: function (data) {
        	if(data.message=="success"){
        		alert("添加好友成功");
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}
