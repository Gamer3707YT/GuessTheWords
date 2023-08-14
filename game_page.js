
player1_name = localStorage.getItem("Player 1 Name");
player2_name = localStorage.getItem("Player 2 Name");

player1_score = 0;
player2_score = 0;

document.getElementById("p1name").innerHTML = player1_name + " : ";
document.getElementById("p2name").innerHTML = player2_name + " : ";
document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p2score").innerHTML = player2_score;

document.getElementById("questionturn").innerHTML = "Question Turn :- " + player1_name;
document.getElementById("answerturn").innerHTML = "Answer Turn :- " + player2_name;

function Send() {

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word In Lower Case = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length.divided2 = Math.floor(word.length/2);
    
    charAt2 = word.charAt(length.divided2);
    console.log(charAt2);

    divlengthm1 = word.length - 1;

    charAt3 = word.charAt(divlengthm1);
    console.log(charAt3);
    
    remove1 = word.replace(charAt1, "_");
    remove2 = remove1.replace(charAt2, "_");
    remove3 = remove2.replace(charAt3, "_");
    console.log(remove3);

    Question = "<h4 id='displayword'>Q. " + remove3 + "</h4>";
    inputbox = "<br> Answer : <input type='text' id='inputcheckbox'>";
    button = "<br> <br> <button class='btn btn-info' onclick='Check()'> Check </button>";
    row = Question + inputbox + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

QuestionTurn = "player1";
AnswerTurn = "player2";

function Check() {

    answer_unf = document.getElementById("inputcheckbox").value;
    answer = answer_unf.toLowerCase();
    console.log("Answer In LowerCase = " + answer);

    if (answer == word) {

        if (AnswerTurn == "player1"){

            player1_score = player1_score +1;
            document.getElementById("p1score").innerHTML = player1_score;

        }
        else {
            player2_score = player2_score +1;
            document.getElementById("p2score").innerHTML = player2_score;

        }

    }

    if (QuestionTurn == "player1") {
        QuestionTurn = "player2";
        document.getElementById("questionturn").innerHTML = "Question Turn :- " + player2_name;

    }
    else{
        QuestionTurn = "player1";
        document.getElementById("questionturn").innerHTML = "Question Turn :- " + player1_name;
    }

    if (AnswerTurn == "player1") {
        AnswerTurn = "player2";
        document.getElementById("answerturn").innerHTML = "Answer Turn :- " + player2_name;
    }
    else{
        AnswerTurn = "player1";
        document.getElementById("answerturn").innerHTML = "Answer Turn :- " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}

