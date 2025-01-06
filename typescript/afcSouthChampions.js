var afcSouthChampionsMainSection = document.getElementById("afc-south-champions-main-section");
var afcSouthChampionsYearDropdown = document.getElementById("afc-south-champions-year-dropdown");
var titansHelmet = document.createElement("img");
titansHelmet.src = "../helmets/titans_helmet.png";
var coltsHelmet = document.createElement("img");
coltsHelmet.src = "../helmets/colts_helmet.png";
var texansHelmet = document.createElement("img");
texansHelmet.src = "../helmets/texans_helmet.png";
var jaguarsHelmet = document.createElement("img");
jaguarsHelmet.src = "../helmets/jaguars_helmet.png";
var container = document.createElement("div");
afcSouthChampionsYearDropdown.addEventListener("change", function () {
    var selectedYear = afcSouthChampionsYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "2002":
            container.appendChild(titansHelmet);
            break;
        case "2003":
            container.appendChild(coltsHelmet);
            break;
        case "2004":
            container.appendChild(coltsHelmet);
            break;
        case "2005":
            container.appendChild(coltsHelmet);
            break;
        case "2006":
            container.appendChild(coltsHelmet);
            break;
        case "2007":
            container.appendChild(coltsHelmet);
            break;
        case "2008":
            container.appendChild(titansHelmet);
            break;
        case "2009":
            container.appendChild(coltsHelmet);
            break;
        case "2010":
            container.appendChild(coltsHelmet);
            break;
        case "2011":
            container.appendChild(texansHelmet);
            break;
        case "2012":
            container.appendChild(texansHelmet);
            break;
        case "2013":
            container.appendChild(coltsHelmet);
            break;
        case "2014":
            container.appendChild(coltsHelmet);
            break;
        case "2015":
            container.appendChild(texansHelmet);
            break;
        case "2016":
            container.appendChild(texansHelmet);
            break;
        case "2017":
            container.appendChild(jaguarsHelmet);
            break;
        case "2018":
            container.appendChild(texansHelmet);
            break;
        case "2019":
            container.appendChild(texansHelmet);
            break;
        case "2020":
            container.appendChild(titansHelmet);
            break;
        case "2021":
            container.appendChild(titansHelmet);
            break;
        case "2022":
            container.appendChild(jaguarsHelmet);
            break;
        case "2023":
            container.appendChild(texansHelmet);
            break;
        case "2024":
            container.appendChild(texansHelmet);
            break;
    }
});
afcSouthChampionsMainSection.appendChild(container);
var defaultYear = "2002";
afcSouthChampionsYearDropdown.value = defaultYear;
afcSouthChampionsYearDropdown.dispatchEvent(new Event("change"));
