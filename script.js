const data = [
    {
        id: 1,
        title: "Nhà gần biển đẹp",
        city: "Vũng Tàu",
        ward: "Phường 7",
        price: 1.2,
        img: "https://picsum.photos/400/300?1",
        desc: "Nhà gần biển, thoáng mát, thích hợp nghỉ dưỡng"
    },
    {
        id: 2,
        title: "Nhà trung tâm giá tốt",
        city: "Vũng Tàu",
        ward: "Phường 8",
        price: 2.5,
        img: "https://picsum.photos/400/300?2",
        desc: "Gần chợ, trường học, tiện kinh doanh"
    },
    {
        id: 3,
        title: "Biệt thự cao cấp",
        city: "Bà Rịa",
        ward: "Phường 7",
        price: 4.5,
        img: "https://picsum.photos/400/300?3",
        desc: "Biệt thự sang trọng, khu dân cư cao cấp"
    }
];

function render(list) {
    const container = document.getElementById("list");
    container.innerHTML = "";

    list.forEach(item => {
        container.innerHTML += `
        <div class="card" onclick="goDetail(${item.id})">
            <img src="${item.img}">
            <div class="info">
                <h3>${item.title}</h3>
                <p>${item.city} - ${item.ward}</p>
                <p><b>${item.price} tỷ</b></p>
            </div>
        </div>
        `;
    });
}

function filterData() {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const city = document.getElementById("city").value;
    const ward = document.getElementById("ward").value;
    const min = document.getElementById("priceMin").value;
    const max = document.getElementById("priceMax").value;

    let result = data.filter(item =>
        item.title.toLowerCase().includes(keyword)
    );

    if (city) result = result.filter(i => i.city === city);
    if (ward) result = result.filter(i => i.ward === ward);

    if (min) result = result.filter(i => i.price >= min);
    if (max) result = result.filter(i => i.price <= max);

    render(result);
}

function goDetail(id) {
    localStorage.setItem("detail", JSON.stringify(data.find(i => i.id === id)));
    window.location = "detail.html";
}

render(data);