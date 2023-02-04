function dice(faces,target){
	number = Math.floor(Math.random()*(faces-1))+1
	document.getElementById('start').value = number;
	document.getElementById('start').innerHTML = number;
	document.getElementById('start').innerText = number;
	return target
}
function get_monster(name='',align='',hit=10000,ac=10000){
	var possible_monst = [];
	for (i in monsters) {
		var target_align = monsters[i]["meta"].split(",")[1];
		var target_hit = monsters[i]["Hit Points"].match(/^\d+/)[0];
		var target_ac = monsters[i]["Armor Class"].match(/^\d+/)[0];
		console.log(target_align+" "+target_hit+" "+target_ac);
		if (monsters[i]["name"].toLowerCase().includes(name.toLowerCase()) && (target_align.includes(align.toLowerCase())) && (target_hit <= hit) && (target_ac <= ac)) {
			possible_monst.push(monsters[i]["name"].toLowerCase().replaceAll(' ','-'));
		}
	}
	if (possible_monst.length>0) {
		var monster_name = possible_monst[Math.floor(Math.random() * possible_monst.length)]
	} else {
		var monster_name = "NO MATCHES";
	}
	document.getElementById('monster').value = monster_name;
	document.getElementById('monster').innerHTML = monster_name;
	document.getElementById('monster').innerText = monster_name;
}
