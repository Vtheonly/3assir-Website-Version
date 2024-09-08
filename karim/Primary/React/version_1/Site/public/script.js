let contacts;
let longitude;
let latitude;
let map;

document.addEventListener("DOMContentLoaded", () => {
    function initMap() {
        map = L.map('map').setView([0, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    function loadContacts() {
        contacts = document.querySelectorAll(".cnt-btn");
        // contacts[0].click()
        if (!contacts.length) {
            setTimeout(loadContacts, 100);
            return;
        }
        setupListeners();
        initMap();

        contacts.forEach((contact) => {
            contact.addEventListener("click", () => {
                longitude = parseFloat(contact.parentElement.parentElement.querySelector("#longittude").innerText);
                latitude = parseFloat(contact.parentElement.parentElement.querySelector("#latitude").innerText);
                let phone = contact.parentElement.parentElement.querySelector("#phone");
                let description = contact.parentElement.parentElement.querySelector("#description");
                let fullname = contact.parentElement.parentElement.querySelector("#name");
                if (!isNaN(latitude) && !isNaN(longitude)) {
                    map.setView([latitude, longitude], 13);
                    L.marker([latitude, longitude]).addTo(map);
                    map.invalidateSize();
                } else {
                    console.error("Invalid latitude or longitude");
                }


                document.querySelector("#resname").innerText = fullname.innerText;
                document.querySelector("#resphone").innerText = phone.innerText;
                document.querySelector("#resdescription").innerText = description.innerText;



            })
        })
    }

    function setupListeners() {

        const whereBtn = document.querySelector("#root > div > div > div.result > div:nth-child(1) > div.details > div.detail.where");
        const mapContainer = document.querySelector("#root > div > div > div.result > div.map");
        const exit = document.querySelector("#map > span");
        const search_button = document.querySelector("#root > div > div.searchBarSect > button");
        const SearchLoaction = document.querySelector("#root > div > div.searchBarSect > input.Near");
        const SearchPrice = document.querySelector("#root > div > div.searchBarSect > input.MaxPrice");

        search_button.addEventListener("click", (event) => {
            var maxPrice = document.querySelector("#root > div > div.searchBarSect > input.MaxPrice").value;
            var nearLocation = document.querySelector("#root > div > div.searchBarSect > input.Near").value.toLowerCase();
        
            var userItems = document.getElementsByClassName('user_item');
        
            // Remove the ".hide" class from all user items
            Array.from(userItems).forEach(userItem => {
                userItem.classList.remove('hide');
            });
        
            // Add the ".hide" class to the user items that meet the criteria
            Array.from(userItems).forEach(userItem => {
                var priceElement = userItem.getElementsByClassName('priceS')[0];
                var priceText = priceElement.innerText;
                var price = parseInt(priceText.split(' ')[0]);
        
                var locationElement = userItem.getElementsByClassName('location')[0];
                var location = locationElement.innerText.toLowerCase();
        
                if ((maxPrice && price > maxPrice) || (nearLocation && location.indexOf(nearLocation) === -1)) {
                    userItem.classList.add('hide');
                }
            });
        });
        






        if (!whereBtn || !mapContainer) {
            setTimeout(setupListeners, 100);
            return;
        }



        whereBtn.addEventListener("click", (event) => {
            event.preventDefault();
            mapContainer.classList.toggle("active");
            if (mapContainer.classList.contains("active")) {
                map.invalidateSize();
            }
        });

        exit.addEventListener("click", (event) => {
            event.preventDefault();
            if (event.target === exit) {
                mapContainer.classList.toggle("active");
            }
        });

    }

    loadContacts();
});

