### What is this project?
This was a in-class project to create an interactive device using ESP32 TTGO T-display, battery, a button, a joystick, and a potentiometer. Using the serial number coming from the hardware, we had to write a code using the data for visualization or sonification. I chose to use javascript to visualize my art on my laptop screen. 

### What was on the screen?
Initial screen was a blue circle on a white background. And once we click the button, yellow circles will be created in random places on the screen. Using the potentiometer, it can change the background color white to black gradient. And when using the joystick, the screen will be reseted to the initial screen with a blue circle. 
### What is the meaning of the art?
I wanted to express how yellow around the blue can brighten the screen. The blue circle in the initial state is one individual and random yellow circles are random people around us that we encounter. I wanted to show that when we see one circle we might see the sadness inside ourselves, when we look around and acknowledge that there’s more than only us we can see the brightness of the world and stop focusing on the blue inside of us. At one point the blue circle will be covered with yellow circles and this shows our negative thinking can be covered when we see other in our world. And by changing the background color, when we have lots of yellow colors, even with the black background it will give the bright impression. But when we have a black background with a single blue circle, it won’t give the bright impression. To sum up, this interactive device and screen is to show how one’s sadness can be forgotten by knowing that others also exist. 
About how I printed the screen
I used html file and javascript file to print the screen. Using three different functions in javascript, I generated random circles, changed color of the background, and reset the screen. Math.random() helped generating random position of the circles. By dividing the range of number that I am receiving from potentiometer, I was able to assign the rgb value and change the background color. And relocating the url of the window is how I located back to the original state. 
Since three devices all had different range of values, I was able to receive serial values from the device to use it in javascript. 
### Hardships
The hardest part was soldering three devices to ESP32. Soldering itself was hard since the pins were located so close and the wires will not stay still while soldering. Also, because enclosure device couldn’t be made util the last moment, it was hard to make sure that the soldered ESP32 was protected. 
### Link to the video
<p align=center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1w6UqLwl59g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </p>
