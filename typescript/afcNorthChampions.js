var afcNorthChampionsMainSection = document.getElementById("afc-north-champions-main-section");
var afcNorthChampionsYearDropdown = document.getElementById("afc-north-champions-year-dropdown");
var bengalsHelmet = document.createElement("img");
bengalsHelmet.src = "../helmets/bengals_helmet.png";
var brownsHelmet = document.createElement("img");
brownsHelmet.src = "../helmets/browns_helmet.png";
var steelersHelmet = document.createElement("img");
steelersHelmet.src = "../helmets/steelers_helmet.png";
var oilersHelmet = document.createElement("img");
oilersHelmet.src = "../helmets/oilers_helmet.png";
var jaguarsHelmet = document.createElement("img");
jaguarsHelmet.src = "../helmets/jaguars_helmet.png";
var titansHelmet = document.createElement("img");
titansHelmet.src = "../helmets/titans_helmet.png";
var ravensHelmet = document.createElement("img");
ravensHelmet.src = "../helmets/ravens_helmet.png";
var container = document.createElement("div");
afcNorthChampionsYearDropdown.addEventListener("change", function () {
    var selectedYear = afcNorthChampionsYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "1970":
            container.appendChild(bengalsHelmet);
            break;
        case "1971":
            container.appendChild(brownsHelmet);
            break;
        case "1972":
            container.appendChild(steelersHelmet);
            break;
        case "1973":
            container.appendChild(bengalsHelmet);
            break;
        case "1974":
            container.appendChild(steelersHelmet);
            break;
        case "1975":
            container.appendChild(steelersHelmet);
            break;
        case "1976":
            container.appendChild(steelersHelmet);
            break;
        case "1977":
            container.appendChild(steelersHelmet);
            break;
        case "1978":
            container.appendChild(steelersHelmet);
            break;
        case "1979":
            container.appendChild(steelersHelmet);
            break;
        case "1980":
            container.appendChild(brownsHelmet);
            break;
        case "1981":
            container.appendChild(bengalsHelmet);
            break;
        case "1982":
            break;
        case "1983":
            container.appendChild(steelersHelmet);
            break;
        case "1984":
            container.appendChild(steelersHelmet);
            break;
        case "1985":
            container.appendChild(brownsHelmet);
            break;
        case "1986":
            container.appendChild(brownsHelmet);
            break;
        case "1987":
            container.appendChild(brownsHelmet);
            break;
        case "1988":
            container.appendChild(bengalsHelmet);
            break;
        case "1989":
            container.appendChild(brownsHelmet);
            break;
        case "1990":
            container.appendChild(bengalsHelmet);
            break;
        case "1991":
            container.appendChild(oilersHelmet);
            break;
        case "1992":
            container.appendChild(steelersHelmet);
            break;
        case "1993":
            container.appendChild(oilersHelmet);
            break;
        case "1994":
            container.appendChild(steelersHelmet);
            break;
        case "1995":
            container.appendChild(steelersHelmet);
            break;
        case "1996":
            container.appendChild(steelersHelmet);
            break;
        case "1997":
            container.appendChild(steelersHelmet);
            break;
        case "1998":
            container.appendChild(jaguarsHelmet);
            break;
        case "1999":
            container.appendChild(jaguarsHelmet);
            break;
        case "2000":
            container.appendChild(titansHelmet);
            break;
        case "2001":
            container.appendChild(steelersHelmet);
            break;
        case "2002":
            container.appendChild(steelersHelmet);
            break;
        case "2003":
            container.appendChild(ravensHelmet);
            break;
        case "2004":
            container.appendChild(steelersHelmet);
            break;
        case "2005":
            container.appendChild(bengalsHelmet);
            break;
        case "2006":
            container.appendChild(ravensHelmet);
            break;
        case "2007":
            container.appendChild(steelersHelmet);
            break;
        case "2008":
            container.appendChild(steelersHelmet);
            break;
        case "2009":
            container.appendChild(bengalsHelmet);
            break;
        case "2010":
            container.appendChild(steelersHelmet);
            break;
        case "2011":
            container.appendChild(ravensHelmet);
            break;
        case "2012":
            container.appendChild(ravensHelmet);
            break;
        case "2013":
            container.appendChild(bengalsHelmet);
            break;
        case "2014":
            container.appendChild(steelersHelmet);
            break;
        case "2015":
            container.appendChild(bengalsHelmet);
            break;
        case "2016":
            container.appendChild(steelersHelmet);
            break;
        case "2017":
            container.appendChild(steelersHelmet);
            break;
        case "2018":
            container.appendChild(ravensHelmet);
            break;
        case "2019":
            container.appendChild(ravensHelmet);
            break;
        case "2020":
            container.appendChild(steelersHelmet);
            break;
        case "2021":
            container.appendChild(bengalsHelmet);
            break;
        case "2022":
            container.appendChild(bengalsHelmet);
            break;
        case "2023":
            container.appendChild(ravensHelmet);
            break;
    }
});
afcNorthChampionsMainSection.appendChild(container);
var defaultYear = "1970";
afcNorthChampionsYearDropdown.value = defaultYear;
afcNorthChampionsYearDropdown.dispatchEvent(new Event("change"));
