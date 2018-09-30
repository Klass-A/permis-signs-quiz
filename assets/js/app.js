'use stric';

const signsArr = [
	['takes_brings_sign', '1.png'],
	['danger_falls_sign', '2.jpg'],
	['glissage_sign', '3.png'],
	['verage_sign', '4.png'],
	['planes_nearby_sign', '5.png'],
	['road_getSmaller_sign', '6.png'],
	['noHeavierThank25_sign', '7.png'],
	['dontExceed70_sign', '8.png'],
	['turnLeft_sign', '9.png'],
	['interdit_sign', '10.png']
]


	const iterate = ()=> {
		// iterate throught All signs array
		// for(let i=0; i<signsArr.length;i++){console.log(signsArr[i])}

		// select All img elements
		let images = document.querySelectorAll('#signs_options .sign_img img');
		// get Random Num within signs array
		// let rand = Math.round(Math.random() * signsArr.length);

		// iterate throught All imgs
		for(let i=0; i<images.length;i++){
			images[i].setAttribute('src', `assets/img/${signsArr[Math.round(Math.random() * signsArr.length)][1]}`);
		}

	}

	iterate();