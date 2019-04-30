function initSpace(i){
	var space = {username:i,};
	$.ajax({
		asasync:false,
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/space/findSpace",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(space),
		success:function(data){
			for(var i=0;i<data.data.data.length;i++){
				$("#spaceList").append(
				'<div class="media stream">'
				+'<div class="media-body">'
				+'<div class="stream-headline">'
				+'<h5 class="stream-author">'
				+data.data.data[i].username
				+'</h5>'
				+'<div class="stream-text">'
				+data.data.data[i].context
				+'</div></div></div></div>'
				);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 

function initUserSpace(){
	var s = $("#userimg")[0].src;
	$("#userSpaceImg").html("<img src="+s+"></img>");
}

function initFriendlist(){
	var friend = {
		username: $("#username").text(),		
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/friend/findFriend",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(friend),
		success:function(data){
			for(var i=0;i<data.data.data.length;i++){
				initSpace(data.data.data[i].friendname);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 

function insertSpace(){
	var space = {
		username: $("#username").text(),
		context:$("#context").val()
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/space/insertContext",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(space),
		success:function(data){
			if(data.message == "success"){
				alert("发表成功");
				location.reload();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
}