var afcChampionshipHistoryMainSection = document.getElementById("afc-championship-history-main-section");
var afcChampionshipYearDropdown = document.getElementById("afc-championship-year-dropdown");
var coltsHelmet = document.createElement("img");
coltsHelmet.src = "../helmets/colts_helmet.png";
var raidersHelmet = document.createElement("img");
raidersHelmet.src = "../helmets/raiders_helmet.png";
var dolphinsHelmet = document.createElement("img");
dolphinsHelmet.src = "../helmets/dolphins_helmet.png";
var steelersHelmet = document.createElement("img");
steelersHelmet.src = "../helmets/steelers_helmet.png";
var broncosHelmet = document.createElement("img");
broncosHelmet.src = "../helmets/broncos_helmet.png";
var oilersHelmet = document.createElement("img");
oilersHelmet.src = "../helmets/oilers_helmet.png";
var chargersHelmet = document.createElement("img");
chargersHelmet.src = "../helmets/chargers_helmet.png";
var bengalsHelmet = document.createElement("img");
bengalsHelmet.src = "../helmets/bengals_helmet.png";
var jetsHelmet = document.createElement("img");
jetsHelmet.src = "../helmets/jets_helmet.png";
var seahawksHelmet = document.createElement("img");
seahawksHelmet.src = "../helmets/seahawks_helmet.png";
var patriotsHelmet = document.createElement("img");
patriotsHelmet.src = "../helmets/patriots_helmet.png";
var brownsHelmet = document.createElement("img");
brownsHelmet.src = "../helmets/browns_helmet.png";
var billsHelmet = document.createElement("img");
billsHelmet.src = "../helmets/bills_helmet.png";
var chiefsHelmet = document.createElement("img");
chiefsHelmet.src = "../helmets/chiefs_helmet.png";
var jaguarsHelmet = document.createElement("img");
jaguarsHelmet.src = "../helmets/jaguars_helmet.png";
var titansHelmet = document.createElement("img");
titansHelmet.src = "../helmets/titans_helmet.png";
var ravensHelmet = document.createElement("img");
ravensHelmet.src = "../helmets/ravens_helmet.png";
var container = document.createElement("div");
var x = document.createElement("p");
x.innerText = "X";
afcChampionshipYearDropdown.addEventListener("change", function () {
    var selectedYear = afcChampionshipYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "1971":
            container.appendChild(coltsHelmet);
            container.appendChild(x);
            container.appendChild(raidersHelmet);
            break;
        case "1972":
            container.appendChild(dolphinsHelmet);
            container.appendChild(x);
            container.appendChild(coltsHelmet);
            break;
        case "1973":
            container.appendChild(dolphinsHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "1974":
            container.appendChild(dolphinsHelmet);
            container.appendChild(x);
            container.appendChild(raidersHelmet);
            break;
        case "1975":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(raidersHelmet);
            break;
        case "1976":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(raidersHelmet);
            break;
        case "1977":
            container.appendChild(raidersHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "1978":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(raidersHelmet);
            break;
        case "1979":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(oilersHelmet);
            break;
        case "1980":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(oilersHelmet);
            break;
        case "1981":
            container.appendChild(raidersHelmet);
            container.appendChild(x);
            container.appendChild(chargersHelmet);
            break;
        case "1982":
            container.appendChild(bengalsHelmet);
            container.appendChild(x);
            container.appendChild(chargersHelmet);
            break;
        case "1983":
            container.appendChild(dolphinsHelmet);
            container.appendChild(x);
            container.appendChild(jetsHelmet);
            break;
        case "1984":
            container.appendChild(raidersHelmet);
            container.appendChild(x);
            container.appendChild(seahawksHelmet);
            break;
        case "1985":
            container.appendChild(dolphinsHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "1986":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(dolphinsHelmet);
            break;
        case "1987":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(brownsHelmet);
            break;
        case "1988":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(brownsHelmet);
            break;
        case "1989":
            container.appendChild(bengalsHelmet);
            container.appendChild(x);
            container.appendChild(billsHelmet);
            break;
        case "1990":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(brownsHelmet);
            break;
        case "1991":
            container.appendChild(billsHelmet);
            container.appendChild(x);
            container.appendChild(raidersHelmet);
            break;
        case "1992":
            container.appendChild(billsHelmet);
            container.appendChild(x);
            container.appendChild(broncosHelmet);
            break;
        case "1993":
            container.appendChild(billsHelmet);
            container.appendChild(x);
            container.appendChild(dolphinsHelmet);
            break;
        case "1994":
            container.appendChild(billsHelmet);
            container.appendChild(x);
            container.appendChild(chiefsHelmet);
            break;
        case "1995":
            container.appendChild(chargersHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "1996":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(coltsHelmet);
            break;
        case "1997":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(jaguarsHelmet);
            break;
        case "1998":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "1999":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(jetsHelmet);
            break;
        case "2000":
            container.appendChild(titansHelmet);
            container.appendChild(x);
            container.appendChild(jaguarsHelmet);
            break;
        case "2001":
            container.appendChild(ravensHelmet);
            container.appendChild(x);
            container.appendChild(raidersHelmet);
            break;
        case "2002":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "2003":
            container.appendChild(raidersHelmet);
            container.appendChild(x);
            container.appendChild(titansHelmet);
            break;
        case "2004":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(coltsHelmet);
            break;
        case "2005":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "2006":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(broncosHelmet);
            break;
        case "2007":
            container.appendChild(coltsHelmet);
            container.appendChild(x);
            container.appendChild(patriotsHelmet);
            break;
        case "2008":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(chargersHelmet);
            break;
        case "2009":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(ravensHelmet);
            break;
        case "2010":
            container.appendChild(coltsHelmet);
            container.appendChild(x);
            container.appendChild(jetsHelmet);
            break;
        case "2011":
            container.appendChild(steelersHelmet);
            container.appendChild(x);
            container.appendChild(jetsHelmet);
            break;
        case "2012":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(ravensHelmet);
            break;
        case "2013":
            container.appendChild(ravensHelmet);
            container.appendChild(x);
            container.appendChild(patriotsHelmet);
            break;
        case "2014":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(patriotsHelmet);
            break;
        case "2015":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(coltsHelmet);
            break;
        case "2016":
            container.appendChild(broncosHelmet);
            container.appendChild(x);
            container.appendChild(patriotsHelmet);
            break;
        case "2017":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(steelersHelmet);
            break;
        case "2018":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(jaguarsHelmet);
            break;
        case "2019":
            container.appendChild(patriotsHelmet);
            container.appendChild(x);
            container.appendChild(chiefsHelmet);
            break;
        case "2020":
            container.appendChild(chiefsHelmet);
            container.appendChild(x);
            container.appendChild(titansHelmet);
            break;
        case "2021":
            container.appendChild(chiefsHelmet);
            container.appendChild(x);
            container.appendChild(billsHelmet);
            break;
        case "2022":
            container.appendChild(bengalsHelmet);
            container.appendChild(x);
            container.appendChild(chiefsHelmet);
            break;
        case "2023":
            container.appendChild(chiefsHelmet);
            container.appendChild(x);
            container.appendChild(bengalsHelmet);
            break;
        case "2024":
            container.appendChild(chiefsHelmet);
            container.appendChild(x);
            container.appendChild(ravensHelmet);
            break;
        case "2025":
            container.appendChild(chiefsHelmet);
            container.appendChild(x);
            container.appendChild(billsHelmet);
            break;
    }
});
afcChampionshipHistoryMainSection.appendChild(container);
var defaultYear = "1971";
afcChampionshipYearDropdown.value = defaultYear;
afcChampionshipYearDropdown.dispatchEvent(new Event("change"));
