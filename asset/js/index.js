import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';

Navbar();
Footer();

const slider = document.getElementsByClassName('slider')[0];

setInterval(() => {
    let slides = document.querySelectorAll(".hero-slide");

    slider.append(slides[0]);

    slides.forEach(e => {
        e.classList.toggle('zoom-in');
        e.classList.toggle('zoom-out');
    })
}, [7000])

const services = [
    {
        id: 1,
        service: "تركيب نظام مضخات الحريق ",
        img: "Frame"
    },
    {
        id: 2,
        service: "تركيب نظام انذار الحرائق",
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
    }
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

const customersContainers = document.querySelectorAll('.customers-container');

customersContainers.forEach((customersContainer) => {
    customers.forEach(e => {
        customersContainer.innerHTML += `
            <section class="customer center" title="${e.name}">
                <img src="./asset/images/${e.logo}.png" alt="Customer's logo">
            </section>
        `;
    });
})

const customersContainerCards = document.querySelectorAll('.customers-container');

if (customersContainerCards.length > 0) {
    customersContainerCards.forEach((card, index) => {
        // card.style.cssText = `animation-delay: -${index}s;`;
    })
}

const servicesContainerTopOffset = servicesContainer.offsetTop;

window.addEventListener('scroll', () => {
    const scrollOffset = window.scrollY;

    if (scrollOffset + 300 > servicesContainerTopOffset) {
        const cards = document.querySelectorAll('#services-container .service');

        cards.forEach(e => e.classList.add('showing'));
    }
})