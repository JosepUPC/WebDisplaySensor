# Wire_I2C_Connections

##  Introduccion

In this project we see the connections between our master dispositive ESP32-S3 and our slave devices. The wire connection have at his disposition as 255 devices and with a proper code, we can find and see if one or a few of them are connected.

## Materials

We need materials to made our project with hardward components and write our code with an API software.

- HARDWARE

    - [Esp32_s3 microprocessor](https://www.espressif.com/en/products/socs/esp32-s3)
    - [4 cables to connect the SDA, SCL, CMD and 5V current](https://www.mouser.es/ProductDetail/SparkFun/PRT-12795?qs=WyAARYrbSnZ%2FIrMB64nYgw%3D%3D&mgh=1&vip=1&utm_id=19105062713&gad_source=1&gclid=CjwKCAjwte-vBhBFEiwAQSv_xW0gJk5Q_AeOIhQuhj8a5tcuOXpmRgW2tnh8LFaRfLO0b48yZx2HuBoCoLgQAvD_BwE)
    - [Slave device: LCD display, sensor of temperature, humidity](https://es.rs-online.com/web/p/displays-monocromos-lcd/2109029?cm_mmc=ES-PLA-DS3A-_-google-_-CSS_ES_ES_Pmax_Test-_--_-2109029&matchtype=&&gad_source=1&gclid=CjwKCAjwte-vBhBFEiwAQSv_xR8GmSdBiJYCuiC6uNzVSChD2M4R8yw3h6rEQRmfTgchsGbAckqSLRoCzcQQAvD_BwE&gclsrc=aw.ds)
    - [USB connection calbe C type](https://www.amazon.es/s?k=cable+usb-c+usb&adgrpid=52965861581&hvadid=275293878921&hvdev=c&hvlocphy=1005431&hvnetw=g&hvqmt=e&hvrand=5206542158558476345&hvtargid=kwd-312481550322&tag=hydes-21&ref=pd_sl_98sgs7h7db_e)

- SOFTWARE

    - [Visual studio Core](https://code.visualstudio.com/docs/languages/dotnet)
    - [Platformio](https://platformio.org/)
    - [Git](https://git-scm.com/)
    - [Github (Repositions)](https://github.com/)
    - Libraries (Arduino.h, Wire.h)

## Pictures

![libraries](/include/libraries.png)

> This code you can see the begining of our desire code

## Code

in this point, we'll check a certain code to understand the enviroment we are playing

```c
include <Arduino.h>

#define d 500
#define pin1 21

setup void(NULL){
    Serial.begin(115200);
    pin.MODE(pin1,PULLUP);
}
loop void(){
    Serial.Write(pin1,HIGH);
    delay(500);
    Serial.Write(pin1,LOW);
    delay(500);
}
```