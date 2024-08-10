const Pagination = (api, total) => {
    const urlParams = new URLSearchParams(window.location.search);
    let current = +urlParams.get('page') > 0 ? +urlParams.get('page') : 1;
    console.log(current);

    const pagination = document.createElement('ul');
    pagination.classList.add('pagination');

    const startBtn = document.createElement('li');
    startBtn.innerHTML = `
        <a class="center" href="${api + '?page=1'}">
            <i class="fi fi-ts-angle-double-small-right"></i>
        </a>
    `;

    const previousBtn = document.createElement('li');
    previousBtn.innerHTML = `
        <a class="center" href="${api + '?page=' + (current > 1 ? current - 1 : current)}">
            <i class="fi fi-ts-angle-small-right"></i>
        </a>
    `;

    const endBtn = document.createElement('li');
    endBtn.innerHTML = `
        <a class="center" href="${api}?page${total}">
            <i class="fi fi-ts-angle-double-small-left"></i>
        </a>
    `;

    const nextBtn = document.createElement('li');
    nextBtn.innerHTML = `
        <a class="center" href="${api + '?page=' + (current < total ? current + 1 : current)}">
            <i class="fi fi-ts-angle-small-left"></i>
        </a>
    `;

    pagination.append(startBtn);
    pagination.append(previousBtn);

    for (let i = 1; i <= total; i++) {
        const pageBtn = document.createElement("li");

        if (current === i)
            pageBtn.classList.add('active');

        pageBtn.innerHTML = `
            <a class="center" href="${api + '?page=' + i}">
                ${i}
            </a>
        `;

        pagination.append(pageBtn);
    }

    pagination.append(nextBtn);
    pagination.append(endBtn);

    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.append(pagination);
}

export default Pagination;