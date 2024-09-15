const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// SUBTITLE
const lengthCountries = countries.length;
const subtitle = document.querySelector(".subtitle");
subtitle.innerHTML = "Total Number Of Countries: " + lengthCountries;

// BUTTONS
const buttonFirstWord = document.querySelector(".button-st");
const buttonAnyWord = document.querySelector(".button-aw");
const buttonOrder = document.querySelector(".button-order");
const input = document.querySelector("input");

// COUNTER
const counting = document.querySelector(".counting");

// DIV FATHER
const divFather = document.querySelector(".wrapper");

// funcion
function countriesList(arr) {
  for (let key in arr) {
    let div = document.createElement("div");
    div.className = "countrie";
    div.innerHTML = arr[key];
    divFather.appendChild(div);
  }
}

// EVENTS
const search = document.querySelector(".search");
search.addEventListener("keyup", (e) => {
  let count = 0;
  document.querySelectorAll(".countrie").forEach((element) => {
    let value = element.textContent.toLowerCase();
    let valueTwo = value.includes(e.target.value);
    if (valueTwo) {
      element.classList.remove("filter");
      count++;
    } else {
      element.classList.add("filter");
    }
    counting.innerHTML =
      "Countries countainig " + search.value + " are " + count;
  });
  if (buttonFirstWord.checked) {
    count = 0;
    document.querySelectorAll(".countrie").forEach((element) => {
      let value = element.textContent.toLowerCase();
      let valueTwo = value.startsWith(e.target.value);
      if (valueTwo) {
        element.classList.remove("filter");
        count++;
      } else {
        element.classList.add("filter");
      }
    });
    counting.innerHTML =
      "Countries start with " + search.value + " are " + count;
  } else if (search.value === "") {
    counting.innerHTML = "";
  }
});

buttonOrder.addEventListener("change", (e) => {
  divFather.innerHTML = "";
  divFather.appendChild(countriesList(countries.reverse()));
});
countriesList(countries);
