var afcEastChampionsMainSection = document.getElementById("afc-east-champions-main-section");
var afcEastChampionsYearDropdown = document.getElementById("afc-east-champions-year-dropdown");
var oilersHelmet = document.createElement("img");
oilersHelmet.src = "../helmets/oilers_helmet.png";
var patriotsHelmet = document.createElement("img");
patriotsHelmet.src = "../helmets/patriots_helmet.png";
var billsHelmet = document.createElement("img");
billsHelmet.src = "../helmets/bills_helmet.png";
var jetsHelmet = document.createElement("img");
jetsHelmet.src = "../helmets/jets_helmet.png";
var coltsHelmet = document.createElement("img");
coltsHelmet.src = "../helmets/colts_helmet.png";
var dolphinsHelmet = document.createElement("img");
dolphinsHelmet.src = "../helmets/dolphins_helmet.png";
var container = document.createElement("div");
afcEastChampionsYearDropdown.addEventListener("change", function () {
    var selectedYear = afcEastChampionsYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "1960":
            container.appendChild(oilersHelmet);
            break;
        case "1961":
            container.appendChild(oilersHelmet);
            break;
        case "1962":
            container.appendChild(oilersHelmet);
            break;
        case "1963":
            container.appendChild(patriotsHelmet);
            break;
        case "1964":
            container.appendChild(billsHelmet);
            break;
        case "1965":
            container.appendChild(billsHelmet);
            break;
        case "1966":
            container.appendChild(billsHelmet);
            break;
        case "1967":
            container.appendChild(oilersHelmet);
            break;
        case "1968":
            container.appendChild(jetsHelmet);
            break;
        case "1969":
            container.appendChild(jetsHelmet);
            break;
        case "1970":
            container.appendChild(coltsHelmet);
            break;
        case "1971":
            container.appendChild(dolphinsHelmet);
            break;
        case "1972":
            container.appendChild(dolphinsHelmet);
            break;
        case "1973":
            container.appendChild(dolphinsHelmet);
            break;
        case "1974":
            container.appendChild(dolphinsHelmet);
            break;
        case "1975":
            container.appendChild(coltsHelmet);
            break;
        case "1976":
            container.appendChild(coltsHelmet);
            break;
        case "1977":
            container.appendChild(coltsHelmet);
            break;
        case "1978":
            container.appendChild(patriotsHelmet);
            break;
        case "1979":
            container.appendChild(dolphinsHelmet);
            break;
        case "1980":
            container.appendChild(billsHelmet);
            break;
        case "1981":
            container.appendChild(dolphinsHelmet);
            break;
        case "1982":
            break;
        case "1983":
            container.appendChild(dolphinsHelmet);
            break;
        case "1984":
            container.appendChild(dolphinsHelmet);
            break;
        case "1985":
            container.appendChild(dolphinsHelmet);
            break;
        case "1986":
            container.appendChild(patriotsHelmet);
            break;
        case "1987":
            container.appendChild(coltsHelmet);
            break;
        case "1988":
            container.appendChild(billsHelmet);
            break;
        case "1989":
            container.appendChild(billsHelmet);
            break;
        case "1990":
            container.appendChild(billsHelmet);
            break;
        case "1991":
            container.appendChild(billsHelmet);
            break;
        case "1992":
            container.appendChild(dolphinsHelmet);
            break;
        case "1993":
            container.appendChild(billsHelmet);
            break;
        case "1994":
            container.appendChild(dolphinsHelmet);
            break;
        case "1995":
            container.appendChild(billsHelmet);
            break;
        case "1996":
            container.appendChild(patriotsHelmet);
            break;
        case "1997":
            container.appendChild(patriotsHelmet);
            break;
        case "1998":
            container.appendChild(jetsHelmet);
            break;
        case "1999":
            container.appendChild(coltsHelmet);
            break;
        case "2000":
            container.appendChild(dolphinsHelmet);
            break;
        case "2001":
            container.appendChild(patriotsHelmet);
            break;
        case "2002":
            container.appendChild(jetsHelmet);
            break;
        case "2003":
            container.appendChild(patriotsHelmet);
            break;
        case "2004":
            container.appendChild(patriotsHelmet);
            break;
        case "2005":
            container.appendChild(patriotsHelmet);
            break;
        case "2006":
            container.appendChild(patriotsHelmet);
            break;
        case "2007":
            container.appendChild(patriotsHelmet);
            break;
        case "2008":
            container.appendChild(dolphinsHelmet);
            break;
        case "2009":
            container.appendChild(patriotsHelmet);
            break;
        case "2010":
            container.appendChild(patriotsHelmet);
            break;
        case "2011":
            container.appendChild(patriotsHelmet);
            break;
        case "2012":
            container.appendChild(patriotsHelmet);
            break;
        case "2013":
            container.appendChild(patriotsHelmet);
            break;
        case "2014":
            container.appendChild(patriotsHelmet);
            break;
        case "2015":
            container.appendChild(patriotsHelmet);
            break;
        case "2016":
            container.appendChild(patriotsHelmet);
            break;
        case "2017":
            container.appendChild(patriotsHelmet);
            break;
        case "2018":
            container.appendChild(patriotsHelmet);
            break;
        case "2019":
            container.appendChild(patriotsHelmet);
            break;
        case "2020":
            container.appendChild(billsHelmet);
            break;
        case "2021":
            container.appendChild(billsHelmet);
            break;
        case "2022":
            container.appendChild(billsHelmet);
            break;
        case "2023":
            container.appendChild(billsHelmet);
            break;
    }
});
afcEastChampionsMainSection.appendChild(container);
var defaultYear = "1960";
afcEastChampionsYearDropdown.value = defaultYear;
afcEastChampionsYearDropdown.dispatchEvent(new Event("change"));
