function black(){
	document.body.style.backgroundColor = 'rgb(0, 0, 0)'; 
}

function reset(){
	document.body.style.backgroundColor = 'rgb(255, 255, 255)'; 
	window.location.assign("/Users/kimhayeon/Desktop/movingcircle/movingcircle.html")
}

function draw(){
	X = Math.random() * (1200 - 200) + 200
	Y = Math.random() * (600 - 200) + 200
	R = 50
	if(X != 700 && Y != 400){
		new_circle = '<circle cx=' + X + ' cy=' + Y +' r=' + R +' stroke="black" stroke-width="4" fill="yellow" />'
		document.getElementById("circle").innerHTML += new_circle
	}
}

function white() {
	document.body.style.backgroundColor = 'rgb(255, 255, 255)';		
}

document.addEventListener('click', async () => {
	// Prompt user to select any serial port.
	var port = await navigator.serial.requestPort();
	// be sure to set the baudRate to match the ESP32 code
	await port.open({ baudRate: 115200 });

	let decoder = new TextDecoderStream();
	inputDone = port.readable.pipeTo(decoder.writable);
	inputStream = decoder.readable;

	reader = inputStream.getReader();
	readLoop();

});


async function readLoop() {
	counterVal = 0;
	while (true) {
		const { value, done } = await reader.read();
		if (done) {
			// Allow the serial port to be closed later.
			console.log("closing connection")
			reader.releaseLock();
			break;
		}
		if (value) {
			parsedVal = parseInt(value);
			if (parsedVal == 1) { 
				white();
			}
			else if(parsedVal == 0){
				draw();
			}
			else if(parsedVal > 4000){
				reset();
			}
			else{
				new_val = parseInt(value)/5.0;  
        document.body.style.backgroundColor = 'rgb(' + new_val + ', 0 , 255)';
			}
		}
	}
};

