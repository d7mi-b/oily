const Navbar = () => {
    const header = document.querySelector('body > header:first-child');
    
    const navbar = `
        <nav class="navbar">
            <ul>
                <li class="center bar responsive">
                    <i class="fi fi-ts-bars-staggered"></i>
                </li>
                <li class="logo center">
                    <img src="/public/logo.png" alt="logo">
                </li>
                <ul>
                    <li>
                        <a href="/">الرئيسية</a>
                    </li>
                    <li>
                        <a href="/pages/about.html">من نحن؟</a>
                    </li>
                    <li>
                        <a href="/pages/products">منتجاتنا</a>
                    </li>
                    <li>
                        <a href="/pages/contact">تواصل معنا</a>
                    </li>
                </ul>
            </ul>

            <section class="icons">
                <a href="/"><i class="fi fi-brands-instagram"></i></a>
                <a href="/"><i class="fi fi-brands-youtube"></i></a>
                <a href="/"><i class="fi fi-brands-twitter-alt-circle"></i></a>
                <a href="/"><i class="fi fi-brands-facebook"></i></a>
            </section>
        </nav>
    `;

    header.innerHTML = navbar;
}

export default Navbar;