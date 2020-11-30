var taskTile = document.getElementById("task-title");
var taskDesc = document.getElementById("task-descreption");
var btn = document.getElementById("submit");
var t_box = document.getElementById("tasks-box");
var colors = ["grad-insta","grad-blue","grad-green","grad-yellow","grad-purple","grad-baby-pink","grad-sea-blue","grad-sweet","grad-love",
"grad-phoneix","grad-cobra-green"];
var cnt = 0;

function removeParent(evt) {
  evt.target.parentNode.parentNode.remove();
  alert("Task Has Been Removed");
}

function btnClicked(){
	if (!taskTile.value.length){
		alert("Task Title Can't Be Empty");
		return;
	}
	alert("Task Has Been Added");
	var btn = document.createElement("button");
	btn.innerHTML = "Remove Task";
	btn.addEventListener("click", removeParent);
	var user_task = document.createElement("div");
	user_task.className = "box " + colors[cnt];
	cnt += 1;
	if (cnt==11){
		cnt = 0;
	}
	var TITLE = (document.createElement("h1"));
	TITLE.innerText = taskTile.value;
	var DESC = (document.createElement("h2"));
	DESC.innerText = taskDesc.value;
	user_task.appendChild(TITLE);
	user_task.appendChild(DESC);
	var hthree = document.createElement("p");
	hthree.appendChild(btn);
	user_task.appendChild(hthree);
	t_box.appendChild(user_task);
  	taskTile.value = "";
  	taskDesc.value = "";
  	// alert("Task Has Been Added");
}

btn.addEventListener("click",btnClicked);