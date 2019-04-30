function change(val){
	$("#select").html(val)
}

function initIsPassCourse(){
	var course = {
		pass : 1,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/findCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
		success:function(data){
			$("#ispass").html(
			'<tr class="heading">'
			+'<td class="cell-icon"></td>'
			+'<td class="cell-title">已审核</td>'
			+'<td class="cell-status hidden-phone hidden-tablet">Status</td>'
			+'<td class="cell-time align-right">Due Date</td>'
			+'</tr>'
			);
			for(var i=0;i<data.data.data.length;i++){
				$("#ispass").append(
				"<tr class=task onclick=open_PassCourse("+data.data.data[i].courseid+") ><td class='cell-icon'><i class='icon-checker'></i></td>"
				+"<td class='cell-title'><div>"+data.data.data[i].coursename+"</div></td>"
				+"<td class='cell-status hidden-phone hidden-tablet'><b class=due>Pass</b></td>"
				+"<td class='cell-time align-right'>Just Now</td></tr>"
				)
											
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
}
function initisNoPassCourse(){
	var course = {
		pass : 0,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/findCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
		success:function(data){
			$("#nopass").html(
			'<tr class="heading">'
			+'<td class="cell-icon"></td>'
			+'<td class="cell-title">未审核</td>'
			+'<td class="cell-status hidden-phone hidden-tablet">Status</td>'
			+'<td class="cell-time align-right">Due Date</td>'
			+'</tr>'
			);
			for(var i=0;i<data.data.data.length;i++){
				$("#nopass").append(
				"<tr class='task resolved' onclick='open_noPassCourse("+data.data.data[i].courseid+")'><td class='cell-icon'><i class='icon-checker'></i></td>"
				+"<td class='cell-title'><div>"+data.data.data[i].coursename+"</div></td>"
				+"<td class='cell-status hidden-phone hidden-tablet'><b class=due>NoPass</b></td>"
				+"<td class='cell-time align-right'>Just Now</td></tr>"
				)
											
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 
function initIsPassTextbook(){
	var textbook = {
		pass : 1,
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
			$("#ispass").html(
			'<tr class="heading">'
			+'<td class="cell-icon"></td>'
			+'<td class="cell-title">已审核</td>'
			+'<td class="cell-status hidden-phone hidden-tablet">Status</td>'
			+'<td class="cell-time align-right">Due Date</td>'
			+'</tr>'
			);
			for(var i=0;i<data.data.data.length;i++){
				$("#ispass").append(
				"<tr class=task onclick=open_PassTextbook("+data.data.data[i].textbookid+")><td class='cell-icon'><i class='icon-checker'></i></td>"
				+"<td class='cell-title'><div>"+data.data.data[i].textbookname+"</div></td>"
				+"<td class='cell-status hidden-phone hidden-tablet'><b class=due>Pass</b></td>"
				+"<td class='cell-time align-right'>Just Now</td></tr>"
				)
											
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
}
function initisNoPassTextbook(){
	var textbook = {
		pass : 0,
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
			$("#nopass").html(
			'<tr class="heading">'
			+'<td class="cell-icon"></td>'
			+'<td class="cell-title">未审核</td>'
			+'<td class="cell-status hidden-phone hidden-tablet">Status</td>'
			+'<td class="cell-time align-right">Due Date</td>'
			+'</tr>'
			);
			for(var i=0;i<data.data.data.length;i++){
				$("#nopass").append(
				"<tr class='task resolved' onclick='open_noPassTextbook("+data.data.data[i].textbookid+")'><td class='cell-icon'><i class='icon-checker'></i></td>"
				+"<td class='cell-title'><div>"+data.data.data[i].textbookname+"</div></td>"
				+"<td class='cell-status hidden-phone hidden-tablet'><b class=due>NoPass</b></td>"
				+"<td class='cell-time align-right'>Just Now</td></tr>"
				)
											
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 
function initIsPassOtherbook(){
	var otherbook = {
		pass : 1,
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
			$("#ispass").html(
			'<tr class="heading">'
			+'<td class="cell-icon"></td>'
			+'<td class="cell-title">已审核</td>'
			+'<td class="cell-status hidden-phone hidden-tablet">Status</td>'
			+'<td class="cell-time align-right">Due Date</td>'
			+'</tr>'
			);
			for(var i=0;i<data.data.data.length;i++){
				$("#ispass").append(
				"<tr class=task onclick='open_PassOtherbook("+data.data.data[i].otherbookid+")'><td class='cell-icon'><i class='icon-checker'></i></td>"
				+"<td class='cell-title'><div>"+data.data.data[i].otherbookname+"</div></td>"
				+"<td class='cell-status hidden-phone hidden-tablet'><b class=due>Pass</b></td>"
				+"<td class='cell-time align-right'>Just Now</td></tr>"
				)
											
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
}
function initisNoPassOtherbook(){
	var otherbook = {
		pass : 0,
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
			$("#nopass").html(
			'<tr class="heading">'
			+'<td class="cell-icon"></td>'
			+'<td class="cell-title">未审核</td>'
			+'<td class="cell-status hidden-phone hidden-tablet">Status</td>'
			+'<td class="cell-time align-right">Due Date</td>'
			+'</tr>'
			);
			for(var i=0;i<data.data.data.length;i++){
				$("#nopass").append(
				"<tr class='task resolved' onclick='open_noPassOtherbook("+data.data.data[i].otherbookid+")'><td class='cell-icon'><i class='icon-checker'></i></td>"
				+"<td class='cell-title'><div>"+data.data.data[i].otherbookname+"</div></td>"
				+"<td class='cell-status hidden-phone hidden-tablet'><b class=due>NoPass</b></td>"
				+"<td class='cell-time align-right'>Just Now</td></tr>"
				)
											
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
        }
	})
} 

function insertNew_open(){
			layer.open({
			      type: 1,
			      area: ['800px', '800px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>你的推荐</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/photo_icon.png" width="90" height="90" onclick=$("#previewImg").click();>'
						  +'</div>'
						  +'<input type="file" name="fileimg" onchange="previewImage(this)" style="display: none;" id="previewImg">'
					      
					      +'<span>名称：</span>'
					      +'<input type="text" id="name" />'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>书本内容：</span>'
					      +'<textarea id="context" class="span8" rows="5"></textarea>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>分类：</span>'
					      +'<select id="category" onchange=initCategary(this.value)><option value=1 selected="selected">课程</option><option value=2 >教材</option><option value=3>推荐书籍</option></select>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>所属类别：</span>'
					      +'<select id="department" onchange=initMselect(this.value);initCselect(this.value,null,level.value); ></select><select id="major" onchange="initCselect(department.value,this.value,level.value)" ></select><select id="level" onchange="initCselect(department.value,major.value,this.value)" ><option value=1>大一</option><option value=2>大二</option><option value=3>大三</option><option value=4>大四</option></select><select style="display: none;" id="course"></select>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>推荐理由：</span>'
					      +'<textarea id="reason" class="span8" rows="5"></textarea>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=ifCategory()>提交</span>'
			    });
			    initDselect();
			    initMselect(1);
			    initCselect(1,1);
		}

function initDselect(){
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/department/findDepartment",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:{},
        success: function (data) {
        	$("#department").html("");
        	for(var i=0;i<data.data.data.length;i++) 
        	$("#department").append("<option value="+data.data.data[i].departid+">"+data.data.data[i].departname+"</option>");
        },
        error: function(data) {
         }
    });
    return false;
}
function initMselect(i){
	var major = {
			departid:i,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/major/findMajor",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(major),
        success: function (data) {
        	$("#major").html("");
        	for(var i=0;i<data.data.data.length;i++) 
            	$("#major").append("<option value="+data.data.data[i].majorid+">"+data.data.data[i].majorname+"</option>");
           },
        error: function(data) {
         }
    });
    return false;
}
function initCselect(i,j,l){
	var course = {
		departid:i,
		majorid:j,
		level:l,
	};
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/findCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
        success: function (data) {
        	$("#course").html("");
        	for(var i=0;i<data.data.data.length;i++) 
            	$("#course").append("<option value="+data.data.data[i].courseid+">"+data.data.data[i].coursename+"</option>");
        },
        error: function(data) {
         }
    });
}

function initCategary(a){
	if(a==1){
		$("#course").css("display","none");
	
	}
	if(a==2){
		$("#course").css("display","inline");
	}
	if(a==3){
		$("#course").css("display","inline");
	}
}

function ifCategory(){
	var v = $("#category").val();
	if(v==1){
		insertCourse();
	}
	if(v==2){
		insertTextbook();
	}
	if(v==3){
		insertOtherbook();
	}
	
}

function insertTextbook(){
	var formData = new FormData();
	formData.append("fileimg",previewImg.files[0]);
	formData.append("textbookname",$("#name").val());
	formData.append("context",$("#context").val());
	formData.append("courseid",$("#course").val());
	formData.append("reason",$("#reason").val());
	formData.append("username",$("#username").text());
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/textbook/insertTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		contentType: false,  
        processData: false,  
		data:formData,
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function insertCourse(){
	var formData = new FormData();
	formData.append("fileimg",previewImg.files[0]);
	formData.append("coursename",$("#name").val());
	formData.append("context",$("#context").val());
	formData.append("departid",$("#department").val());
	formData.append("majorid",$("#major").val());
	formData.append("level",$("#level").val());
	formData.append("reason",$("#reason").val());
	formData.append("username",$("#username").text());
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/insertCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		contentType: false,  
        processData: false,  
		data:formData,
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function insertOtherbook(){
	var formData = new FormData();
	formData.append("fileimg",previewImg.files[0]);
	formData.append("otherbookname",$("#name").val());
	formData.append("context",$("#context").val());
	formData.append("courseid",$("#course").val());
	formData.append("reason",$("#reason").val());
	formData.append("username",$("#username").text());
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/otherbook/insertOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		contentType: false,  
        processData: false,  
		data:formData,
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function open_noPassCourse(i){
	var course = {
		courseid : i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/findCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
        success: function (data) {
        	//alert(i);
        	for(i=0;i<data.data.data.length;i++)
        	layer.open({
			      type: 1,
			      area: ['800px', '800px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>课程</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/course/'+data.data.data[i].address+'.png" >'
						  +'</div>'
					      +'<span>名称：</span>'
					      +'<input type="text" id="name" value="'+data.data.data[i].coursename+'" />'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>书本内容：</span>'
					      +'<textarea id="context" class="span8" rows="5" >'+data.data.data[i].context+'</textarea>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>所属类别：</span>'
					      +'<span>'+data.data.data[i].depart+'&nbsp;&nbsp;&nbsp;</span>'
					      +'<span>'+data.data.data[i].major+'&nbsp;&nbsp;&nbsp;</span>'
					      +'<span>'+data.data.data[i].levelname+'&nbsp;&nbsp;&nbsp;</span>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>推荐理由：</span>'
					      +'<textarea id="reason" class="span8" rows="5">'+data.data.data[i].reason+'</textarea>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=PassCourse('+data.data.data[i].courseid+')>通过</span>'
			    });
         },
        error: function(data) {
         }
    });
}



function PassCourse(i){
		var course = {
			pass : 1,
			courseid:i,
		}
		$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/passCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function PassTextbook(i){
		var textbook = {
			pass : 1,
			textbookid:i,
		}
		$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/textbook/passTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(textbook),
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function PassOtherbook(i){
		var otherbook = {
			pass : 1,
			otherbookid:i,
		}
		$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/otherbook/passOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(otherbook),
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function open_noPassTextbook(i){
	var textbook = {
		textbookid : i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/textbook/findTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(textbook),
        success: function (data) {
        	//alert(i);
        	for(i=0;i<data.data.data.length;i++)
        	layer.open({
			      type: 1,
			      area: ['800px', '800px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>课程</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/textbook/'+data.data.data[i].address+'.png" >'
						  +'</div>'
					      +'<span>名称：</span>'
					      +'<input type="text" id="name" value="'+data.data.data[i].textbookname+'" />'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>书本内容：</span>'
					      +'<textarea id="context" class="span8" rows="5" >'+data.data.data[i].context+'</textarea>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>所属类别：</span>'
					      +'<span>'+data.data.data[i].coursename+'&nbsp;&nbsp;&nbsp;</span>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>推荐理由：</span>'
					      +'<textarea id="reason" class="span8" rows="5">'+data.data.data[i].reason+'</textarea>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=PassTextbook('+data.data.data[i].textbookid+')>通过</span>'
			    });
         },
        error: function(data) {
         }
    });
}
function open_noPassOtherbook(i){
	var otherbook = {
		otherbookid : i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/otherbook/findOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(otherbook),
        success: function (data) {
        	//alert(i);
        	for(i=0;i<data.data.data.length;i++)
        	layer.open({
			      type: 1,
			      area: ['800px', '800px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>课程</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/otherbook/'+data.data.data[i].address+'.png" >'
						  +'</div>'
					      +'<span>名称：</span>'
					      +'<input type="text" id="name" value="'+data.data.data[i].otherbookname+'" />'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>书本内容：</span>'
					      +'<textarea id="context" class="span8" rows="5" >'+data.data.data[i].context+'</textarea>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>所属类别：</span>'
					      +'<span>'+data.data.data[i].coursename+'&nbsp;&nbsp;&nbsp;</span>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>推荐理由：</span>'
					      +'<textarea id="reason" class="span8" rows="5">'+data.data.data[i].reason+'</textarea>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=PassOtherbook('+data.data.data[i].otherbookid+')>通过</span>'
			    });
         },
        error: function(data) {
         }
    });
}
function open_PassCourse(i){
	var course = {
		courseid : i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/findCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
        success: function (data) {
        	//alert(i);
        	for(i=0;i<data.data.data.length;i++)
        	layer.open({
			      type: 1,
			      area: ['800px', '800px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>课程</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/course/'+data.data.data[i].address+'.png" >'
						  +'</div>'
					      +'<span>名称：</span>'
					      +'<input type="text" id="name" value="'+data.data.data[i].coursename+'" />'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>书本内容：</span>'
					      +'<textarea id="context" class="span8" rows="5" >'+data.data.data[i].context+'</textarea>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>所属类别：</span>'
					      +'<span>'+data.data.data[i].depart+'&nbsp;&nbsp;&nbsp;</span>'
					      +'<span>'+data.data.data[i].major+'&nbsp;&nbsp;&nbsp;</span>'
					      +'<span>'+data.data.data[i].levelname+'&nbsp;&nbsp;&nbsp;</span>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>推荐理由：</span>'
					      +'<textarea id="reason" class="span8" rows="5">'+data.data.data[i].reason+'</textarea>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=NoPassCourse('+data.data.data[i].courseid+')>不通过</span>'
			    });
         },
        error: function(data) {
         }
    });
}

function open_PassTextbook(i){
	var textbook = {
		textbookid : i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/textbook/findTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(textbook),
        success: function (data) {
        	//alert(i);
        	for(i=0;i<data.data.data.length;i++)
        	layer.open({
			      type: 1,
			      area: ['800px', '800px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>课程</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/textbook/'+data.data.data[i].address+'.png" >'
						  +'</div>'
					      +'<span>名称：</span>'
					      +'<input type="text" id="name" value="'+data.data.data[i].textbookname+'" />'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>书本内容：</span>'
					      +'<textarea id="context" class="span8" rows="5" >'+data.data.data[i].context+'</textarea>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>所属类别：</span>'
					      +'<span>'+data.data.data[i].coursename+'&nbsp;&nbsp;&nbsp;</span>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>推荐理由：</span>'
					      +'<textarea id="reason" class="span8" rows="5">'+data.data.data[i].reason+'</textarea>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=NoPassTextbook('+data.data.data[i].textbookid+')>不通过</span>'
			    });
         },
        error: function(data) {
         }
    });
}

function open_PassOtherbook(i){
	var otherbook = {
		otherbookid : i,
	}
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/otherbook/findOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(otherbook),
        success: function (data) {
        	//alert(i);
        	for(i=0;i<data.data.data.length;i++)
        	layer.open({
			      type: 1,
			      area: ['800px', '800px'],
			      shadeClose: true, //点击遮罩关闭
			      content:'<div class="num">'
					      +'<h4>课程</h4>'
					      +'<div id="preview">'
					      +'<img  id="imghead" border="0" src="img/otherbook/'+data.data.data[i].address+'.png" >'
						  +'</div>'
					      +'<span>名称：</span>'
					      +'<input type="text" id="name" value="'+data.data.data[i].otherbookname+'" />'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>书本内容：</span>'
					      +'<textarea id="context" class="span8" rows="5" >'+data.data.data[i].context+'</textarea>'
					      +'</div>'
					      +'<div class="category">'
					      +'<span>所属类别：</span>'
					      +'<span>'+data.data.data[i].coursename+'&nbsp;&nbsp;&nbsp;</span>'
					      +'</div>'
					      +'<div class="password">'
					      +'<span>推荐理由：</span>'
					      +'<textarea id="reason" class="span8" rows="5">'+data.data.data[i].reason+'</textarea>'
					      +'</div>'
					      +'<span class="registerBtn" onclick=NoPassOtherbook('+data.data.data[i].otherbookid+')>不通过</span>'
			    });
         },
        error: function(data) {
         }
    });
}
function NoPassCourse(i){
		var course = {
			pass : 0,
			courseid:i,
		}
		$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/passCourse",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(course),
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function NoPassTextbook(i){
		var textbook = {
			pass : 0,
			textbookid:i,
		}
		$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/textbook/passTextbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(textbook),
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}

function NoPassOtherbook(i){
		var otherbook = {
			pass : 0,
			otherbookid:i,
		}
		$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/otherbook/passOtherbook",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:JSON.stringify(otherbook),
        success: function (data) {
        	if(data.message=="success"){
        		alert("提交成功");
        		location.reload();
        	}
        	else
        		alert("发生未知错误");
         },
        error: function(data) {
         }
    });
}
