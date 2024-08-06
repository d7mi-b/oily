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
                        <a href="/pages/about">من نحن؟</a>
                    </li>
                    <li>
                        <a href="/#services">الخدمات</a>
                    </li>
                    <li>
                        <a href="/pages/products">المنتجات</a>
                    </li>
                </ul>
            </ul>

            <section>
                
            </section>
        </nav>
    `;

    header.innerHTML = navbar;
}

export default Navbar;