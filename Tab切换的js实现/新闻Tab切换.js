window.onload = function() {
	
	var index = 0;	//用于记下现在在哪个新闻栏
	var nav = document.querySelector("nav");
	var titles = document.querySelectorAll("nav ul li a");
	var contents = document.querySelectorAll(".content ul");
	var num = titles.length;	//记下有多少新闻栏

	var timer = setInterval(function() {
		index = (index + 1) % num;
		changeStuff(index);
	}, 2000);
	
	//这个函数把choosed和selected类加到第a个li（nav中的）和ul（.content类中的）中
	function changeStuff(a) {
		titles.forEach(function(item) {
			item.removeAttribute("class");
		})
		contents.forEach(function(item) {
			item.removeAttribute("class");
		})
		titles[a].setAttribute("class", "choosed");
		contents[a].setAttribute("class", "selected");
	}

	//当鼠标进入时改变choosed类和selected类
	nav.addEventListener("mouseover", function(evt) {
		let target = evt.target;
		let n = findIndex(titles, target)
		if (n !== -1) {
			clearInterval(timer);
			timer = null;
			changeStuff(n);
			index = n;
		}
		target.addEventListener("mouseleave", function(event) {
			if (!timer) {
				timer = setInterval(function() {
				index = (index + 1) % num;
				changeStuff(index);
				}, 2000);
			}
		})
	})

	//用于找到指定元素在数组中的index
	function findIndex(a, b) {
		for (let i = 0; i < a.length; i++) {
			if (a[i] === b) {
				return i;
			}
		}
		return -1;
	}
}