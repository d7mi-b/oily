import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';

Navbar();
Footer();

const services = [
    {
        id: 1,
        service: "نظام مضخات الحريق",
        img: "Frame"
    },
    {
        id: 2,
        service: "نظام انذار الحرائق",
        img: "Frame-2"
    },
    {
        id: 3,
        service: "نظام مكافحة الحرائق",
        img: "Group-1"
    },
    {
        id: 4,
        service: "سيارة إطفاء",
        img: "Frame-3"
    },
    {
        id: 5,
        service: "السلامة البحرية",
        img: "Group 1875"
    },
    {
        id: 6,
        service: "معدات السلامة",
        img: "Frame-1"
    },
    {
        id: 7,
        service: "الحلول الهندسية",
        img: "Frame-4"
    },
    {
        id: 8,
        service: "ادوات المختبر",
        img: "Group 1876"
    },
    {
        id: 9,
        service: "نظام المراقة",
        img: "Group"
    },
];

const servicesContainer = document.getElementById('services-container');

services.forEach(e => {
    servicesContainer.innerHTML += `
        <article class="service" key=${e.id}>
            <section class="icon center">
                <img src="./asset/icons/${e.img}.svg" alt="icon">
            </section>

            <header>
                <h3>${e.service}</h3>
            </header>
        </article>
    `;
});

const customers = [
    {
        id: 1,
        name: "نما",
        logo: "Gov_Logo-5"
    },
    {
        id: 2,
        name: "وزارة الصناعة والثروة المعدنية",
        logo: "Gov_Logo-4"
    },
    {
        id: 3,
        name: "اعتماد",
        logo: "Gov_Logo-3"
    },
    {
        id: 4,
        name: "سكني",
        logo: "Gov_Logo-2"
    },
    {
        id: 5,
        name: "ايجار",
        logo: "Gov_Logo-1"
    },
    {
        id: 6,
        name: "وزارة الإستثمار",
        logo: "Gov_Logo"
    },
];

const customersContainer = document.getElementById('customers-container');

customers.forEach(e => {
    customersContainer.innerHTML += `
        <section class="customer center" title="${e.name}">
            <img src="./asset/images/${e.logo}.png" alt="Customer's logo">
        </section>
    `;
})

const servicesContainerTopOffset = servicesContainer.offsetTop;

window.addEventListener('scroll', () => {
    const scrollOffset = window.scrollY;

    if (scrollOffset + 300 > servicesContainerTopOffset) {
        const cards = document.querySelectorAll('#services-container .service');

        cards.forEach(e => e.classList.add('showing'));
    }
})