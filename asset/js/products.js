const products = [
    {
        id: 1,
        product: "خوذة سلامة نظام أمريكي بفتحات تهوئة متوفرة بعدة الوان",
        img: "Image"
    },
    {
        id: 2,
        product: "سماعة سلامة من شركة 3M الأمريكية",
        img: "Image-3"
    },
    {
        id: 3,
        product: "سترة سلامة أحترافية متينة مصممة بجيبوب وسحاب لون فسفوري",
        img: "Image-6"
    },
    {
        id: 4,
        product: "قناع لحام",
        img: "Image-9"
    },
    {
        id: 5,
        product: "طفاية حريق بودرة حجم 2 كيلو لمكافحة جميع أنواع الحرائق ",
        img: "Image-1"
    },
    {
        id: 6,
        product: "كرة اطفاء الحريق الرهيبة تعمل على اطفاء الحريق فور اندلاعه",
        img: "Image-4"
    },
    {
        id: 7,
        product: "قفازات يد منقطّة مبطنة بالقطن PVC",
        img: "Image-7"
    },
    {
        id: 8,
        product: "طفاية حريق بودرة 6 كيلو اتوماتيك",
        img: "Image-10"
    },
    {
        id: 9,
        product: "صندوق طفاية حريق مناسب للحفاظ على طفاية 6 كيلو بودرة ",
        img: "Image-2"
    },
    {
        id: 10,
        product: "كاشف دخان بطارية لا سلكي يصدر صافرات أنذار تنبهية بداية انتشار الحريق",
        img: "Image-5"
    },
    {
        id: 11,
        product: "نظارة سلامة من شركة 3M الأمريكية متعددة الاستخدامات ",
        img: "Image-8"
    },
    {
        id: 12,
        product: "اضاءة طرق - طاقة شمسية - لونين",
        img: "Image-11"
    },
];

const productsContainer = document.getElementById('products-container');

products.forEach(e => {
    productsContainer.innerHTML += `
        <article class="product card" key="${e.id}">
            <section class="img center">
                <img src="/asset/images/${e.img}.png" alt="product's image">
            </section>

            <p>${e.product}</p>
        </article>
    `;
})