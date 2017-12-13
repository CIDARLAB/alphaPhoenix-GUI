/**
 * Created by frascog on 12/12/17.
 */
const abstract = {
    "circuit": [
        [
            {
                "Transcriptional Unit 1": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            }
        ],
        [
            {
                "Transcriptional Unit 1": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            },
            {
                "Transcriptional Unit 2": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            }
        ],
        [
            {
                "Transcriptional Unit 1": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            },
            {
                "Transcriptional Unit 2": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            },
            {
                "Transcriptional Unit 3": [
                    "Promoter",
                    "RBS",
                    "CDS",
                    "Terminator"
                ]
            }
        ]
    ],
    "assignments": {
        "Promoter": [
            "pA1LacO",
            "pBM3R1",
            "pBetI",
            "pLmrA",
            "pLtetO_1",
            "pPhlF",
            "pSrpR"
        ],
        "RBS": [
            "BCD1",
            "BCD12",
            "BCD13",
            "BCD16",
            "BCD2",
            "BCD8"
        ],
        "CDS": [
            "BM3R1",
            "betI",
            "lacIm",
            "lmrA",
            "phlF",
            "srpR",
            "tetR",
            "EYFP",
            "mOrange",
            "T_Sapphire"
        ],
        "Terminator": [
            "B0015",
            "ECK120015170",
            "IR1_IR2_Term2",
            "L3S1P00",
            "L3S1P13",
            "L3S1P22",
            "L3S2P21",
            "T1"
        ]
    }
};

$().ready(function() {

    var menu = $('#abstractMenu');

    for(let i = 0; i < abstract.circuit.length; i++) {
        let menuItem = '<ul class="menu-list">';
        menuItem += "<li onclick=\"toggleCircuitVisibility('Circuit"+i+"')\"><a>Circuit " + (i + 1) + "</a>";
        for(let items of abstract.circuit[i]) {

            menuItem += '<ul class="Circuit'+i+'">'
            for (let unit in items) {
                menuItem += '<li><a>' + unit + '</a>';
                menuItem += '<ul>'
                for (let part of items[unit]) {
                    menuItem += '<li><a>' + part + '</a>';
                }
                menuItem += "</ul>";
                menuItem += "</li>";
            }
            menuItem += '</ul>'
        }
        menuItem += "</li>";
        menuItem += "</ul>";
        menu.append(menuItem);
    }
});

function toggleCircuitVisibility(id) {
    var item = $('.' + id);
    if(item.is(':visible')) {
        item.hide()
    } else {
        item.show()
    }
}