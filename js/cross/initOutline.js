/**
 * 
 */
var d=0;
var m=0;
var l=0;
//初始化院系
var page=0;
function initDepartment(){
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/department/findDepartment",
		contentType:'application/json;charset=utf-8', 
		traditional:true,
		data:{},
		success:function(data){
			$("#department").append("<label class=radio><input type=radio name=department onclick=setD(0);setM(0);initMajor(0);initCourse(0,0,0);><i></i>全部</label>");
			
			for (var i=0;i<data.data.data.length;i++)
			{
				$("#department").append("<label class=radio><input type=radio name=department onclick=setD("
				+data.data.data[i].departid+");setM(0);initMajor("
				+data.data.data[i].departid+");initCourse("
				+data.data.data[i].departid+",0,0);><i></i>"
				+data.data.data[i].departname+"</label>");
				
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
           
        }
	})
}
//初始化专业
function initMajor(i){
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
		data: JSON.stringify(major),
		success:function(data){
			$("#major").html("<label class=radio><input type=radio name=major onclick=setM(0);initCourse(0,0,0);><i></i>全部</label>");
			for (var i=0;i<data.data.data.length;i++)
			{
				$("#major").append("<label class=radio><input type=radio name=major onclick=setM("
				+data.data.data[i].majorid+");initCourse(0,"
				+data.data.data[i].majorid+",0);><i></i>"
				+data.data.data[i].majorname+"</label>");
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
         
        }
	})
}
//初始化book,i表示院系，j表示专业，k表示年级,p表示当前页码
function initCourse(i,j,k,p){
	if(d!=0) i=d;
	if(m!=0) j=m;
	if(l!=0) k=l;
	var courseCustom = {
			departid:i,
			majorid:j,
			level:k,
			pass:1,
			page : p,
			pageSize:6,
	   };
	$.ajax({
		cache:false,
		type:'post',
		dataType:"JSON",
		url:"http://localhost:8008/graduation/course/findCourse",
		contentType: 'application/json;charset=utf-8',
		traditional:true,
		data: JSON.stringify(courseCustom),
		success:function(data){
				$("#course").html("");
				//$("#page_number").html("");
				for (var i=0;i<data.data.data.length;i=i+3){
					if(i+2<=data.data.data.length&&i+3>data.data.data.length)
					$("#course").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='single.html?courseid="+ data.data.data[i].courseid +"'><img width='200' height='250'  src='img/course/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].coursename+"</a></h4></div>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='single.html?courseid="+ data.data.data[i+1].courseid +"'><img width='200' height='250'  src='img/course/"+data.data.data[i+1].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i+1].coursename+"</a></h4></div>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
					)
					else if(i+3<=data.data.data.length)
					$("#course").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='single.html?courseid="+ data.data.data[i].courseid +"'><img width='200' height='250'  src='img/course/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].coursename+"</a></h4></div>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='single.html?courseid="+ data.data.data[i+1].courseid +"'><img width='200' height='250'  src='img/course/"+data.data.data[i+1].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i+1].coursename+"</a></h4></div>"
				        +"<div class=clear></div></div></div>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='single.html?courseid="+ data.data.data[i+2].courseid +"'><img width='200' height='250'  src='img/course/"+data.data.data[i+2].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i+2].coursename+"</a></h4></div>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
					)
					else
					$("#course").append("<div class='section group'>"
				        +"<div class='col_1_of_about-box span_1_of_about-box'>"
						+"<a href='single.html?courseid="+ data.data.data[i].courseid +"'><img width='200' height='250'  src='img/course/"+data.data.data[i].address+".png'  /></a>"
						+"<div class=g_desc><div class=g_1><h4 class=no><a href=#>"+data.data.data[i].coursename+"</a></h4></div>"
				        +"<div class=clear></div></div></div>"
				        +"<div class=clear></div></div>"
					)
				}
				
				if(data.total%6!=0){
					page = (data.total/6)+1;
				}
				else page=data.total/6;
				page  = parseInt(page)
					$(".page_number").Page({
						Page:p, 
						Pages:page, 
						Jump:true,  
						TopDownpage:true, 
						PageOn:function(e){
							initCourse(d,m,l,e);
						}, 
						JumpOn:function(e){
							initCourse(d,m,l,e);
						}, 
					},true);
			
		},
		error: function() {
        }
	})
}




//book的约束条件函数
function setD(i){
	d=i;
}
function setM(j){
	m=j;
}
function setL(k){
	l=k;
}

