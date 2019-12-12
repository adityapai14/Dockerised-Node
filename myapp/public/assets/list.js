window.onload = function(){
	var http = new XMLHttpRequest();
	document.getElementById('myform').onsubmit=function(){
		var text = document.getElementById('myinput').value;
		var obj = {
			item:text
		};
		console.log(obj);
		http.onreadystatechange = function(){
			if(http.readyState === 4 && http.status === 200){
				location.reload();
			}
		}
		http.open('POST','/todo',true);
		http.setRequestHeader("Content-Type", "application/json");
		http.send(JSON.stringify(obj));
	}
	function clickHandler(){
		var item = this.textContent.replace(/ /g, "-");
		console.log(this);
		http.onreadystatechange = function(){
			if(http.readyState === 4 && http.status === 200){
				location.reload();
			}
		}
		http.open('DELETE','/todo/'+item,true);
		http.send();
	}
	for(var i=0;i<document.getElementsByTagName('li').length;i++)
		document.getElementsByTagName('li')[i].onclick = clickHandler; 
}