const nfcNorthChampionsMainSection = document.getElementById("nfc-north-champions-main-section")
const nfcNorthChampionsYearDropdown = document.getElementById("nfc-north-champions-year-dropdown")
    
const packersHelmet = document.createElement("img")
packersHelmet.src = "../helmets/packers_helmet.png"

const vikingsHelmet = document.createElement("img")
vikingsHelmet.src = "../helmets/vikings_helmet.png"

const buccaneersHelmet = document.createElement("img")
buccaneersHelmet.src = "../helmets/buccaneers_helmet.png"

const lionsHelmet = document.createElement("img")
lionsHelmet.src = "../helmets/lions_helmet.png"

const bearsHelmet = document.createElement("img")
bearsHelmet.src = "../helmets/bears_helmet.png"

const container = document.createElement("div")

nfcNorthChampionsYearDropdown.addEventListener("change", () => {
        const selectedYear = (nfcNorthChampionsYearDropdown as HTMLSelectElement).value
        container.innerHTML = ""
        
        switch(selectedYear) {
            case "1967":
                container.appendChild(packersHelmet)
                break
            case "1968":
                container.appendChild(vikingsHelmet)
                break
            case "1969":
                container.appendChild(vikingsHelmet)
                break
            case "1970":
                container.appendChild(vikingsHelmet)
                break
            case "1971":
                container.appendChild(vikingsHelmet)
                break
            case "1972":
                container.appendChild(packersHelmet)
                break
            case "1973":
                container.appendChild(vikingsHelmet)
                break
            case "1974":
                container.appendChild(vikingsHelmet)
                break
            case "1975":
                container.appendChild(vikingsHelmet)
                break
            case "1976":
                container.appendChild(vikingsHelmet)
                break
            case "1977":
                container.appendChild(vikingsHelmet)
                break
            case "1978":
                container.appendChild(vikingsHelmet)
                break
            case "1979":
                container.appendChild(buccaneersHelmet)
                break
            case "1980":
                container.appendChild(vikingsHelmet)
                break
            case "1981":
                container.appendChild(buccaneersHelmet)
                break
            case "1982":
                break
            case "1983":
                container.appendChild(lionsHelmet)
                break
            case "1984":
                container.appendChild(bearsHelmet)
                break
            case "1985":
                container.appendChild(bearsHelmet)
                break
            case "1986":
                container.appendChild(bearsHelmet)
                break
            case "1987":
                container.appendChild(bearsHelmet)
                break
            case "1988":
                container.appendChild(bearsHelmet)
                break
            case "1989":
                container.appendChild(vikingsHelmet)
                break
            case "1990":
                container.appendChild(bearsHelmet)
                break
            case "1991":
                container.appendChild(lionsHelmet)
                break
            case "1992":
                container.appendChild(vikingsHelmet)
                break
            case "1993":
                container.appendChild(lionsHelmet)
                break
            case "1994":
                container.appendChild(vikingsHelmet)
                break
            case "1995":
                container.appendChild(packersHelmet)
                break
            case "1996":
                container.appendChild(packersHelmet)
                break
            case "1997":
                container.appendChild(packersHelmet)
                break
            case "1998":
                container.appendChild(vikingsHelmet)
                break
            case "1999":
                container.appendChild(buccaneersHelmet)
                break
            case "2000":
                container.appendChild(vikingsHelmet)
                break
            case "2001":
                container.appendChild(bearsHelmet)
                break
            case "2002":
                container.appendChild(packersHelmet)
                break
            case "2003":
                container.appendChild(packersHelmet)
                break
            case "2004":
                container.appendChild(packersHelmet)
                break
            case "2005":
                container.appendChild(bearsHelmet)
                break
            case "2006":
                container.appendChild(bearsHelmet)
                break
            case "2007":
                container.appendChild(packersHelmet)
                break
            case "2008":
                container.appendChild(vikingsHelmet)
                break
            case "2009":
                container.appendChild(vikingsHelmet)
                break
            case "2010":
                container.appendChild(bearsHelmet)
                break
            case "2011":
                container.appendChild(packersHelmet)
                break
            case "2012":
                container.appendChild(packersHelmet)
                break
            case "2013":
                container.appendChild(packersHelmet)
                break
            case "2014":
                container.appendChild(packersHelmet)
                break
            case "2015":
                container.appendChild(vikingsHelmet)
                break
            case "2016":
                container.appendChild(packersHelmet)
                break
            case "2017":
                container.appendChild(vikingsHelmet)
                break
            case "2018":
                container.appendChild(bearsHelmet)
                break
            case "2019":
                container.appendChild(packersHelmet)
                break
            case "2020":
                container.appendChild(packersHelmet)
                break
            case "2021":
                container.appendChild(packersHelmet)
                break
            case "2022":
                container.appendChild(vikingsHelmet)
                break
            case "2023":
                container.appendChild(lionsHelmet)
                break
            case "2024":
                container.appendChild(lionsHelmet)
                break
        }
})

nfcNorthChampionsMainSection.appendChild(container)

const defaultYear = "1967";
(nfcNorthChampionsYearDropdown as HTMLSelectElement).value = defaultYear
nfcNorthChampionsYearDropdown.dispatchEvent(new Event("change"))
