const afcWestChampionsMainSection = document.getElementById("afc-west-champions-main-section")
const afcWestChampionsYearDropdown = document.getElementById("afc-west-champions-year-dropdown")
    
const chargersHelmet = document.createElement("img")
chargersHelmet.src = "../helmets/chargers_helmet.png"

const chiefsHelmet = document.createElement("img")
chiefsHelmet.src = "../helmets/chiefs_helmet.png"

const raidersHelmet = document.createElement("img")
raidersHelmet.src = "../helmets/chiefs_helmet.png"

const broncosHelmet = document.createElement("img")
broncosHelmet.src = "../helmets/broncos_helmet.png"

const seahawksHelmet = document.createElement("img")
seahawksHelmet.src = "../helmets/seahawks_helmet.png"

const container = document.createElement("div")

afcWestChampionsYearDropdown.addEventListener("change", () => {
        const selectedYear = (afcWestChampionsYearDropdown as HTMLSelectElement).value
        container.innerHTML = ""
        
        switch(selectedYear) {
            case "1960":
                container.appendChild(chargersHelmet)
                break
            case "1961":
                container.appendChild(chargersHelmet)
                break
            case "1962":
                container.appendChild(chiefsHelmet)
                break
            case "1963":
                container.appendChild(chargersHelmet)
                break
            case "1964":
                container.appendChild(chargersHelmet)
                break
            case "1965":
                container.appendChild(chargersHelmet)
                break
            case "1966":
                container.appendChild(chiefsHelmet)
                break
            case "1967":
                container.appendChild(raidersHelmet)
                break
            case "1968":
                container.appendChild(raidersHelmet)
                break
            case "1969":
                container.appendChild(raidersHelmet)
                break
            case "1970":
                container.appendChild(raidersHelmet)
                break
            case "1971":
                container.appendChild(chiefsHelmet)
                break
            case "1972":
                container.appendChild(raidersHelmet)
                break
            case "1973":
                container.appendChild(raidersHelmet)
                break
            case "1974":
                container.appendChild(raidersHelmet)
                break
            case "1975":
                container.appendChild(raidersHelmet)
                break
            case "1976":
                container.appendChild(raidersHelmet)
                break
            case "1977":
                container.appendChild(broncosHelmet)
                break
            case "1978":
                container.appendChild(broncosHelmet)
                break
            case "1979":
                container.appendChild(chargersHelmet)
                break
            case "1980":
                container.appendChild(chargersHelmet)
                break
            case "1981":
                container.appendChild(chargersHelmet)
                break
            case "1982":
                break
            case "1983":
                container.appendChild(raidersHelmet)
                break
            case "1984":
                container.appendChild(broncosHelmet)
                break
            case "1985":
                container.appendChild(raidersHelmet)
                break
            case "1986":
                container.appendChild(broncosHelmet)
                break
            case "1987":
                container.appendChild(broncosHelmet)
                break
            case "1988":
                container.appendChild(seahawksHelmet)
                break
            case "1989":
                container.appendChild(broncosHelmet)
                break
            case "1990":
                container.appendChild(raidersHelmet)
                break
            case "1991":
                container.appendChild(broncosHelmet)
                break
            case "1992":
                container.appendChild(chargersHelmet)
                break
            case "1993":
                container.appendChild(chiefsHelmet)
                break
            case "1994":
                container.appendChild(chargersHelmet)
                break
            case "1995":
                container.appendChild(chiefsHelmet)
                break
            case "1996":
                container.appendChild(broncosHelmet)
                break
            case "1997":
                container.appendChild(chiefsHelmet)
                break
            case "1998":
                container.appendChild(broncosHelmet)
                break
            case "1999":
                container.appendChild(seahawksHelmet)
                break
            case "2000":
                container.appendChild(raidersHelmet)
                break
            case "2001":
                container.appendChild(raidersHelmet)
                break
            case "2002":
                container.appendChild(raidersHelmet)
                break
            case "2003":
                container.appendChild(chiefsHelmet)
                break
            case "2004":
                container.appendChild(chargersHelmet)
                break
            case "2005":
                container.appendChild(broncosHelmet)
                break
            case "2006":
                container.appendChild(chargersHelmet)
                break
            case "2007":
                container.appendChild(chargersHelmet)
                break
            case "2008":
                container.appendChild(chargersHelmet)
                break
            case "2009":
                container.appendChild(chargersHelmet)
                break
            case "2010":
                container.appendChild(chiefsHelmet)
                break
            case "2011":
                container.appendChild(broncosHelmet)
                break
            case "2012":
                container.appendChild(broncosHelmet)
                break
            case "2013":
                container.appendChild(broncosHelmet)
                break
            case "2014":
                container.appendChild(broncosHelmet)
                break
            case "2015":
                container.appendChild(broncosHelmet)
                break
            case "2016":
                container.appendChild(chiefsHelmet)
                break
            case "2017":
                container.appendChild(chiefsHelmet)
                break
            case "2018":
                container.appendChild(chiefsHelmet)
                break
            case "2019":
                container.appendChild(chiefsHelmet)
                break
            case "2020":
                container.appendChild(chiefsHelmet)
                break
            case "2021":
                container.appendChild(chiefsHelmet)
                break
            case "2022":
                container.appendChild(chiefsHelmet)
                break
            case "2023":
                container.appendChild(chiefsHelmet)
                break
        }
})

afcWestChampionsMainSection.appendChild(container)

const defaultYear = "1960";
(afcWestChampionsYearDropdown as HTMLSelectElement).value = defaultYear
afcWestChampionsYearDropdown.dispatchEvent(new Event("change"))
