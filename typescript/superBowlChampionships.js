var championshipsMainSection = document.getElementById("championships-main-section");
var nflTeams = new Map([
    ["Chicago Bears", { wins: 1, color: "rgb(11, 22, 42)" }],
    ["Cincinnati Bengals", { wins: 0, color: "rgb(251, 79, 20)" }],
    ["Buffalo Bills", { wins: 0, color: "rgb(0, 51, 141)" }],
    ["Denver Broncos", { wins: 3, color: "rgb(251, 79, 20)" }],
    ["Cleveland Browns", { wins: 0, color: "rgb(49, 29, 0)" }],
    ["Tampa Bay Buccaneers", { wins: 2, color: "rgb(213, 10, 10)" }],
    ["Arizona Cardinals", { wins: 0, color: "rgb(151,35,63)" }],
    ["Los Angeles Chargers", { wins: 0, color: "rgb(0, 128, 198)" }],
    ["Kansas City Chiefs", { wins: 4, color: "rgb(227, 24, 55)" }],
    ["Indianapolis Colts", { wins: 2, color: "rgb(0, 44, 95)" }],
    ["Washington Commanders", { wins: 3, color: "rgb(90, 20, 20)" }],
    ["Dallas Cowboys", { wins: 5, color: "rgb(0, 53, 148)" }],
    ["Miami Dolphins", { wins: 2, color: "rgb(0, 142, 151)" }],
    ["Philadelphia Eagles", { wins: 2, color: "rgb(0, 76, 84)" }],
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
    ["Seattle Seahawks", { wins: 2, color: "rgb(0, 34, 68)" }],
    ["Pittsburgh Steelers", { wins: 6, color: "rgb(255, 182, 18)" }],
    ["Houston Texans", { wins: 0, color: "rgb(3, 32, 47)" }],
    ["Tennessee Titans", { wins: 0, color: "rgb(12, 35, 64)" }],
    ["Minnesota Vikings", { wins: 0, color: "rgb(79, 38, 131)" }]
]);
var nflTeamsArray = Array.from(nflTeams, function (_a) {
    var teamName = _a[0], _b = _a[1], wins = _b.wins, color = _b.color;
    return ({ teamName: teamName, wins: wins, color: color });
});
nflTeamsArray.sort(function (a, b) { return b.wins - a.wins; });
for (var _i = 0, nflTeamsArray_1 = nflTeamsArray; _i < nflTeamsArray_1.length; _i++) {
    var _a = nflTeamsArray_1[_i], teamName = _a.teamName, wins = _a.wins, color = _a.color;
    if (wins !== 0) {
        var bar = document.createElement("div");
        bar.style.display = "flex";
        bar.style.justifyContent = "center";
        bar.style.alignItems = "center";
        bar.style.marginTop = "5px";
        bar.style.marginBottom = "5px";
        bar.style.paddingInline = "10px";
        bar.style.width = "".concat(wins * 150, "px");
        bar.style.height = "50px";
        bar.style.backgroundColor = color;
        bar.style.color = "white";
        bar.innerText = "".concat(teamName.toString(), " - ").concat(wins.toString());
        championshipsMainSection.appendChild(bar);
        if (teamName === "Pittsburgh Steelers" || teamName === "New Orleans Saints") {
            bar.style.color = "black";
        }
    }
}
