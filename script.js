let productList = document.querySelector("#product-list");
        const searchInput = document.querySelector("#search-input");
        const searchBtn = document.querySelector("#search-btn");
        const categoryBtns = document.querySelectorAll(".category-btn");

        let filterProduct = () => {
            const searchValue = searchInput.value.toLowerCase();
            const productItems = document.querySelectorAll(".product-item");
            const activeCategory = document.querySelector(".category-btn.active").dataset.category;

            productItems.forEach(item => {
                const productName = item.querySelector("h3").innerText.toLowerCase();
                const category = item.dataset.category;
                if ((productName.includes(searchValue) || searchValue === "") &&
                    (category === activeCategory || activeCategory === "all")) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        }

        let setCategory = (e) => {
            categoryBtns.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            filterProduct();
        }

        searchBtn.addEventListener("click", filterProduct);
        searchInput.addEventListener("keyup", filterProduct);
        categoryBtns.forEach(btn => {
            btn.addEventListener("click", setCategory);
        });

        filterProduct();