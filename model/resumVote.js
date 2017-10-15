resumVoteInit();

function resumVoteInit() {
    var ongoingVoteList = "ongoingVoteList";
    createVoteObject(ongoingVoteList, false, "Sondage : pain au chocolat ou chocolatine ?");
    createVoteObject(ongoingVoteList, false, "Election : Maire de paris");

    var lastResultList = "lastResultList";
    createVoteObject(lastResultList, true, "Sondage : Slip ou caleçon ?");

}
function createVoteObject(list, isFinished, titre) {
    var listToUse = document.getElementById(list);

    var vote = document.createElement("div");
    vote.setAttribute("id", "listItem");
    vote.setAttribute("class", "col-sm-4");

    var voteTitle = document.createElement("h4");
    voteTitle.appendChild(document.createTextNode(titre));

    vote.appendChild(voteTitle);
    listToUse.appendChild(vote);
}
