import {NavView} from "./views/nav.js";

/**
 * Setup the webpage given the data.
 * @param data: data to supply to the webpage
 */
export function setup(data) {
    let app = Vue.createApp(data);
    app.component("nav-view", NavView);
    app.mount("#body");
}

/**
 * Light an LED to solve the puzzle.
 */
export function led(led_index) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {};
    xhr.open("PUT", "/led/"+led_index);
    xhr.send()
}