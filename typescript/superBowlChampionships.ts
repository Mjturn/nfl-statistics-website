const championshipsMainSection = document.getElementById("championships-main-section")

const nflTeams: Map<string, { wins: number, color: string }> = new Map([
    ["Chicago Bears", { wins: 1, color: "rgb(11, 22, 42)" }],
    ["Cincinnati Bengals", { wins: 0, color: "rgb(251, 79, 20)" }],
    ["Buffalo Bills", { wins: 0, color: "rgb(0, 51, 141)" }],
    ["Denver Broncos", { wins: 3, color: "rgb(251, 79, 20)" }],
    ["Cleveland Browns", { wins: 0, color: "rgb(49, 29, 0)" }],
    ["Tampa Bay Buccaneers", { wins: 2, color: "rgb(213, 10, 10)" }],
    ["Arizona Cardinals", { wins: 0, color: "rgb(151,35,63)" }],
    ["Los Angeles Chargers", { wins: 0, color: "rgb(0, 128, 198)" }],
    ["Kansas City Chiefs", { wins: 3, color: "rgb(227, 24, 55)" }],
    ["Indianapolis Colts", { wins: 2, color: "rgb(0, 44, 95)" }],
    ["Washington Commanders", { wins: 3, color: "rgb(90, 20, 20)" }],
    ["Dallas Cowboys", { wins: 5, color: "rgb(0, 53, 148)" }],
    ["Miami Dolphins", { wins: 2, color: "rgb(0, 142, 151)" }],
    ["Philadelphia Eagles", { wins: 1, color: "rgb(0, 76, 84)" }],
    ["Atlanta Falcons", { wins: 0, color: "rgb(167, 25, 48)" }],
    ["San Francisco 49ers", { wins: 5, color: "rgb(170, 0, 0)" }],
    ["New York Giants", { wins: 4, color: "rgb(1, 35, 82)" }],
    ["Jacksonville Jaguars", { wins: 0, color: "rgb(16, 24, 32)" }],
    ["New York Jets", { wins: 1, color: "rgb(18, 87, 64)" }],
    ["Detroit Lions", { wins: 0, color: "rgb(0, 118, 182)" }],
    ["Green Bay Packers", { wins: 4, color: "rgb(24, 48, 40)" }],
    ["Carolina Panthers", { wins: 0, color: "rgb(0, 133, 202)" }],
    ["New England Patriots", { wins: 6, color: "rgb(0, 34, 68)" }],
    ["Las Vegas Raiders", { wins: 3, color: "rgb(0, 0, 0)" }],
    ["Los Angeles Rams", { wins: 2, color: "rgb(0, 53, 148)" }],
    ["Baltimore Ravens", { wins: 2, color: "rgb(26, 25, 95)" }],
    ["New Orleans Saints", { wins: 1, color: "rgb(211, 188, 141)" }],
    ["Seattle Seahawks", { wins: 1, color: "rgb(0, 34, 68)" }],
    ["Pittsburgh Steelers", { wins: 6, color: "rgb(255, 182, 18)" }],
    ["Houston Texans", { wins: 0, color: "rgb(3, 32, 47)" }],
    ["Tennessee Titans", { wins: 0, color: "rgb(12, 35, 64)" }],
    ["Minnesota Vikings", { wins: 0, color: "rgb(79, 38, 131)" }]
])

const nflTeamsArray = Array.from(nflTeams, ([teamName, { wins, color }]) => ({ teamName, wins, color }))
nflTeamsArray.sort((a, b) => b.wins - a.wins)

for (const { teamName, wins, color } of nflTeamsArray) {
    if(wins !== 0) {
        const bar = document.createElement("div")
        bar.style.display = "flex"
        bar.style.justifyContent = "center"
        bar.style.alignItems = "center"
        bar.style.marginTop = "5px"
        bar.style.marginBottom = "5px"
        bar.style.paddingInline = "10px"
        bar.style.width = `${wins * 150}px`
        bar.style.height = "50px"
        bar.style.backgroundColor = color
        bar.style.color = "white"
        bar.innerText = `${teamName.toString()} - ${wins.toString()}`
        championshipsMainSection.appendChild(bar)
    
        if(teamName === "Pittsburgh Steelers" || teamName === "New Orleans Saints") {
            bar.style.color = "black"
        }
    }
}
