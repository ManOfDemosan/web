function move(){
	location.href ='/lv1_4/video_page';
}

{/* <div class="image">
			<img class="imge__img" src="../lalaland/1.another-day-of-sun.jpg" alt="AnotherDayOfSun">
			<div class="image__overlay image__overlay--blur">
				<div class="image__title"><h1><a onclick="move1();" style="cursor:pointer">play</a></h1></div>
			</div>
			<div class="name">
				<h1><a onclick="swal('The name is', 'Another Day Of Sun.', 'success');" style="cursor:pointer">Another Day Of Sun</a></h1>
			</div> */}




let movieName =[
	'1.another-day-of-sun',
	'2.some-one-in-the-crowd',
	'3.mia-and-sebastian_s-theme',
	'4.I-Ran',
	'5.Herman_s-Habit',
	'6.Summer-Montage',
	'7.Engagement-Party',
	'8.Audition',
	'9.Epilogue'

];

let wrapper = document.querySelector(".wrapper");

function divMaker (src, alt, ...args) {
	const div = document.createElement("div");
	div.className = "image";
	return div;
}

wrapper.appendChild(divMaker());



