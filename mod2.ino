int sensorValue = 0;        // value read from the sensor
int outputValue = 0;
const int analogInPin = 12;  // Analog input pin that the potentiometer is attached to
int sensorValue2 = 0;        // value read from the sensor
int outputValue2 = 0;// value output to the serial line// value output to the serial line
const int joystickX = 25;
int sensorValue3 = 0;
int outputValue3 = 0;


void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(115200);
  pinMode(13, INPUT_PULLUP);
}

void loop() {
  // read the analog in value:
  int sensorValue = digitalRead(13);
  int sensorValue2 = analogRead(analogInPin);
  outputValue = map(sensorValue2, 0, 1023, 0, 400);
  int sensorValue3 = analogRead(joystickX);
  
  if(sensorValue3 >= 4000){
    Serial.println(sensorValue3);
    delay(100);
  }
  else if(sensorValue2 > 100){
    Serial.println(outputValue);
    delay(100);
  }
  else{
    Serial.println(sensorValue);
    delay(100);
  }
  
  

}
