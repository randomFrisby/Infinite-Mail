const userHomeComponent = () => {
    return `<!-- Static home page here  -->
            <nav>
                <div id="left" class="page-title">Welcome!</div>
                <div id="right">
                    <button id="demo-btn" class="btn btn-outline-primary">Book a demo</button>
                </div>
            </nav>
            <div id="box-section">
                <!-- SANBOX  -->
                <div id="sanbox" class="box-layout">
                    <img src="https://assets.mailtrap.io/packs/assets/media/sandbox-inactive-74f82ada44702b76a860.svg" alt="">
                    <div class="title">
                        <div>
                            <h1>Sandbox</h1>
                            <p class="lg-clr-text">Test Emails on Staging</p>
                        </div>
                        <div>
                            <a href=""><button class="btn btn-primary">Setup Inbox</button></a>
                        </div>
                    </div>
                    <!-- Accordion -->
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item top-bottom-padding">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Fake SMTP Server
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">Capture SMTP traffic from staging and dev environments.</div>
                        </div>
                        </div>
                        <div class="accordion-item top-bottom-padding">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                QA Automation
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">Cover all your testing scenarios with Mailtrap&#39s well-documented API.</div>
                        </div>
                        </div>
                        <div class="accordion-item top-bottom-padding">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Preview and validate HTML/CSS
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">View messages, check spam scores, validate headers. Check the HTML & CSS support for top email clients.</div>
                        </div>
                        </div>
                        <div class="accordion-item top-bottom-padding">
                            <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Inbox email address
                            </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">Dedicated email address for each of your Inboxes to send messages from other email accounts or from your application.</div>
                            </div>
                        </div>
                    </div>
                    <!-- End of Accordion -->
                </div>
                <!-- End of Sandbox  -->

                <!-- --------------------------------------- -->

                <!-- EMAIL API BOX  -->
                <div id="email-api" class="box-layout">
                    <img src="https://assets.mailtrap.io/packs/assets/media/email-api-inactive-2b963546ca2b49da77d3.svg" alt="">
                    <div class="title">
                        <div>
                            <h1>Email API</h1>
                            <p class="lg-clr-text">Send Emails on Production</p>
                        </div>
                        <div>
                            <a href=""><button class="btn btn-primary">Setup Domain</button></a>
                        </div>
                    </div>
                    <!-- Accordion -->
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item top-bottom-padding">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                SMTP Service, API/SDK
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">Integrate with our scalable cloud MTA cluster to send your production emails. Well-documented API compatible with common email providers.</div>
                        </div>
                        </div>
                        <div class="accordion-item top-bottom-padding">
                        <h2 class="accordion-header" id="flush-headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                SPF, DKIM, DMARC, Dedicated IP
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">SPF, DKIM, DMARC configuration aligned with major mailbox providers (GMail, Outlook, ProtonMail, Yahoo, etc.). Dedicated IPs. Support and monitoring by deliverability experts.</div>
                        </div>
                        </div>
                        <div class="accordion-item top-bottom-padding">
                        <h2 class="accordion-header" id="flush-headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                Deliverability Alerts
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">Special alerts similar to servers performance monitoring. Triggered by drop in vital metrics such as bounces, open, click and spam rates.</div>
                        </div>
                        </div>
                        <div class="accordion-item top-bottom-padding">
                            <h2 class="accordion-header" id="flush-headingEight">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                Email content and logs
                            </button>
                            </h2>
                            <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lg-clr-text">60 days of content retention. Detailed diagnostic logs. Rich filters. History of events. Email preview. Spam and blocklist analysis.</div>
                            </div>
                        </div>
                    </div>
                    <!-- End of Accordion -->
                </div>
            <!-- End of Email-API box -->
            </div>
            <!-- End of box-section div -->
        </div>`;
};

export default userHomeComponent;