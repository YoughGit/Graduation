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
			$("#friendlist").append(
				'<tr>'
				+'<td>1</td>'
				+'<td><img src="img/user/'+data.data.data[i].address+'.png" width="50px" height="50px"></td>'
				+'<td>'+data.data.data[i].friendname+'</td>'
				+'<td>1</td>'
				+'</tr>'
			)	
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 
