const allcolor = [
"Orange",
"Pink",
"LightPink",
"HotPink",
"DeepPink",
"PaleVioletRed",
"MediumVioletRed",
"Lavendar",
"Thistle",
"Plum",
"Orchid",
"Violet",
"Fuchsia",
"Magenta",
"MediumOrchid",
"DarkOrchid",
"DarkViolet",
"BlueViolet",
"DarkViolet",
"DarkMagenta",
"Purple",
"MediumPurple",
"MediumSlateBlue",
"SlateBlue",
"DarkSlateBlue",
"RebeccaPurple",
"Indigo",
"LigntSalmon",
"Salmon",
"DarkSalmon",
"LightCoral",
"IndianRed",
"Crimson",
"FireBrick",
"DarkRed",
"DarkOrange",
"Coral",
"Tomato",
"OrangeRed",
"Gold",
"Yellow",
"LightYellow",
"LemonChiffon",
"LightGoldenRodYellow",
"PapayaWhip",
"Moccasin",
"PeachPuff",
"PaleGoldenRod",
"Khaki",
"Darkkhaki"
];
function changecolor() {
	var display = document.querySelector(".display");
 	var span = document.querySelector("span");
 	let n = Math.floor(Math.random()*allcolor.length);
 	console.log(span)
 	span.innerHTML = allcolor[n];
 	display.style.backgroundColor = allcolor[n];
}

const hex = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"A",
"B",
"C",
"E",
"F",
];
function hexcolor()
{
	var display= document.querySelector(".display");
	var span = document.querySelector("span");
	let n;
	n = "#";
	n=n+hex[Math.floor(Math.random()*hex.length)];
	n=n+hex[Math.floor(Math.random()*hex.length)];
	n=n+hex[Math.floor(Math.random()*hex.length)];
	n=n+hex[Math.floor(Math.random()*hex.length)];
	n=n+hex[Math.floor(Math.random()*hex.length)];
	n=n+hex[Math.floor(Math.random()*hex.length)];
	console.log(n);
	span.innerHTML= n;
	display.style.backgroundColor =n;
}