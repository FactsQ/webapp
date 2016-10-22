
// define elements
    var life =3;
    var time = 61;
    var time_container = document.getElementById('span_timer');
    var heart  = document.getElementById('heart');
    function timer() { 
      var timerId = setInterval(function() {
        //console.log(i);
        time = time - 1;
        if(time < 0) {
          //alert("Times Up!");
          window.confirm("Times Up!");
          clearInterval(timerId);
          heart.style.color = "#000000";
          fail();
          time_container.style.color = "transparent";
        }else if(time < 4) {
          time_container.style.color = "red"; 
          time_container.innerHTML = time;
        }else{
          time_container.innerHTML = time;
        }
      }, 1000);
    }
    timer();

    // var life = 3;
    var quesnum = 1;
    var content = $("content"),
      questionContainer = $("question"),
      choicesContainer = $("choices"),
      scoreContainer = $("score"),
      submitBtn = $("submit");

    // init vars
    var currentQuestion = 0,
      score = 0,
      askingQuestion = true;

    function $(id) { // shortcut for document.getElementById
      return document.getElementById(id);
    }

    function askQuestion() {
      var choices = quiz[currentQuestion].choices,
        choicesHtml = "";

      // loop through choices, and create radio buttons
      for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
          "' id='choice" + (i + 1) +
          "' value='" + choices[i] + "'>" +
          " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
      }

      // load the question
      questionContainer.textContent = "Q" + (currentQuestion+1) + ". " +
        quiz[currentQuestion].question;

      // load the choices
      choicesContainer.innerHTML = choicesHtml;

      // setup for the first time
      if (currentQuestion === 0) {
        scoreContainer.textContent = "Score: 0 right answers out of " +
          quiz.length + " possible.";
        submitBtn.textContent = "Submit Answer";
      }
    }

    function checkAnswer() {
      // are we asking a question, or proceeding to next question?
      if (askingQuestion) {
        submitBtn.textContent = "Next Question";
        askingQuestion = false;

        // determine which radio button they clicked
        var userpick,
          correctIndex,
          radios = document.getElementsByName("quiz" + currentQuestion);
        for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) { // if this radio button is checked
            userpick = radios[i].value;
          }

          // get index of correct answer
          if (radios[i].value == quiz[currentQuestion].correct) {
            correctIndex = i;
          }
    }

    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      document.getElementById('lives').innerHTML=('<span id="heart">&#9829;</span> X' +life);
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
      life = life-1;
      document.getElementById('lives').innerHTML=('<span id="heart">&#9829;</span> X' +life);
      if (life == 0) {
        fail();
      }
    }

        scoreContainer.textContent = "Score: " + score + " right answers out of " +
          quiz.length + " possible.";
      } else { // move to next question
        // setting up so user can ask a question
        askingQuestion = true;
        // change button text back to "Submit Answer"
        submitBtn.textContent = "Submit Answer";
        // if we're not on last question, increase question number
        if (currentQuestion < quiz.length - 1) {
          currentQuestion++;
          askQuestion();
        } else {
          showFinalResults();
        }
      }
    }
    function fail(){
      content.innerHTML = "<h2>You fail the quiz!</h2>" +
        "<h2>Below are your results:</h2>" +
        "<h2>" + score + " out of " + quiz.length + " questions, " +
        Math.round(score / quiz.length * 100) + "%<h2>";
        time = 0;

    }
    function showFinalResults() {
      content.innerHTML = "<h2>You've completed the quiz!</h2>" +
        "<h2>Below are your results:</h2>" +
        "<h2>" + score + " out of " + quiz.length + " questions, " +
        Math.round(score / quiz.length * 100) + "%</h2>";
        time = 0;
        window.alert = function(){
          window.alert = function(text){
            "andadshkajhd"
          };
        }
    }

    window.addEventListener("load", askQuestion, false);
    submitBtn.addEventListener("click", checkAnswer, false);