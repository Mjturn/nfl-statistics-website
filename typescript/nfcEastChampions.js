var nfcEastChampionsMainSection = document.getElementById("nfc-east-champions-main-section");
var nfcEastChampionsYearDropdown = document.getElementById("nfc-east-champions-year-dropdown");
var cowboysHelmet = document.createElement("img");
cowboysHelmet.src = "../helmets/cowboys_helmet.png";
var redskinsHelmet = document.createElement("img");
redskinsHelmet.src = "../helmets/redskins_helmet.png";
var cardinalsHelmet = document.createElement("img");
cardinalsHelmet.src = "../helmets/cardinals_helmet.png";
var eaglesHelmet = document.createElement("img");
eaglesHelmet.src = "../helmets/eagles_helmet.png";
var giantsHelmet = document.createElement("img");
giantsHelmet.src = "../helmets/giants_helmet.png";
var container = document.createElement("div");
nfcEastChampionsYearDropdown.addEventListener("change", function () {
    var selectedYear = nfcEastChampionsYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "1967":
            container.appendChild(cowboysHelmet);
            break;
        case "1968":
            container.appendChild(cowboysHelmet);
            break;
        case "1969":
            container.appendChild(cowboysHelmet);
            break;
        case "1970":
            container.appendChild(cowboysHelmet);
            break;
        case "1971":
            container.appendChild(cowboysHelmet);
            break;
        case "1972":
            container.appendChild(redskinsHelmet);
            break;
        case "1973":
            container.appendChild(cowboysHelmet);
            break;
        case "1974":
            container.appendChild(cardinalsHelmet);
            break;
        case "1975":
            container.appendChild(cardinalsHelmet);
            break;
        case "1976":
            container.appendChild(cowboysHelmet);
            break;
        case "1977":
            container.appendChild(cowboysHelmet);
            break;
        case "1978":
            container.appendChild(cowboysHelmet);
            break;
        case "1979":
            container.appendChild(cowboysHelmet);
            break;
        case "1980":
            container.appendChild(eaglesHelmet);
            break;
        case "1981":
            container.appendChild(cowboysHelmet);
            break;
        case "1982":
            break;
        case "1983":
            container.appendChild(redskinsHelmet);
            break;
        case "1984":
            container.appendChild(redskinsHelmet);
            break;
        case "1985":
            container.appendChild(cowboysHelmet);
            break;
        case "1986":
            container.appendChild(giantsHelmet);
            break;
        case "1987":
            container.appendChild(redskinsHelmet);
            break;
        case "1988":
            container.appendChild(eaglesHelmet);
            break;
        case "1989":
            container.appendChild(giantsHelmet);
            break;
        case "1990":
            container.appendChild(giantsHelmet);
            break;
        case "1991":
            container.appendChild(redskinsHelmet);
            break;
        case "1992":
            container.appendChild(cowboysHelmet);
            break;
        case "1993":
            container.appendChild(cowboysHelmet);
            break;
        case "1994":
            container.appendChild(cowboysHelmet);
            break;
        case "1995":
            container.appendChild(cowboysHelmet);
            break;
        case "1996":
            container.appendChild(cowboysHelmet);
            break;
        case "1997":
            container.appendChild(giantsHelmet);
            break;
        case "1998":
            container.appendChild(cowboysHelmet);
            break;
        case "1999":
            container.appendChild(redskinsHelmet);
            break;
        case "2000":
            container.appendChild(giantsHelmet);
            break;
        case "2001":
            container.appendChild(eaglesHelmet);
            break;
        case "2002":
            container.appendChild(eaglesHelmet);
            break;
        case "2003":
            container.appendChild(eaglesHelmet);
            break;
        case "2004":
            container.appendChild(eaglesHelmet);
            break;
        case "2005":
            container.appendChild(giantsHelmet);
            break;
        case "2006":
            container.appendChild(eaglesHelmet);
            break;
        case "2007":
            container.appendChild(cowboysHelmet);
            break;
        case "2008":
            container.appendChild(giantsHelmet);
            break;
        case "2009":
            container.appendChild(cowboysHelmet);
            break;
        case "2010":
            container.appendChild(eaglesHelmet);
            break;
        case "2011":
            container.appendChild(giantsHelmet);
            break;
        case "2012":
            container.appendChild(redskinsHelmet);
            break;
        case "2013":
            container.appendChild(eaglesHelmet);
            break;
        case "2014":
            container.appendChild(cowboysHelmet);
            break;
        case "2015":
            container.appendChild(redskinsHelmet);
            break;
        case "2016":
            container.appendChild(cowboysHelmet);
            break;
        case "2017":
            container.appendChild(eaglesHelmet);
            break;
        case "2018":
            container.appendChild(cowboysHelmet);
            break;
        case "2019":
            container.appendChild(eaglesHelmet);
            break;
        case "2020":
            container.appendChild(redskinsHelmet);
            break;
        case "2021":
            container.appendChild(cowboysHelmet);
            break;
        case "2022":
            container.appendChild(eaglesHelmet);
            break;
        case "2023":
            container.appendChild(cowboysHelmet);
            break;
    }
});
nfcEastChampionsMainSection.appendChild(container);
var defaultYear = "1967";
nfcEastChampionsYearDropdown.value = defaultYear;
nfcEastChampionsYearDropdown.dispatchEvent(new Event("change"));
