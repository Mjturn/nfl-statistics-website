var nfcWestChampionsMainSection = document.getElementById("nfc-west-champions-main-section");
var nfcWestChampionsYearDropdown = document.getElementById("nfc-west-champions-year-dropdown");
var ramsHelmet = document.createElement("img");
ramsHelmet.src = "../helmets/rams_helmet.png";
var coltsHelmet = document.createElement("img");
coltsHelmet.src = "../helmets/colts_helmet.png";
var fortyNinersHelmet = document.createElement("img");
fortyNinersHelmet.src = "../helmets/49ers_helmet.png";
var falconsHelmet = document.createElement("img");
falconsHelmet.src = "../helmets/falcons_helmet.png";
var saintsHelmet = document.createElement("img");
saintsHelmet.src = "../helmets/saints_helmet.png";
var panthersHelmet = document.createElement("img");
panthersHelmet.src = "../helmets/panthers_helmet.png";
var seahawksHelmet = document.createElement("img");
seahawksHelmet.src = "../helmets/seahawks_helmet.png";
var cardinalsHelmet = document.createElement("img");
cardinalsHelmet.src = "../helmets/cardinals_helmet.png";
var container = document.createElement("div");
nfcWestChampionsYearDropdown.addEventListener("change", function () {
    var selectedYear = nfcWestChampionsYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "1967":
            container.appendChild(ramsHelmet);
            break;
        case "1968":
            container.appendChild(coltsHelmet);
            break;
        case "1969":
            container.appendChild(ramsHelmet);
            break;
        case "1970":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1971":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1972":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1973":
            container.appendChild(ramsHelmet);
            break;
        case "1974":
            container.appendChild(ramsHelmet);
            break;
        case "1975":
            container.appendChild(ramsHelmet);
            break;
        case "1976":
            container.appendChild(ramsHelmet);
            break;
        case "1977":
            container.appendChild(ramsHelmet);
            break;
        case "1978":
            container.appendChild(ramsHelmet);
            break;
        case "1979":
            container.appendChild(ramsHelmet);
            break;
        case "1980":
            container.appendChild(falconsHelmet);
            break;
        case "1981":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1982":
            break;
        case "1983":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1984":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1985":
            container.appendChild(ramsHelmet);
            break;
        case "1986":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1987":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1988":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1989":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1990":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1991":
            container.appendChild(saintsHelmet);
            break;
        case "1992":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1993":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1994":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1995":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1996":
            container.appendChild(panthersHelmet);
            break;
        case "1997":
            container.appendChild(fortyNinersHelmet);
            break;
        case "1998":
            container.appendChild(falconsHelmet);
            break;
        case "1999":
            container.appendChild(ramsHelmet);
            break;
        case "2000":
            container.appendChild(saintsHelmet);
            break;
        case "2001":
            container.appendChild(ramsHelmet);
            break;
        case "2002":
            container.appendChild(fortyNinersHelmet);
            break;
        case "2003":
            container.appendChild(ramsHelmet);
            break;
        case "2004":
            container.appendChild(seahawksHelmet);
            break;
        case "2005":
            container.appendChild(seahawksHelmet);
            break;
        case "2006":
            container.appendChild(seahawksHelmet);
            break;
        case "2007":
            container.appendChild(seahawksHelmet);
            break;
        case "2008":
            container.appendChild(cardinalsHelmet);
            break;
        case "2009":
            container.appendChild(cardinalsHelmet);
            break;
        case "2010":
            container.appendChild(seahawksHelmet);
            break;
        case "2011":
            container.appendChild(fortyNinersHelmet);
            break;
        case "2012":
            container.appendChild(fortyNinersHelmet);
            break;
        case "2013":
            container.appendChild(seahawksHelmet);
            break;
        case "2014":
            container.appendChild(seahawksHelmet);
            break;
        case "2015":
            container.appendChild(cardinalsHelmet);
            break;
        case "2016":
            container.appendChild(seahawksHelmet);
            break;
        case "2017":
            container.appendChild(ramsHelmet);
            break;
        case "2018":
            container.appendChild(ramsHelmet);
            break;
        case "2019":
            container.appendChild(fortyNinersHelmet);
            break;
        case "2020":
            container.appendChild(seahawksHelmet);
            break;
        case "2021":
            container.appendChild(ramsHelmet);
            break;
        case "2022":
            container.appendChild(fortyNinersHelmet);
            break;
        case "2023":
            container.appendChild(fortyNinersHelmet);
            break;
        case "2024":
            container.appendChild(ramsHelmet);
            break;
    }
});
nfcWestChampionsMainSection.appendChild(container);
var defaultYear = "1967";
nfcWestChampionsYearDropdown.value = defaultYear;
nfcWestChampionsYearDropdown.dispatchEvent(new Event("change"));
