
//page.js

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-section">
                            <img src="path_to_logo.png" alt="CocoSmile Logo" className="footer-logo" />
                            <h3>Why We Exist?</h3>
                            <p>We Recognized A Gap In The Market For Children Water Cups, CocoSmile Is Dedicated To Providing
                                High-Quality And Unique Water Cups For Children And Adults Alike. Join Us In The Movement To Sip
                                -
                                In - Style With CocoSmile!</p>

                        </div>
                        <div className="footer-section">
                            <h3>Customer Support</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Term Of Use</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Order Status</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Follow Us On</h3>
                            <ul className="d-flex p-0 social-icons" role="list">
                                <li className="social-media__item social-media__item--facebook">
                                    <a href="https://www.facebook.com/cocosmilecups/" target="_blank" rel="noopener"
                                        className="social-media__link" aria-label="Follow us on Facebook">
                                        <svg focusable="false"
                            width="9" height="17" className="icon icon--facebook   " viewBox="0 0 9 17">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M2.486 16.2084L2.486 8.81845H0L0 5.93845L2.486 5.93845L2.486 3.81845C2.38483 2.79982 2.73793 1.78841 3.45107 1.05407C4.16421 0.319722 5.16485 -0.0628415 6.186 0.00844868C6.9284 0.00408689 7.67039 0.0441585 8.408 0.128449V2.69845L6.883 2.69845C6.4898 2.61523 6.08104 2.73438 5.79414 3.01585C5.50724 3.29732 5.3803 3.70373 5.456 4.09845L5.456 5.93845H8.308L7.936 8.81845H5.46L5.46 16.2084H2.486Z"
                                fill="currentColor"></path>
                        </svg>
                                    </a>
                                </li>
                                <li className="social-media__item social-media__item--instagram">
                                    <a href="https://www.instagram.com/cocosmilecups/" target="_blank" rel="noopener"
                                        className="social-media__link" aria-label="Follow us on Instagram">
                                        <svg focusable="false"
                            width="16" height="16" className="icon icon--instagram   " viewBox="0 0 16 16">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8 0C5.827 0 5.555.01 4.702.048 3.85.087 3.269.222 2.76.42a3.921 3.921 0 00-1.417.923c-.445.444-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.942C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.719 1.417.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 001.417-.923c.445-.444.719-.89.923-1.417.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 00-.923-1.417A3.921 3.921 0 0013.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.479 2.479 0 01-.92-.598 2.478 2.478 0 01-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047zm0 9.226a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-6.775a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm5.23-.162a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"
                                fill="currentColor"></path>
                        </svg>
                                    </a>
                                </li>
                                <li className="social-media__item social-media__item--youtube">
                                    <a href="https://www.youtube.com/@cocosmilecups" target="_blank" rel="noopener"
                                        className="social-media__link" aria-label="Follow us on YouTube">
                                        <svg fill="none"
                            focusable="false" width="18" height="13" className="icon icon--youtube   "
                            viewBox="0 0 18 13">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M16.0325 0.369454C16.807 0.572743 17.4168 1.17173 17.6238 1.9324C18 3.31101 18 6.1875 18 6.1875C18 6.1875 18 9.06389 17.6238 10.4427C17.4168 11.2033 16.807 11.8023 16.0325 12.0056C14.6288 12.375 9 12.375 9 12.375C9 12.375 3.37122 12.375 1.96752 12.0056C1.19311 11.8023 0.583159 11.2033 0.376159 10.4427C0 9.06389 0 6.1875 0 6.1875C0 6.1875 0 3.31101 0.376159 1.9324C0.583159 1.17173 1.19311 0.572743 1.96752 0.369454C3.37122 0 9 0 9 0C9 0 14.6288 0 16.0325 0.369454ZM11.8636 6.1876L7.1591 8.79913V3.57588L11.8636 6.1876Z"
                                fill="currentColor"></path>
                        </svg>
                                    </a>
                                </li>
                                <li className="social-media__item social-media__item--tiktok">
                                    <a href="https://www.tiktok.com/@cocosmilecups" target="_blank" rel="noopener"
                                        className="social-media__link" aria-label="Follow us on TikTok">
                                        <svg fill="none"
                            focusable="false" width="14" height="16" className="icon icon--tiktok   "
                            viewBox="0 0 14 16">
                            <path
                                d="M13.6893 6.47331C13.5586 6.48602 13.4273 6.49268 13.296 6.49327C11.8552 6.49347 10.5114 5.76723 9.72211 4.56182V11.1389C9.72211 13.8236 7.54571 16 4.86099 16C2.17627 16 -0.00012207 13.8236 -0.00012207 11.1389C-0.00012207 8.45417 2.17627 6.27777 4.86099 6.27777C4.96247 6.27777 5.06166 6.28689 5.16143 6.29317V8.68866C5.06166 8.67669 4.96361 8.65845 4.86099 8.65845C3.49077 8.65845 2.37998 9.76923 2.37998 11.1395C2.37998 12.5097 3.49077 13.6205 4.86099 13.6205C6.23148 13.6205 7.44177 12.5407 7.44177 11.1702L7.46571 0H9.75745C9.97355 2.05512 11.6307 3.66035 13.6916 3.81102V6.47331"
                                fill="currentColor"></path>
                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Newsletter</h3>
                            <p>GET 10% OFF TO YOUR NEXT ORDER</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Your Email" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <button className="currency-button">USD $ <span>&#x25BC;</span></button>
                            <p>All Rights Reserved CocoSmile Cups - 2024</p>
                        </div>
                        <div className="payment-icons">
                            <p>We Accept</p>
                            <div className="payment-methods-list payment-methods-list--auto">

                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24"
                    aria-labelledby="pi-amazon">
                    <title id="pi-amazon">Amazon</title>
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        fill="#000" fillRule="nonzero" opacity=".07"></path>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                        fill="#FFF" fillRule="nonzero"></path>
                    <path
                        d="M25.26 16.23c-1.697 1.48-4.157 2.27-6.275 2.27-2.97 0-5.644-1.3-7.666-3.463-.16-.17-.018-.402.173-.27 2.183 1.504 4.882 2.408 7.67 2.408 1.88 0 3.95-.46 5.85-1.416.288-.145.53.222.248.47v.001zm.706-.957c-.216-.328-1.434-.155-1.98-.078-.167.024-.193-.148-.043-.27.97-.81 2.562-.576 2.748-.305.187.272-.047 2.16-.96 3.063-.14.138-.272.064-.21-.12.205-.604.664-1.96.446-2.29h-.001z"
                        fill="#F90" fillRule="nonzero"></path>
                    <path
                        d="M21.814 15.291c-.574-.498-.676-.73-.993-1.205-.947 1.012-1.618 1.315-2.85 1.315-1.453 0-2.587-.938-2.587-2.818 0-1.467.762-2.467 1.844-2.955.94-.433 2.25-.51 3.25-.628v-.235c0-.43.033-.94-.208-1.31-.212-.333-.616-.47-.97-.47-.66 0-1.25.353-1.392 1.085-.03.163-.144.323-.3.33l-1.677-.187c-.14-.033-.296-.153-.257-.38.386-2.125 2.223-2.766 3.867-2.766.84 0 1.94.234 2.604.9.842.82.762 1.918.762 3.11v2.818c0 .847.335 1.22.65 1.676.113.164.138.36-.003.482-.353.308-.98.88-1.326 1.2a.367.367 0 0 1-.414.038zm-1.659-2.533c.34-.626.323-1.214.323-1.918v-.392c-1.25 0-2.57.28-2.57 1.82 0 .782.386 1.31 1.05 1.31.487 0 .922-.312 1.197-.82z"
                        fill="#221F1F"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express"
                    viewBox="0 0 38 24" width="38" height="24">
                    <title id="pi-american_express">American Express</title>
                    <path fill="#000"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                        opacity=".07"></path>
                    <path fill="#006FCF"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path>
                    <path fill="#FFF"
                        d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z">
                    </path>
                    <path fill="#006FCF"
                        d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z">
                    </path>
                    <path fill="#006FCF"
                        d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z">
                    </path>
                    <path fill="#FFF"
                        d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z">
                    </path>
                    <path fill="#006FCF"
                        d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z">
                    </path>
                    <path fill="#006FCF"
                        d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z">
                    </path>
                </svg>


                


                <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title id="pi-discover">Discover</title>
                    <path fill="#000" opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
                    </path>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                        fill="#fff"></path>
                    <path
                        d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                        fill="#231F20"></path>
                    <path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                        fill="url(#pi-paint0_linear)"></path>
                    <path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                        fill="url(#pi-paint1_linear)"></path>
                    <path
                        d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                        fill="#231F20"></path>
                    <path
                        d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                        fill="#231F20"></path>
                    <path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                        fill="#F48120"></path>
                    <defs>
                        <linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F89F20"></stop>
                            <stop offset=".25" stopColor="#F79A20"></stop>
                            <stop offset=".533" stopColor="#F68D20"></stop>
                            <stop offset=".62" stopColor="#F58720"></stop>
                            <stop offset=".723" stopColor="#F48120"></stop>
                            <stop offset="1" stopColor="#F37521"></stop>
                        </linearGradient>
                        <linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F58720"></stop>
                            <stop offset=".359" stopColor="#E16F27"></stop>
                            <stop offset=".703" stopColor="#D4602C"></stop>
                            <stop offset=".982" stopColor="#D05B2E"></stop>
                        </linearGradient>
                    </defs>
                </svg>

                <svg width="38" height="24" role="img" aria-labelledby="pi-metapay" viewBox="0 0 38 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title id="pi-metapay">Meta Pay</title>
                    <path opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        fill="#000"></path>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                        fill="#fff"></path>
                    <path
                        d="M4.983 12.986c0 .348.076.614.176.776a.6.6 0 00.524.3c.257 0 .491-.063.943-.688.362-.5.788-1.204 1.076-1.645l.486-.747c.337-.518.728-1.095 1.176-1.486.366-.319.76-.496 1.158-.496.667 0 1.302.386 1.788 1.111.532.794.79 1.793.79 2.825 0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688v-.981c.558 0 .697-.513.697-1.1 0-.836-.195-1.764-.624-2.427-.305-.47-.7-.757-1.134-.757-.47 0-.848.354-1.274.986-.226.336-.457.745-.718 1.207l-.287.508c-.576 1.02-.722 1.254-1.01 1.637-.504.672-.935.927-1.502.927-.674 0-1.1-.291-1.363-.73C4.106 13.956 4 13.486 4 12.95l.983.035z"
                        fill="#0081FB"></path>
                    <path
                        d="M4.775 10.18C5.225 9.486 5.875 9 6.622 9c.432 0 .861.128 1.31.494.49.4 1.013 1.06 1.665 2.146l.234.39c.565.94.886 1.424 1.074 1.652.242.293.411.38.631.38.558 0 .697-.512.697-1.099l.867-.027c0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688-.405 0-.764-.088-1.16-.462-.306-.287-.663-.798-.937-1.257l-.816-1.363c-.41-.684-.785-1.194-1.003-1.425-.234-.249-.534-.549-1.014-.549-.388 0-.718.273-.994.69l-.837-.498z"
                        fill="url(#pi-paint0_linear_1164_3)"></path>
                    <path
                        d="M6.606 9.988c-.388 0-.718.273-.994.69-.39.588-.629 1.466-.629 2.308 0 .348.076.614.176.776l-.838.552C4.106 13.956 4 13.486 4 12.95c0-.973.267-1.987.775-2.77C5.225 9.485 5.875 9 6.622 9l-.016.988z"
                        fill="url(#pi-paint1_linear_1164_3)"></path>
                    <path
                        d="M15.01 9.191h1.138l1.933 3.498 1.934-3.498h1.112v5.747h-.928v-4.405l-1.695 3.05h-.87l-1.696-3.05v4.405h-.927V9.191zm9.023 2.143c-.665 0-1.066.5-1.162 1.12h2.258c-.046-.638-.415-1.12-1.096-1.12zm-2.081 1.474c0-1.305.843-2.254 2.097-2.254 1.234 0 1.971.937 1.971 2.323v.255h-3.148c.111.674.559 1.129 1.28 1.129.576 0 .936-.176 1.277-.497l.493.603c-.465.427-1.055.674-1.803.674-1.358 0-2.167-.99-2.167-2.233zm5.193-1.392h-.854v-.76h.854V9.402h.895v1.256h1.297v.76H28.04v1.924c0 .657.21.89.726.89.236 0 .371-.02.57-.053v.752c-.248.07-.485.102-.742.102-.966 0-1.45-.528-1.45-1.584v-2.032zm5.96.739a1.207 1.207 0 00-1.17-.788c-.766 0-1.256.543-1.256 1.428 0 .863.451 1.433 1.22 1.433.603 0 1.034-.351 1.206-.788v-1.285zM34 14.938h-.878v-.6c-.246.353-.693.703-1.417.703-1.164 0-1.941-.975-1.941-2.246 0-1.283.796-2.241 1.99-2.241.591 0 1.055.236 1.368.653v-.55H34v4.281z"
                        fill="#000000"></path>
                    <defs>
                        <linearGradient id="pi-paint0_linear_1164_3" x1="5.93" y1="12.703" x2="12.196"
                            y2="13.019" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0064E1"></stop>
                            <stop offset=".4" stopColor="#0064E1"></stop>
                            <stop offset=".83" stopColor="#0073EE"></stop>
                            <stop offset="1" stopColor="#0082FB"></stop>
                        </linearGradient>
                        <linearGradient id="pi-paint1_linear_1164_3" x1="5.424" y1="13.399" x2="5.424"
                            y2="11.089" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0082FB"></stop>
                            <stop offset="1" stopColor="#0064E0"></stop>
                        </linearGradient>
                    </defs>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24"
                    aria-labelledby="pi-google_pay">
                    <title id="pi-google_pay">Google Pay</title>
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        fill="#000" opacity=".07"></path>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                        fill="#FFF"></path>
                    <path
                        d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                        fill="#5F6368"></path>
                    <path
                        d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                        fill="#4285F4"></path>
                    <path
                        d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                        fill="#34A853"></path>
                    <path
                        d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                        fill="#FBBC04"></path>
                    <path
                        d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                        fill="#EA4335"></path>
                </svg>


                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24"
                    aria-labelledby="pi-master">
                    <title id="pi-master">Mastercard</title>
                    <path opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
                    </path>
                    <path fill="#fff"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                    <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                    <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                    <path fill="#FF5F00"
                        d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z">
                    </path>
                </svg>

                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img"
                    aria-labelledby="pi-paypal">
                    <title id="pi-paypal">PayPal</title>
                    <path opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
                    </path>
                    <path fill="#fff"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                    <path fill="#003087"
                        d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z">
                    </path>
                    <path fill="#3086C8"
                        d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z">
                    </path>
                    <path fill="#012169"
                        d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z">
                    </path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24"
                    aria-labelledby="pi-shopify_pay">
                    <title id="pi-shopify_pay">Shop Pay</title>
                    <path opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        fill="#000"></path>
                    <path
                        d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z"
                        fill="#5A31F4"></path>
                    <path
                        d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z"
                        fill="#fff"></path>
                </svg>


                <svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg" role="img"
                    aria-labelledby="pi-venmo">
                    <title id="pi-venmo">Venmo</title>
                    <g fill="none" fillRule="evenodd">
                        <rect fillOpacity=".07" fill="#000" width="38" height="24" rx="3"></rect>
                        <path fill="#3D95CE"
                            d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32">
                        </path>
                        <path
                            d="M24.675 8.36c0 3.064-2.557 7.045-4.633 9.84h-4.74L13.4 6.57l4.151-.402 1.005 8.275c.94-1.566 2.099-4.025 2.099-5.702 0-.918-.154-1.543-.394-2.058l3.78-.783c.437.738.634 1.499.634 2.46z"
                            fill="#FFF" fillRule="nonzero"></path>
                    </g>
                </svg>


                <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24"
                    aria-labelledby="pi-visa">
                    <title id="pi-visa">Visa</title>
                    <path opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z">
                    </path>
                    <path fill="#fff"
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                    <path
                        d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                        fill="#142688"></path>
                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
