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