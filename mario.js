let icon = '';
let height = 2;

input.addEventListener('input', (e)=>{
    height = e.target.value;
    console.log(height);
    pyramid(height, icon);
});

select.addEventListener('change', (e)=>{
    icon = ''+ e.target.value;
    console.log(icon);
    pyramid(height, icon);
});

function pyramid(height, icon) {
    document.getElementsByClassName('pyramid')[0].innerHTML = '';
    for (let i = 1; i<=height; i++){
		let q = document.createElement("p");
		q.textContent = '\xa0'.repeat(height-i)+icon.repeat(i+1);
		document.getElementsByClassName('pyramid')[0].appendChild(q);
		console.log(q.textContent);
	}
}