/**
 * Evil Plans landing page.
 */
import {setup, led} from "./shared.js";
import {CHINESE_EMAIL, IT_E_MAIL} from "./chinese.js";

let TEMPLATE=`
<div class="container-fluid">
    <nav-view></nav-view>
    <h2>Evil Inc. Evil Messaging System</h2>
    <p>Welcome to Evil Inc. Evil Messaging System (EMS). This page is to synergize communications amongst all employees
    and indoctrinate them into our Evil ways.</p>
    <p>Access to this page is on the honor system. If you plan <em>good</em> and not Evil, please kindly disconnect from
    this page.  That means you Perry.</p>
    
    <h6>Message History</h6>
    <div class="accordion" id="plansAccordion">
        <div v-for="plan in plans" class="accordion-item">
            <h3 class="accordion-header" :id="plan.id + 'heading'">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + plan.id" aria-expanded="false" :aria-controls="plan.id">
                {{ plan.title }}
                </button>
            </h3>
            <div :id="plan.id" class="accordion-collapse collapse" :aria-labelledby="plan.id + 'heading'" data-bs-parent="#plansAccordian">
                <div class="accordion-body">
                    <span v-html="plan.html"></span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

let PlansApp = {
    template: TEMPLATE,
    data: () => { return {
            plans: [
                {
                    "id":    "bears",
                    "title": "Test Report: Bears with Knives",
                    "html": `
                    <h5>To: Evil Inc. Director Dr. Doofenstarch</h5>
                    <h5>From: Test Engineer Sandy Schwarzfahren</h5>
                    <h5>Subject: Bears With Knives Test</h5>
                    <p>We deployed your latest scheme "Bears with Knives" as a Phase-II prototype in a local shopping
                    mall to mixed results. The bears were incredibly effective at infiltrating the toys sections of the
                    department stores, however; we were unable to steal the cash register as planned.</p>
                    <p>As it turns out, the bears were too cute and were all purchased as Yuletide gifts before the store
                    closed. Thus we were unable to recover the money under the cover of darkness. I recommend
                    repurposing the bears as kinder-spies. The latest photo of the Phase-II prototype is attached.</p>
                    <img src="img/plans/teddy.bmp" style="width: 30em"/>
                    `
                },
                {
                    "id":    "galactic",
                    "title": "MEMO: Galactic Invasion",
                    "html": `
                    <h5>To: All Evil Inc. Minions</h5>
                    <h5>From: Evil Inc. Management</h5>
                    <h5>Subject: Galactic Invasion Underway</h5>
                    Dearest minions,<br/><br>
                    
                    <p>The galactic invasion has begun.  We at Evil Inc. have ensured that our software, using the ruse of
                    open source, has been launched into the cosmos by those fools at the local space agency. Soon Evil Inc. will be
                    on every world in the Galaxy. We now far exceed Perry's reach, and his time is limited.</p>
                    
                    <img src="img/plans/opensource.png" style="width: 100%"/>
                    
                    <strong>Live long and prosper dearest Minions,</strong><br/><br/>
                    Evil Management
                    `,
                    "image": "opensource.png"
                },
                {
                    "id":    "replyall",
                    "title": "Re: Fw: Re: Re: STOP REPLYING ALL",
                    "html": `
                    <h5>To: All Evil Inc.</h5>
                    <h5>From: Phil in Accounting</h5>
                    <h5>Subject: Re: Fw: Re: Re: STOP REPLYING ALL</h5>
                    You replied all...<br/><br/>
<pre>
> To: All Evil Inc.
> From: Dr. Doofenstarch
> Subject: Fw: Re: Re: STOP REPLYING ALL
>
> HR Director Simmons,
>
> Fire all employee's participating on this inane thread. It has annoyed me.
>
> - Doofenstarch
>
>> To: All Evil Inc.
>> From: Pauline, Magnets and Supercomputer Synergistics
>> Subject: Re: Re: STOP REPLYING ALL
>>
>> This is SO EASY.  PRESS REPLY, NOT REPLY ALL!!!!  That means you FRANK.
>>
>> Pauline
>> PS I understand the irony of replying to all in this e-mail.
>>
>>> To: All Evil Inc.
>>> From: Frank, Intellectual Sea Sponges Division
>>> Subject: Re: STOP REPLYING ALL
>>>
>>> You are a control freak. Viva the REPLY-ALL-ution. 
>>>
>>> FRANK!!!
>>>
>>>> To: All Evil Inc.
>>>> From: Jessica, Evil Inc. Information Technologies
>>>> Subject: STOP REPLYING ALL
>>>>
>>>> This is your bi-weekly reminder to not use REPLY ALL on e-mails bound for all
>>>> Evil Inc. Doing so increases the likelihood of Perry the Platypus seeing our
>>>> communications.
>>>> 
>>>> Have an Evil Day,
>>>> - Jessica
</pre>
                    `
                },
                {
                    "id":    "chinese",
                    "title": "Re: Collaboration Inquiry",
                    "html": `
                    <h5>To: Dr. Doofenstarch</h5>
                    <h5>From: Evil Affiliates East Asia (EAEA)</h5>
                    <h5>Subject: Re: Collaboration Inquiry</h5>

`
+ CHINESE_EMAIL +
`<pre>
> To: Evil Affiliates East Asia (EAEA)
> From: Dr. Doofenstarch
> Subject: Collaboration Inquiry
>
> My Dearest Colleagues in EAEA,
>
> I, Dr. Doofenstarch, the greatest supervillian ever to grace the planet
> do humbly request a collaboration between our two Evil organizations. Any
> collaboration will do us both well.
>
> Sincerely in Evil,
> - Dr. Heinz Doofenstarch, Director, Dr. Doffenstarch's Evil Inc.
</pre>
                    `
                },
                {
                    "id":    "panic",
                    "title": "Evil in the News: Panic in Stockholm!!!",
                    "html": `
                    <p><em>Translated excerpt from the Stockholm People's Gazette and Times</em></p>
                    <h3>Rädsla för Videospelslinjer</h3>
                    <p>Residents of Stockholm fled in terror today as Videospelslinjer appeared in the Eastern sky at dusk. The anomalies
                    quickly targeted the city centre of Sweden's crown city before vanishing. BBC Fisk interviewed residents after the
                    incident pictured below.</p>
                    <img src="img/plans/city.bmp" style="width: 100%">
                    <p><em>...It was like I vas in a 1980's video game. Pure terror!</em></p>
                    <p><em>I thought Atari was dead but, no, they are out for vengance!</em></p>
                    <p>Although the pentagon has yet to comment officially, BBC Fisk's sources indicated that the incident was likely part
                    of Evil Inc.'s recent drive to conqueror Scandinavia. Evil Inc. is a corporation headed by nefarious super villian Dr.
                    Doofenstarch with the expressed purpose to spread the joy and love of evil while also taking control of the Earth. </p>
                    <p>Perry the Platypus was unavailable for comment.</p>
                    `
                },
                {
                    "id":    "tree",
                    "title": "Scheme Development: Tree Eater",
                    "html":  `
                    <h5>Classification: ALPHA</h5>
                    <p><strong>Requires ALPHA clearance</strong>. Violators will be <strong>severely punished.</strong>
                    </p>
                    <p>"Dr. Doofenstarch's Tree Eater TM" is a Titian-sized robot designed to consume all photosynthetic
                    life within the biosphere. Perry and the world governments will quickly concede to our demands when
                    every tree is consumed from within their precious nature reserves. Employees should start
                    construction of the phase-II prototype immediately.</p>
                    <h6>Phase-I Prototype Testing in Yukon Territories, 2022-04-23</h6>
                    <img src="img/plans/tree.JPG" style="width: 100%" />
                    `
                },
                {
                    "id":    "termination",
                    "title": "MEMO: Termination of Evil Contractors",
                    "html":  `
                    <h5>To: All Evil Inc. Employees and Contractors</h5>
                    <h5>From: Evil Inc. HR</h5>
                    <h5>Subject: Termination of Evil Contractors</h5>
                    <p>Some employees have inquired of HR as to the absence of the Evil Contractor alias "The American".
                    This contractor has been terminated with extreme prejudice. In addition, the HR members suggesting
                    that severance was due for The American's decade of service have also been terminated. The American
                    was last seen in the far East enjoying Beef Noodles and freedom.</p>
                    
                    <p>For employees wondering what transgression could possibly lead to The American's termination and
                    subsequent abscondence with our Harpsichord collection, HR gently reminds employees that our fine
                    organization shall be referred to as "Doofenstarch Evil Inc." or simply "Evil Inc.". References to
                    "Doofenshmirtz" or "Doofemshmirtz" are an affront to our Evil goals and will not be tolerated.
                    
                    <p>As a side note, the composition rendered by The American has been adopted as our evil theme. To
                    unlock employee-only sectors, the theme must be played in 8-bit audio. The composition is provided
                    below to assist employees with this pass-lock and <strong>AS A WARNING.</strong></p>
                    <p>Much love,</p><br/>
                    Doofenstarch Evil Inc. Human Resources
                    <img src="img/plans/music.png" style="width: 100%" />
                    `
                },
                {
                    "id":    "crab",
                    "title": "Test Report: City Reconnaissance and Assimilation Battle System (CRABS)",
                    "html": `
                    <h5>To: Evil Inc. Director Dr. Doofenstarch</h5>
                    <h5>From: Test Engineer Grettel Jenkins</h5>
                    <h5>Subject: CRABS Tested in Omaha</h5>
                    <p>The CRABS scheme was deployed against the city of Omaha Nebraska last Thursday. The system
                    functioned flawlessly and is now approved for Phase-IV implementation. I am happy to report that it
                    is on track to spearhead our coup in Jakarta next year.</p>
                    <p>As you are no doubt aware, Thursday was "Take you Daughter to Work Day" and to celebrate I
                    allowed my daughter, Penny, to officially document the CRABS Phase-III test. Her official report is
                    attached below. </p>
                    <img src="img/plans/crab-eat-city.png" style="width: 100%">
                    `
                },
                {
                    "id":    "itexchange",
                    "title": "Re: Re: Fw: Re: Re: Re: Re: Re: Fw: AUTO-REPLY: Re: Fire IT Employee",
                    "html": IT_E_MAIL
                },
                {
                    "id":    "secmat",
                    "title": "MEMO: New Security Procedures",
                    "html": `
                    <h5>To: Evil Inc.</h5>
                    <h5>From: Multiplication of Manic Matrices and Marshmallow Mit Mange Management</h5>
                    <h5>Subject: New Security Procedures</h5>
                    <p>We've made the decision that all override codes henceforth shall be published in matrix notation
                    as this ensures that our division shall be indispensable to the organization for years to come. For
                    those of you unable to computer basic linear algebra, please refer to the following computational
                    equivalent.</p>
                    <a href="https://octave-online.net/">https://octave-online.net/</a> `
                },
                {
                    "id":   "congrats",
                    "title": "MEMO: Congratulations Team Omega",
                    "html": `
                    <h5>To: Evil Inc.</h5>
                    <h5>From: Your Evil Hyperlord and Benefactor</h5>
                    <h5>Subject: Congratulations Team Omega</h5>
                    <p>At our recent employee-management schemeathon, Team Omega went above and beyond in demonstrating
                    their scheme "Sun Theft (TM)". We are adopting this as an alpha-tier scheme immediately. Employees
                    are also reminded that all intellectual property strictly belongs to myself and the insurgent Team
                    Omega employees have been fired for their attempted trademark.</p>
                    <p>As we role out "Dr. Doofenstarch's Sun Theft" please keep an eye out for all enemies including
                    the former employees of Team Omega and Perry the Platapus.  Initial schemtaics are included below.
                    </p>
                    <img src="img/plans/sun.svg" style="width: 20em"/>
                    `
                },
                {
                    "id": "annual",
                    "title": "MEMO: Annual Robots vs Zombies War Games",
                    "html":`
                    <img src="img/plans/robot.png" style="width: 100%" />
                    <h5>To: All Evil Inc.</h5>
                    <h5>From: Evil Human Resources</h5>
                    <h5>Subject: Annual Robots vs Zombies War Games</h5>
                    <p>We at Evil Inc. are pleased to bring you the Evil Inc. Annual Robot vs Zombie War Games!!! The
                    festivities will begin promptly at midnight on 2022-05-27. As always, you are responsible for
                    ensuring the integrity of your brains during the event. Employees sitting on the robot side of the
                    stadium are reminded that robots too seek human brains and these employees are not immune to the
                    need for neurological protection. Let's not have a repetition of Candice from the Department of
                    Lasers and Wombats.</p>
                    <p>Phil in accounting is offering to run a wager pool again this year. Place your bets with him
                    before the beginning of the games.</p>
                    <p>Don't be late!</p>
                    Evil HR
                    `
                }

            ]
        }},
    methods: {}
}



window.addEventListener("load", () => {led(0); setup(PlansApp)});