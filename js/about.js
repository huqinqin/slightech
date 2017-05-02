//团队tab切换
var divs = document.querySelectorAll(".team ul li div");
var spans = document.querySelectorAll(".team ul li div span");
//显示的图片
var n = 0;
var show_img = document.getElementById("show_img");
var name = document.getElementById("name"); //名字
var zw = document.getElementById("zw"); //职位
var ms = document.getElementById("ms"); //描述
for(var i = 0; i < divs.length; i++) {
	divs[i].index = i;
	divs[i].onmouseover = function() {
		divs[this.index].style.opacity = 0;
		divs[n].style.opacity = 1;
	}
	divs[i].onmouseleave = function() {
		divs[this.index].style.opacity = 0.8;
		divs[n].style.opacity = 1;
	}
	divs[i].onclick = function() {
		n = this.index;
		for(var j = 0; j < divs.length; j++) {
			divs[j].style.backgroundColor = "white";
			divs[j].style.opacity = 0.8;
			divs[j].style.color = "black";
			spans[j].style.display = "none";
		}
		divs[this.index].style.backgroundColor = "#00AEEF";
		divs[this.index].style.opacity = 1;
		divs[this.index].style.color = "white";
		spans[this.index].style.display = "block";
		if(this.index == 0) {
			show_img.src = "img/team_mem_pang.jpg";
			name.innerHTML = "庞琳勇";
			zw.innerHTML = "CEO";
			ms.innerHTML = "硅谷创业家，企业家，资深职业经理人。美国斯坦福大学机械工程博士和计算机硕士双学位，14年硅谷创业，NASDAQ上市，和公司行政管理经验， 中国国际半导体会议（CSTIC）分会主席，97年度斯坦福大学中国学生学者联谊会主席，拥有31项专利，还有25项待批，有65篇论文在国际刊物和会议上发表。";
		}
		if(this.index == 1) {
			show_img.src = "img/team_mem_zhu.jpg";
			name.innerHTML = "朱刚";
			zw.innerHTML = "首席产品官";
			ms.innerHTML = "设计高级经理、资深用户体验设计师。具有7年用户体验设计经验， 曾就职于Motorola、 MTK、 联想等国际大型企业， 拥有丰富的大型手机操作系统、 Web端软件管理平台项目的设计、 管理经验。 有一定开发经验， 知识面涉及经济学、 管理学、 心理学等， 能够多维因素一体化地进行产品设计。 ";
		}
		if(this.index == 2) {
			show_img.src = "img/team_mem_yang.jpg";
			name.innerHTML = "杨瑞翾";
			zw.innerHTML = "中国区总经理";
			ms.innerHTML = "软件架构师、资深研发工程师。具有多年系统架构经验和移动互联网产品研发经验。经验涉及企业及应用开发、移动应用开发、互联网产品研发等领域。并拥有多年项目管理和团队管理经验。";
		}
		if(this.index == 3) {
			show_img.src = "img/team_mem_fan.jpg";
			name.innerHTML = "樊蓉丽";
			zw.innerHTML = "硬件副总裁";
			ms.innerHTML = "高级经理，资深结构设计工程师。具有16年产品设计经验，曾就职于Motorola、NOKIA等国际大型企业，曾担任Motorola产品和结构团队经理。拥有丰富的结构设计，团队管理，项目管理经验。";
		}
		if(this.index == 4) {
			show_img.src = "img/team_mem_su.jpg";
			name.innerHTML = "苏红海";
			zw.innerHTML = "生产副总裁";
			ms.innerHTML = "高级经理，资深结构设计工程师。具有14年产品设计经验，曾就职于Motorola、LG等国际大型企业，曾担任Motorola产品和结构团队经理。拥有丰富的结构设计，团队管理，项目管理经验。";
		}
		if(this.index == 5) {
			show_img.src = "img/team_mem_eli.jpg";
			name.innerHTML = "Eli教授";
			zw.innerHTML = "首席顾问";
			ms.innerHTML = "美国三院院士 Berkely大学教授。美国国家工程院、美国国家科学院以及美国人文与科学学院三重院士。";
		}
	}
}