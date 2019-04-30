function cmessage(i){
	window.location.href="single.html?courseid="+i;
}
function tmessage(i){
	window.location.href="textbook.html?textbookid="+i;
}
function omessage(i){
	window.location.href="otherbook.html?otherbook="+i;
}


function initCmessage(){
	var cmessage = {
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/cmessage/findCmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(cmessage),
		success:function(data){
			for(var i=0;i<data.data.data.length;i++){
			var j = i+1;
			$("#myCmessage").append(
				"<tr onclick='cmessage("+data.data.data[i].courseid+")'>"
				+"	<td>"+j+"</td>"
				+"	<td>"+data.data.data[i].coursename+"</td>"
				+"	<td>"+data.data.data[i].username+"</td>"
				+"	<td>"+data.data.data[i].agree+"/"+data.data.data[i].disagree+"</td>"
				+"  </tr>"
			)	
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 

function initTmessage(){
	var tmessage = {
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/tmessage/findTmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(tmessage),
		success:function(data){
			for(var i=0;i<data.data.data.length;i++){
			var j = i+1;
			$("#myTmessage").append(
				"<tr onclick='tmessage("+data.data.data[i].textbookid+")'>"
				+"	<td>"+j+"</td>"
				+"	<td>"+data.data.data[i].textbookname+"</td>"
				+"	<td>"+data.data.data[i].username+"</td>"
				+"	<td>"+data.data.data[i].agree+"/"+data.data.data[i].disagree+"</td>"
				+"  </tr>"
			)	
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 

function initOmessage(){
	var cmessage = {
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/omessage/findOmessage",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(cmessage),
		success:function(data){
			for(var i=0;i<data.data.data.length;i++){
			var j = i+1;
			$("#myOmessage").append(
				"<tr onclick='omessage("+data.data.data[i].otherbookid+")'>"
				+"	<td>"+j+"</td>"
				+"	<td>"+data.data.data[i].otherbookname+"</td>"
				+"	<td>"+data.data.data[i].username+"</td>"
				+"	<td>"+data.data.data[i].agree+"/"+data.data.data[i].disagree+"</td>"
				+"  </tr>"
			)	
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 