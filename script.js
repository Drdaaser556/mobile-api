function handleSearch() {
    loaddingAnimationToggle(true);
    const searchInputElement = document.getElementById("search-input-field");
    const searchInputValue = searchInputElement.value;

    loadPhone(searchInputValue);
}

function loaddingAnimationToggle(isLoading) {
    const loaderAnimation = document.getElementById("loader-animation");
    if (isLoading) {
        loaderAnimation.classList.remove("hidden");
    } else {
        loaderAnimation.classList.add("hidden");
    }
}

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    console.log("Server Response: ", res);
    const searverData = await res.json();
    
    displayPhone(searverData.data);
};

const displayPhone = (data) => {
    console.log(data);
    const cardContainer = document.getElementById("card-section");
    cardContainer.innerHTML = ""; 

   data.forEach(phone => {
       const productCard = document.createElement("div");
       productCard.classList.add("col");
       
       productCard.innerHTML = `
       <div class="card-image">
                    <img src=${phone.image} alt="phone image">
                </div>

                <h3 class="card-title">${phone.phone_name}</h3>
                <p class="card-description">
                    There are many variations of passages available. but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look even slightly believable.
                </p>

                <div class="card-price">
                    <span>$</span>
                    <span id="card-item-price">999</span>
                </div>
                <div class="card-button">
                    <button class="btn">
                        Show Details
                    </button>
                </div>`;
       console.log("Product Card: ", productCard);
    cardContainer.appendChild(productCard);
   });
    loaddingAnimationToggle(false);
}