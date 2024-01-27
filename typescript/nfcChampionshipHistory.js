var nfcChampionshipHistoryMainSection = document.getElementById("nfc-championship-history-main-section");
var nfcChampionshipYearDropdown = document.getElementById("nfc-championship-year-dropdown");
var cowboysHelmet = document.createElement("img");
cowboysHelmet.src = "../helmets/cowboys_helmet.png";
var fortyNinersHelmet = document.createElement("img");
fortyNinersHelmet.src = "../helmets/49ers_helmet.png";
var redskinsHelmet = document.createElement("img");
redskinsHelmet.src = "../helmets/redskins_helmet.png";
var vikingsHelmet = document.createElement("img");
vikingsHelmet.src = "../helmets/vikings_helmet.png";
var ramsHelmet = document.createElement("img");
ramsHelmet.src = "../helmets/rams_helmet.png";
var buccaneersHelmet = document.createElement("img");
buccaneersHelmet.src = "../helmets/buccaneers_helmet.png";
var eaglesHelmet = document.createElement("img");
eaglesHelmet.src = "../helmets/eagles_helmet.png";
var bearsHelmet = document.createElement("img");
bearsHelmet.src = "../helmets/bears_helmet.png";
var giantsHelmet = document.createElement("img");
giantsHelmet.src = "../helmets/giants_helmet.png";
var lionsHelmet = document.createElement("img");
lionsHelmet.src = "../helmets/lions_helmet.png";
var packersHelmet = document.createElement("img");
packersHelmet.src = "../helmets/packers_helmet.png";
var panthersHelmet = document.createElement("img");
panthersHelmet.src = "../helmets/panthers_helmet.png";
var falconsHelmet = document.createElement("img");
falconsHelmet.src = "../helmets/falcons_helmet.png";
var seahawksHelmet = document.createElement("img");
seahawksHelmet.src = "../helmets/seahawks_helmet.png";
var saintsHelmet = document.createElement("img");
saintsHelmet.src = "../helmets/saints_helmet.png";
var cardinalsHelmet = document.createElement("img");
cardinalsHelmet.src = "../helmets/cardinals_helmet.png";
var container = document.createElement("div");
var x = document.createElement("p");
x.innerText = "X";
nfcChampionshipYearDropdown.addEventListener("change", function () {
    var selectedYear = nfcChampionshipYearDropdown.value;
    container.innerHTML = "";
    switch (selectedYear) {
        case "1971":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "1972":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "1973":
            container.appendChild(redskinsHelmet);
            container.appendChild(x);
            container.appendChild(cowboysHelmet);
            break;
        case "1974":
            container.appendChild(vikingsHelmet);
            container.appendChild(x);
            container.appendChild(cowboysHelmet);
            break;
        case "1975":
            container.appendChild(vikingsHelmet);
            container.appendChild(x);
            container.appendChild(ramsHelmet);
            break;
        case "1976":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(ramsHelmet);
            break;
        case "1977":
            container.appendChild(vikingsHelmet);
            container.appendChild(x);
            container.appendChild(ramsHelmet);
            break;
        case "1978":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(vikingsHelmet);
            break;
        case "1979":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(ramsHelmet);
            break;
        case "1980":
            container.appendChild(ramsHelmet);
            container.appendChild(x);
            container.appendChild(buccaneersHelmet);
            break;
        case "1981":
            container.appendChild(eaglesHelmet);
            container.appendChild(x);
            container.appendChild(cowboysHelmet);
            break;
        case "1982":
            container.appendChild(fortyNinersHelmet);
            container.appendChild(x);
            container.appendChild(cowboysHelmet);
            break;
        case "1983":
            container.appendChild(redskinsHelmet);
            container.appendChild(x);
            container.appendChild(cowboysHelmet);
            break;
        case "1984":
            container.appendChild(redskinsHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "1985":
            container.appendChild(fortyNinersHelmet);
            container.appendChild(x);
            container.appendChild(bearsHelmet);
            break;
        case "1986":
            container.appendChild(bearsHelmet);
            container.appendChild(x);
            container.appendChild(ramsHelmet);
            break;
        case "1987":
            container.appendChild(giantsHelmet);
            container.appendChild(x);
            container.appendChild(redskinsHelmet);
            break;
        case "1988":
            container.appendChild(redskinsHelmet);
            container.appendChild(x);
            container.appendChild(vikingsHelmet);
            break;
        case "1989":
            container.appendChild(fortyNinersHelmet);
            container.appendChild(x);
            container.appendChild(bearsHelmet);
            break;
        case "1990":
            container.appendChild(fortyNinersHelmet);
            container.appendChild(x);
            container.appendChild(ramsHelmet);
            break;
        case "1991":
            container.appendChild(giantsHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "1992":
            container.appendChild(redskinsHelmet);
            container.appendChild(x);
            container.appendChild(lionsHelmet);
            break;
        case "1993":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "1994":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "1995":
            container.appendChild(fortyNinersHelmet);
            container.appendChild(x);
            container.appendChild(cowboysHelmet);
            break;
        case "1996":
            container.appendChild(cowboysHelmet);
            container.appendChild(x);
            container.appendChild(packersHelmet);
            break;
        case "1997":
            container.appendChild(packersHelmet);
            container.appendChild(x);
            container.appendChild(panthersHelmet);
            break;
        case "1998":
            container.appendChild(packersHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "1999":
            container.appendChild(falconsHelmet);
            container.appendChild(x);
            container.appendChild(vikingsHelmet);
            break;
        case "2000":
            container.appendChild(ramsHelmet);
            container.appendChild(x);
            container.appendChild(buccaneersHelmet);
            break;
        case "2001":
            container.appendChild(giantsHelmet);
            container.appendChild(x);
            container.appendChild(vikingsHelmet);
            break;
        case "2002":
            container.appendChild(ramsHelmet);
            container.appendChild(x);
            container.appendChild(eaglesHelmet);
            break;
        case "2003":
            container.appendChild(buccaneersHelmet);
            container.appendChild(x);
            container.appendChild(eaglesHelmet);
            break;
        case "2004":
            container.appendChild(panthersHelmet);
            container.appendChild(x);
            container.appendChild(eaglesHelmet);
            break;
        case "2005":
            container.appendChild(eaglesHelmet);
            container.appendChild(x);
            container.appendChild(falconsHelmet);
            break;
        case "2006":
            container.appendChild(seahawksHelmet);
            container.appendChild(x);
            container.appendChild(panthersHelmet);
            break;
        case "2007":
            container.appendChild(bearsHelmet);
            container.appendChild(x);
            container.appendChild(saintsHelmet);
            break;
        case "2008":
            container.appendChild(giantsHelmet);
            container.appendChild(x);
            container.appendChild(packersHelmet);
            break;
        case "2009":
            container.appendChild(cardinalsHelmet);
            container.appendChild(x);
            container.appendChild(eaglesHelmet);
            break;
        case "2010":
            container.appendChild(saintsHelmet);
            container.appendChild(x);
            container.appendChild(vikingsHelmet);
            break;
        case "2011":
            container.appendChild(packersHelmet);
            container.appendChild(x);
            container.appendChild(bearsHelmet);
            break;
        case "2012":
            container.appendChild(giantsHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "2013":
            container.appendChild(fortyNinersHelmet);
            container.appendChild(x);
            container.appendChild(falconsHelmet);
            break;
        case "2014":
            container.appendChild(seahawksHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "2015":
            container.appendChild(seahawksHelmet);
            container.appendChild(x);
            container.appendChild(packersHelmet);
            break;
        case "2016":
            container.appendChild(panthersHelmet);
            container.appendChild(x);
            container.appendChild(cardinalsHelmet);
            break;
        case "2017":
            container.appendChild(falconsHelmet);
            container.appendChild(x);
            container.appendChild(packersHelmet);
            break;
        case "2018":
            container.appendChild(eaglesHelmet);
            container.appendChild(x);
            container.appendChild(vikingsHelmet);
            break;
        case "2019":
            container.appendChild(ramsHelmet);
            container.appendChild(x);
            container.appendChild(saintsHelmet);
            break;
        case "2020":
            container.appendChild(fortyNinersHelmet);
            container.appendChild(x);
            container.appendChild(packersHelmet);
            break;
        case "2021":
            container.appendChild(buccaneersHelmet);
            container.appendChild(x);
            container.appendChild(packersHelmet);
            break;
        case "2022":
            container.appendChild(ramsHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
        case "2023":
            container.appendChild(eaglesHelmet);
            container.appendChild(x);
            container.appendChild(fortyNinersHelmet);
            break;
    }
});
nfcChampionshipHistoryMainSection.appendChild(container);
var defaultYear = "1971";
nfcChampionshipYearDropdown.value = defaultYear;
nfcChampionshipYearDropdown.dispatchEvent(new Event("change"));
