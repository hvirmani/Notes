function search() {
	let input = document.getElementById("search").value.trim().toLowerCase();
	let input_element = document.getElementsByClassName("title");
	for (l = 0; l < input_element.length; l++) {
		let str_1 = input_element[l].textContent.trim().toLowerCase();
		let str_2 = input_element[l].parentElement.children[1].textContent.trim().toLowerCase();
		console.log(input + " " + str_1 + " " + str_2);
		var a = str_1.indexOf(input);
		var b = str_2.indexOf(input);
		if (a > -1 || b > -1)
			input_element[l].parentElement.parentElement.style.display = '';
		else
			input_element[l].parentElement.parentElement.style.display = 'none';

	}

}
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize() {
	var el = this;
	setTimeout(function () {
		el.style.cssText = 'height:auto; padding:0';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
	}, 0);
}
var close = document.getElementsByClassName("delete");
var copy = document.getElementsByClassName("copy");
for (i = 0; i < copy.length; i++) {
	copy[i].onclick = function () {
		var copyText = this.parentElement.parentElement.children[1].textContent.trim();
		const element = document.createElement('textarea');
		element.value = copyText;
		document.body.appendChild(element);
		element.select();
		document.execCommand('copy');
		document.body.removeChild(element);
	}
}
var k = 1;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var parent = this.parentElement.parentElement.parentElement;
		parent.parentElement.removeChild(parent);
		k--;
	}
}

function newNote() {
	var title = document.getElementById("input_title").value.trim();
	var content = document.getElementById("input_content").value.trim();
	document.getElementById("input_title").value = "";
	document.getElementById("input_content").value = "";
	if (content === '') {
		alert("Please provide any content!");
		return 0;
	}
	var txt_1 = document.createTextNode(title);
	var txt_2 = document.createTextNode(content);
	var div = document.createElement("div");
	div.className = "col-lg-4 col-md-6";
	var element = `<div class="col-md-12">
					<div class="title">
					</div>
					<div class="content">
						
					</div>
                    <hr>
					<div class="icon">
						<span class="copy">
							<i class='fas fa-copy'></i>
						</span>
						<span class="delete">
							<i class='fas fa-trash-alt'></i>
						</span>
					</div>
				</div>`;
	div.innerHTML = element;
	var a = document.getElementsByClassName("title");
	var b = document.getElementsByClassName("content");
	document.getElementById("main_content").appendChild(div);
	a[k].appendChild(txt_1);
	b[k].appendChild(txt_2);
	k++;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var parent = this.parentElement.parentElement.parentElement;
			parent.style.display = "none";
			parent.parentElement.removeChild(parent);
			k--;
		}
	}
	for (i = 0; i < copy.length; i++) {
		copy[i].onclick = function () {
			var copyText = this.parentElement.parentElement.children[1].textContent.trim();
			const element = document.createElement('textarea');
			element.value = copyText;
			document.body.appendChild(element);
			element.select();
			document.execCommand('copy');
			document.body.removeChild(element);
		}
	}
}