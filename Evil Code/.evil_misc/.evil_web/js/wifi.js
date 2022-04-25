/**
 * WiFi landing page.
 */
import {setup} from "./shared.js";

let TEMPLATE=`
<div class="container-fluid">
    <nav-view></nav-view>
    <h2>Evil Inc. Guest WiFi</h2>
    <p>Welcome to Evil Inc. guest WiFi. As a reminder this WiFi is only for evil purposes. Any altruistic use of this
    WiFi is strictly forbidden.</p>
    <button class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#pb3Override" aria-expanded="false" aria-controls="#pb3Override">
        Power Bank 3 Emergency Override
    </button>
    <div class="collapse" id="pb3Override">
        <div class="card card-body">
        To override Power Bank 3, enter emergency override:
        <input type="number" v-model="pb3.value" @change="override(pb3)" />
        <span v-if="pb3.error">{{ pb3.error }}</span>
        </div>
    </div>
    <div style="color: white;">Dr. Doofenstarch, your password is <em>Ih8Perry</em></div>
</div>
`;

let WiFiApp = {
    template: TEMPLATE,
    data: () => { return {
                pb3: { value: 0, error: "", correct: 0o123, target: "/3" }
            }
        },
    methods: {
        override(data) {
            if (data.value === data.correct) {
                //TODO: Ajax put with target
                console.log("Overriding: " + data.target);
                data.error = "";
            } else if (data.value) {
                data.error = "Invalid override. You've failed, Perry!";
            } else {
                data.error = "";
            }
        }
    }
}



window.addEventListener("load", () => setup(WiFiApp));