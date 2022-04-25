/**
 * View component for reusable navigation. To use:
 *
 * import {NavView} from ...
 */
let TEMPLATE=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="img/fox.png" alt="" width="50" height="50">Evil Inc.
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/wifi.html">WiFi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/plans.html">Evil Plans</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

export let NavView = {
    template: TEMPLATE,
};