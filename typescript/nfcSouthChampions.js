var nfcSouthChampionsMainSection = document.getElementById("nfc-south-champions-main-section");
var nfcSouthChampionsYearDropdown = document.getElementById("nfc-south-champions-year-dropdown");
var buccaneersHelmet = document.createElement("img");
buccaneersHelmet.src = "../helmets/buccaneers_helmet.png";
var panthersHelmet = document.createElement("img");
panthersHelmet.src = "../helmets/panthers_helmet.png";
var falconsHelmet = document.createElement("img");
falconsHelmet.src = "../helmets/falcons_helmet.png";
var saintsHelmet = document.createElement("img");
saintsHelmet.src = "../helmets/saints_helmet.png";
var container = document.createElement("div");
nfcSouthChampionsYearDropdown.addEventListener("change", function () {
    var selectedYear = nfcSouthChampionsYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "2002":
            container.appendChild(buccaneersHelmet);
            break;
        case "2003":
            container.appendChild(panthersHelmet);
            break;
        case "2004":
            container.appendChild(falconsHelmet);
            break;
        case "2005":
            container.appendChild(buccaneersHelmet);
            break;
        case "2006":
            container.appendChild(saintsHelmet);
            break;
        case "2007":
            container.appendChild(buccaneersHelmet);
            break;
        case "2008":
            container.appendChild(panthersHelmet);
            break;
        case "2009":
            container.appendChild(saintsHelmet);
            break;
        case "2010":
            container.appendChild(falconsHelmet);
            break;
        case "2011":
            container.appendChild(saintsHelmet);
            break;
        case "2012":
            container.appendChild(falconsHelmet);
            break;
        case "2013":
            container.appendChild(panthersHelmet);
            break;
        case "2014":
            container.appendChild(panthersHelmet);
            break;
        case "2015":
            container.appendChild(panthersHelmet);
            break;
        case "2016":
            container.appendChild(falconsHelmet);
            break;
        case "2017":
            container.appendChild(saintsHelmet);
            break;
        case "2018":
            container.appendChild(saintsHelmet);
            break;
        case "2019":
            container.appendChild(saintsHelmet);
            break;
        case "2020":
            container.appendChild(saintsHelmet);
            break;
        case "2021":
            container.appendChild(buccaneersHelmet);
            break;
        case "2022":
            container.appendChild(buccaneersHelmet);
            break;
        case "2023":
            container.appendChild(buccaneersHelmet);
            break;
        case "2024":
            container.appendChild(buccaneersHelmet);
            break;
    }
});
nfcSouthChampionsMainSection.appendChild(container);
var defaultYear = "2002";
nfcSouthChampionsYearDropdown.value = defaultYear;
nfcSouthChampionsYearDropdown.dispatchEvent(new Event("change"));
