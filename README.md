# CES2_Spring2022

## For javascript and html

#### starting page
starting page is a html file with a white background with one blue circle in the middle

#### By clicking the button, you can draw yellow circle in random places
```function draw()``` in javascript does the work

#### Using the potentiometer, you can change the background of the screen
The function is inside the if loop in javascript. It generates differernt colors in blue tone depending on the serial value.

#### By clicking the joystick, you can reset the screen to its original state with one blue circle
```function reset()``` in javascript does the work

#### reading serial port
Code for this part was copied from https://www.marksantolucito.com/COMS3930/spring2022/serialVisual.html but basically read the port using the same baudRate.

#### Changed the serial value to int
```parseInt()``` was used to make sure that the value that was recieved was int type. 

## For arduino file
#### reading values from each pin
For buttons, pin 13 was used and read with ```digitalRead(13)``` since I wanted the value to be outputted as 0 or 1. But for potentiometer and joystick, I read the values with ```analogRead(pin_number)``` so that I could map the values and print different values using the if loop and ranges. 

#### printing the serial value form the pin
All the values were printed using ```serialPrint(value)```

## Video Link
[CES2_spring2022](https://youtu.be/1w6UqLwl59g)
