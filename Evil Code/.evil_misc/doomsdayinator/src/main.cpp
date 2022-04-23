/**
 * Blink
 *
 * Turns on an LED on for one second,
 * then off for one second, repeatedly.
 */
#include "Arduino.h"
#include <Adafruit_NeoPixel.h>
#include <ESP8266WiFi.h>
#include "index.hpp"

#define BUFFER_SIZE 7
#define LED_SIZE 8
#define LED_PIN 10

bool LED_STATUS[LED_SIZE];
char BUFFER[BUFFER_SIZE]; //GET /1x

void update_pixels(bool on);

WiFiServer server(80);
Adafruit_NeoPixel pixels(LED_SIZE, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup()
{
    memset(LED_STATUS, 0, sizeof(LED_STATUS));
    memset(BUFFER, 0, sizeof(BUFFER));

    // Startup serial for debugging
    Serial.begin(115200);
    pixels.begin();
    Serial.println();

    WiFi.begin("GirlsCode", "smhs-gwc");
    Serial.print("Connecting");

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(100);
        update_pixels(true);
        delay(100);
        update_pixels(false);
        Serial.print(".");
    }
    Serial.println();
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
    update_pixels(true);

    server.begin();
}

void read_client_data(WiFiClient& client) {
    unsigned int index = 0;
    unsigned int count = 0;
    memset(BUFFER, 0, sizeof(BUFFER));

    while (client.available() || index < (BUFFER_SIZE - 1)) {
        if (not client.available()) {
             continue;
        }
        char c = client.read();
        count += 1;
        BUFFER[index] = c;
        Serial.print(c);
        index = ((index + 1 ) >= BUFFER_SIZE) ? (BUFFER_SIZE - 1) : (index + 1);
    }
    Serial.println("END --");
}

const char* dispatch_client(WiFiClient& client) {
    read_client_data(client);
    // Dispatch code
    char index_char = BUFFER[sizeof(BUFFER) - 2];
    if ((BUFFER[0] == 'P') && (index_char >= 48 && index_char < (48 + (int)sizeof(LED_STATUS)))) {
        int ret = index_char - 48; // Convert from ascii
        LED_STATUS[ret] = !LED_STATUS[ret];
        return LED_STATUS[ret] ? "1" : "0";
    } else if ((BUFFER[0] == 'G') && (index_char >= 48 && index_char < (48 + (int)sizeof(LED_STATUS)))) {
        int ret = index_char - 48; // Convert from ascii
        Serial.print("GET: "); Serial.print(ret); Serial.print(" Val: "); Serial.println(LED_STATUS[ret]);
        return LED_STATUS[ret] ? "1" : "0";
    } else if (BUFFER[0] == 'G' && index_char == ' ') {
        return index_data;
    }
    return "E"; // Inteded
}


bool all() {
    for (unsigned int i = 0; i < (LED_SIZE - 1); i++) {
        if (!LED_STATUS[i]) {
            return false;
        }
    }
    return true;
}


void update_pixels(bool on) {
     LED_STATUS[LED_SIZE - 1] = all();
     pixels.clear();
     for (unsigned int i = 0; i < LED_SIZE && on; i++) {
         int red = (LED_STATUS[i]) ? 0 : 255;
         int grn = (LED_STATUS[i]) ? 255 : 0;
         int blu = (LED_STATUS[i]) ? 0 : 0;
         pixels.setPixelColor(i, pixels.Color(red, grn, blu));
     }
     pixels.show();
}

void loop()
{
    WiFiClient client = server.available();
    if (!client) { return; }
    if (client.connected()) {
        char memory[100];
        const char* return_data = dispatch_client(client);
        client.write("HTTP/1.1 200 OK\n");
        client.write("Content-Length: ");
        itoa(strlen(return_data), memory, 10);
        client.write(memory);
        client.write("\r\n\r\n");
        client.write(return_data);
        client.write("\r\n\r\n");
        update_pixels(true);
    }
    client.stop();
}
