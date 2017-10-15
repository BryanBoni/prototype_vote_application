resumVoteInit();

/**
 * 
 * @returns {undefined}
 */
function resumVoteInit() {
    var ongoingVoteList = "ongoingVoteList";
    createVoteObject(ongoingVoteList, false, true, "Sondage : pain au chocolat ou chocolatine ?", new Array("Pain au chocolat", "Chocolatine", "En a rien à faire"), new Array(10, 10, 80), null);
    createVoteObject(ongoingVoteList, false, false, "Election : Maire de paris", new Array("Kevin", "Justin", "Sarah", "Bob l'éponge", "Lionel M"), new Array(""), null);

    var lastResultList = "lastResultList";
    createVoteObject(lastResultList, true, true, "Sondage : Slip ou caleçon ?", new Array("Slip", "Caleçon", "Rien"), new Array(54, 45, 1), "Slip");

}

/**
 * 
 * @param {type} list
 * @param {type} isFinished
 * @param {type} isPublic
 * @param {type} title
 * @param {type} choices
 * @param {type} results
 * @param {type} winner
 */
function createVoteObject(list, isFinished, isPublic, title, choices, results, winner) {
    var listToUse = document.getElementById(list);

    var vote = document.createElement("div");
    vote.setAttribute("id", "listItem");
    vote.setAttribute("class", "col-sm-4");

    var voteTitle = document.createElement("h4");
    voteTitle.innerHTML = "<b>" + title + "</b>";

    var voteChoicesList = document.createElement("ul");
    //voteChoicesList.setAttribute("style", "list-style-type: none !important;");

    var i = 0;
    choices.forEach(function (item) {

        if (isPublic) {
            if (winner != null) {
                if (winner == item) {
                    item = "<span style=\"color: #00CC99; font-size:18px; \"><b>" + item + " : " + results[i] + "%" + "</span></b>";
                } else {
                    item = "<span style=\"color: #f44253;\">" + item + " : " + results[i] + "%" + "</span>";
                }
            } else {
                item = item + " : " + results[i] + "%";
            }
        }

        //document.write(item + " ");
        voteChoicesList.appendChild(createListItem(item));
        i++;
    });

    vote.appendChild(voteTitle);
    vote.appendChild(voteChoicesList);
    listToUse.appendChild(vote);
}

/**
 * 
 * @param {type} content
 * @returns {Element|createListItem.voteChoicesItem}
 */
function createListItem(content) {
    var voteChoicesItem = document.createElement("li");

    voteChoicesItem.innerHTML = content;
    return voteChoicesItem;
}
