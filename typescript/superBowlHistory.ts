const superBowlHistoryMainSection = document.getElementById("super-bowl-history-main-section")
const superBowlYearDropdown = document.getElementById("super-bowl-year-dropdown")

    const packersHelmet = document.createElement("img")
    packersHelmet.src = "../helmets/packers_helmet.png"
    
    const chiefsHelmet = document.createElement("img")
    chiefsHelmet.src = "../helmets/chiefs_helmet.png"

    const raidersHelmet = document.createElement("img")
    raidersHelmet.src = "../helmets/raiders_helmet.png"

    const jetsHelmet = document.createElement("img")
    jetsHelmet.src = "../helmets/jets_helmet.png"

    const coltsHelmet = document.createElement("img")
    coltsHelmet.src = "../helmets/colts_helmet.png"
    
    const vikingsHelmet = document.createElement("img")
    vikingsHelmet.src = "../helmets/vikings_helmet.png"
    
    const cowboysHelmet = document.createElement("img")
    cowboysHelmet.src = "../helmets/cowboys_helmet.png"

    const dolphinsHelmet = document.createElement("img")
    dolphinsHelmet.src = "../helmets/dolphins_helmet.png"

    const redskinsHelmet = document.createElement("img")
    redskinsHelmet.src = "../helmets/redskins_helmet.png"

    const steelersHelmet = document.createElement("img")
    steelersHelmet.src = "../helmets/steelers_helmet.png"
    
    const broncosHelmet = document.createElement("img")
    broncosHelmet.src = "../helmets/broncos_helmet.png"
    
    const ramsHelmet = document.createElement("img")
    ramsHelmet.src = "../helmets/rams_helmet.png"
    
    const eaglesHelmet = document.createElement("img")
    eaglesHelmet.src = "../helmets/eagles_helmet.png"
    
    const fortyNinersHelmet = document.createElement("img")
    fortyNinersHelmet.src = "../helmets/49ers_helmet.png"
    
    const bengalsHelmet = document.createElement("img")
    bengalsHelmet.src = "../helmets/bengals_helmet.png"
    
    const bearsHelmet = document.createElement("img")
    bearsHelmet.src = "../helmets/bears_helmet.png"
    
    const patriotsHelmet = document.createElement("img")
    patriotsHelmet.src = "../helmets/patriots_helmet.png"
    
    const giantsHelmet = document.createElement("img")
    giantsHelmet.src = "../helmets/giants_helmet.png"
    
    const billsHelmet = document.createElement("img")
    billsHelmet.src = "../helmets/bills_helmet.png"
    
    const chargersHelmet = document.createElement("img")
    chargersHelmet.src = "../helmets/chargers_helmet.png"
    
    const falconsHelmet = document.createElement("img")
    falconsHelmet.src = "../helmets/falcons_helmet.png"
    
    const titansHelmet = document.createElement("img")
    titansHelmet.src = "../helmets/titans_helmet.png"
    
    const ravensHelmet = document.createElement("img")
    ravensHelmet.src = "../helmets/ravens_helmet.png"
    
    const buccaneersHelmet = document.createElement("img")
    buccaneersHelmet.src = "../helmets/buccaneers_helmet.png"
    
    const panthersHelmet = document.createElement("img")
    panthersHelmet.src = "../helmets/panthers_helmet.png"
    
    const seahawksHelmet = document.createElement("img")
    seahawksHelmet.src = "../helmets/seahawks_helmet.png"
    
    const cardinalsHelmet = document.createElement("img")
    cardinalsHelmet.src = "../helmets/cardinals_helmet.png"
    
    const sainstsHelmet = document.createElement("img")
    sainstsHelmet.src = "../helmets/saints_helmet.png"

    const container = document.createElement("div")
    
    const x = document.createElement("p")
    x.innerText = "X"

    superBowlYearDropdown.addEventListener("change", () => {
        const selectedYear = (superBowlYearDropdown as HTMLSelectElement).value
        container.innerHTML = ""
        
        switch(selectedYear) {
            case "1967":
                container.appendChild(packersHelmet)
                container.appendChild(x)
                container.appendChild(chiefsHelmet)
                break
            case "1968":
                container.appendChild(packersHelmet)
                container.appendChild(x)
                container.appendChild(raidersHelmet)
                break
            case "1969":
                container.appendChild(jetsHelmet)
                container.appendChild(x)
                container.appendChild(coltsHelmet)
                break
            case "1970":
                container.appendChild(chiefsHelmet)
                container.appendChild(x)
                container.appendChild(vikingsHelmet)
                break
            case "1971":
                container.appendChild(coltsHelmet)
                container.appendChild(x)
                container.appendChild(cowboysHelmet)
                break
            case "1972":
                container.appendChild(cowboysHelmet)
                container.appendChild(x)
                container.appendChild(dolphinsHelmet)
                break
            case "1973":
                container.appendChild(dolphinsHelmet)
                container.appendChild(x)
                container.appendChild(redskinsHelmet)
                break
            case "1974":
                container.appendChild(dolphinsHelmet)
                container.appendChild(x)
                container.appendChild(vikingsHelmet)
                break
            case "1975":
                container.appendChild(steelersHelmet)
                container.appendChild(x)
                container.appendChild(vikingsHelmet)
                break
            case "1976":
                container.appendChild(steelersHelmet)
                container.appendChild(x)
                container.appendChild(cowboysHelmet)
                break
            case "1977":
                container.appendChild(raidersHelmet)
                container.appendChild(x)
                container.appendChild(vikingsHelmet)
                break
            case "1978":
                container.appendChild(cowboysHelmet)
                container.appendChild(x)
                container.appendChild(broncosHelmet)
                break
            case "1979":
                container.appendChild(steelersHelmet)
                container.appendChild(x)
                container.appendChild(cowboysHelmet)
                break
            case "1980":
                container.appendChild(steelersHelmet)
                container.appendChild(x)
                container.appendChild(ramsHelmet)
                break
            case "1981":
                container.appendChild(raidersHelmet)
                container.appendChild(x)
                container.appendChild(eaglesHelmet)
                break
            case "1982":
                container.appendChild(fortyNinersHelmet)
                container.appendChild(x)
                container.appendChild(bengalsHelmet)
                break
            case "1983":
                container.appendChild(redskinsHelmet)
                container.appendChild(x)
                container.appendChild(dolphinsHelmet)
                break
            case "1984":
                container.appendChild(raidersHelmet)
                container.appendChild(x)
                container.appendChild(redskinsHelmet)
                break
            case "1985":
                container.appendChild(fortyNinersHelmet)
                container.appendChild(x)
                container.appendChild(dolphinsHelmet)
                break
            case "1986":
                container.appendChild(bearsHelmet)
                container.appendChild(x)
                container.appendChild(patriotsHelmet)
                break
            case "1987":
                container.appendChild(giantsHelmet)
                container.appendChild(x)
                container.appendChild(broncosHelmet)
                break
            case "1988":
                container.appendChild(redskinsHelmet)
                container.appendChild(x)
                container.appendChild(broncosHelmet)
                break
            case "1989":
                container.appendChild(fortyNinersHelmet)
                container.appendChild(x)
                container.appendChild(bengalsHelmet)
                break
            case "1990":
                container.appendChild(fortyNinersHelmet)
                container.appendChild(x)
                container.appendChild(broncosHelmet)
                break
            case "1991":
                container.appendChild(giantsHelmet)
                container.appendChild(x)
                container.appendChild(billsHelmet)
                break
            case "1992":
                container.appendChild(redskinsHelmet)
                container.appendChild(x)
                container.appendChild(billsHelmet)
                break
            case "1993":
                container.appendChild(cowboysHelmet)
                container.appendChild(x)
                container.appendChild(billsHelmet)
                break
            case "1994":
                container.appendChild(cowboysHelmet)
                container.appendChild(x)
                container.appendChild(billsHelmet)
                break
            case "1995":
                container.appendChild(fortyNinersHelmet)
                container.appendChild(x)
                container.appendChild(chargersHelmet)
                break
            case "1996":
                container.appendChild(cowboysHelmet)
                container.appendChild(x)
                container.appendChild(steelersHelmet)
                break
            case "1997":
                container.appendChild(packersHelmet)
                container.appendChild(x)
                container.appendChild(patriotsHelmet)
                break
            case "1998":
                container.appendChild(broncosHelmet)
                container.appendChild(x)
                container.appendChild(packersHelmet)
                break
            case "1999":
                container.appendChild(broncosHelmet)
                container.appendChild(x)
                container.appendChild(falconsHelmet)
                break
            case "2000":
                container.appendChild(ramsHelmet)
                container.appendChild(x)
                container.appendChild(titansHelmet)
                break
            case "2001":
                container.appendChild(ravensHelmet)
                container.appendChild(x)
                container.appendChild(giantsHelmet)
                break
            case "2002":
                container.appendChild(patriotsHelmet)
                container.appendChild(x)
                container.appendChild(ramsHelmet)
                break
            case "2003":
                container.appendChild(buccaneersHelmet)
                container.appendChild(x)
                container.appendChild(raidersHelmet)
                break
            case "2004":
                container.appendChild(patriotsHelmet)
                container.appendChild(x)
                container.appendChild(panthersHelmet)
                break
            case "2005":
                container.appendChild(patriotsHelmet)
                container.appendChild(x)
                container.appendChild(eaglesHelmet)
                break
            case "2006":
                container.appendChild(steelersHelmet)
                container.appendChild(x)
                container.appendChild(seahawksHelmet)
                break
            case "2007":
                container.appendChild(coltsHelmet)
                container.appendChild(x)
                container.appendChild(bearsHelmet)
                break
            case "2008":
                container.appendChild(giantsHelmet)
                container.appendChild(x)
                container.appendChild(patriotsHelmet)
                break
            case "2009":
                container.appendChild(steelersHelmet)
                container.appendChild(x)
                container.appendChild(cardinalsHelmet)
                break
            case "2010":
                container.appendChild(sainstsHelmet)
                container.appendChild(x)
                container.appendChild(coltsHelmet)
                break
            case "2011":
                container.appendChild(packersHelmet)
                container.appendChild(x)
                container.appendChild(steelersHelmet)
                break
            case "2012":
                container.appendChild(giantsHelmet)
                container.appendChild(x)
                container.appendChild(patriotsHelmet)
                break
            case "2013":
                container.appendChild(ravensHelmet)
                container.appendChild(x)
                container.appendChild(fortyNinersHelmet)
                break
            case "2014":
                container.appendChild(seahawksHelmet)
                container.appendChild(x)
                container.appendChild(broncosHelmet)
                break
            case "2015":
                container.appendChild(patriotsHelmet)
                container.appendChild(x)
                container.appendChild(seahawksHelmet)
                break
            case "2016":
                container.appendChild(broncosHelmet)
                container.appendChild(x)
                container.appendChild(panthersHelmet)
                break
            case "2017":
                container.appendChild(patriotsHelmet)
                container.appendChild(x)
                container.appendChild(falconsHelmet)
                break
            case "2018":
                container.appendChild(eaglesHelmet)
                container.appendChild(x)
                container.appendChild(patriotsHelmet)
                break
            case "2019":
                container.appendChild(patriotsHelmet)
                container.appendChild(x)
                container.appendChild(ramsHelmet)
                break
            case "2020":
                container.appendChild(chiefsHelmet)
                container.appendChild(x)
                container.appendChild(fortyNinersHelmet)
                break
            case "2021":
                container.appendChild(buccaneersHelmet)
                container.appendChild(x)
                container.appendChild(chiefsHelmet)
                break
            case "2022":
                container.appendChild(ramsHelmet)
                container.appendChild(x)
                container.appendChild(bengalsHelmet)
                break
            case "2023":
                container.appendChild(chiefsHelmet)
                container.appendChild(x)
                container.appendChild(eaglesHelmet)
                break
            case "2024":
                container.appendChild(chiefsHelmet)
                container.appendChild(x)
                container.appendChild(fortyNinersHelmet)
                break
            case "2025":
                container.appendChild(eaglesHelmet)
                container.appendChild(x)
                container.appendChild(chiefsHelmet)
                break
        }
    })

    superBowlHistoryMainSection.appendChild(container)

    const defaultYear = "1967";
    (superBowlYearDropdown as HTMLSelectElement).value = defaultYear
    superBowlYearDropdown.dispatchEvent(new Event("change"))
