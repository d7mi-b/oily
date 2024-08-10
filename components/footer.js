const Footer = () => {
    const footer = document.querySelector('body > footer');
    
    const innerFooter = `
        <section>
            <article>
                <header>
                    <h1>الركن المحترف</h1>
                </header>
                
                <p>أويلـي لمعدات الأمن والسلامة ومكافحة الحرائق حماية فائقة، ضمان جودة.</p>
                <p>في أويلـي، نقدم أحدث حلول الأمن والسلامة لمواجهة جميع التحديات الطارئة.</p>
            </article>

            <section>
                <header>
                    <h1>روابط سريعة</h1>
                </header>

                <ul>
                    <li><a href="/">الرئيسية</a></li>
                    <li><a href="/#services">خدماتنا</a></li>
                    <li><a href="/pages/products">منتجاتنا</a></li>
                </ul>
            </section>

            <section>
                <header>
                    <h1>روابط سريعة</h1>
                </header>

                <ul>
                    <li><a href="/">تحميل البروفايل</a></li>
                    <li><a href="/">سياسة الخدمة</a></li>
                    <li><a href="/">الشروط والأحكام</a></li>
                </ul>
            </section>

            <section>
                <article>
                    <section class="icon center">
                        <i class="fi fi-ts-marker"></i>
                    </section>

                    <section>
                        <header>
                            <h2>مكاننا</h2>
                        </header>

                        <p>حضرموت ، المكلا</p>
                    </section>
                </article>

                <article>
                    <section class="icon center">
                        <i class="fi fi-brands-whatsapp"></i>
                    </section>

                    <section>
                        <header>
                            <h2>واتس اب</h2>
                        </header>

                        <p dir="ltr">+96732000000</p>
                    </section>
                </article>

                <article>
                    <section class="icon center">
                        <i class="fi fi-ts-envelope-open"></i>
                    </section>

                    <section>
                        <header>
                            <h2>البريد الإلكتروني</h2>
                        </header>

                        <p>info@oily.com</p>
                    </section>
                </article>
            </section>
        </section>

        <section>
            <section class="logo center">
                <img src="/public/logo.png" alt="Logo">
            </section>
        </section>

        <section>
            <p> جميع الحقوق محفوظة  ©  2010-2024  |  اويلي لمعدات الامن والسلامة</p>

            <section class="icons">
                <a href="/"><i class="fi fi-brands-instagram"></i></a>
                <a href="/"><i class="fi fi-brands-youtube"></i></a>
                <a href="/"><i class="fi fi-brands-twitter-alt-circle"></i></a>
                <a href="/"><i class="fi fi-brands-facebook"></i></a>
            </section>
        </section>
    `;

    footer.innerHTML = innerFooter;
}

export default Footer;