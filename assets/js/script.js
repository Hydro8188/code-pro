// Selecting the HTML, CSS, and JS quiz navigation links and the main quiz container //

const htmlATag = document.querySelector('#html-a-tag')
const cssATag = document.querySelector('#css-a-tag')
const jsATag = document.querySelector('#js-a-tag')
const quizContainerMain = document.querySelector('.quiz-container')

// CSS QUESTIONS //

const cssQuestions = [
  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["&lt;style&gt;", "&lt;css&gt;", "&lt;script&gt;", "&lt;link&gt;"],
    correct: "&lt;style&gt;"
  },
  {
    question: "How do you change the text color of an element in CSS?",
    answers: ["text-color:", "color:", "font-color:", "text-style:"],
    correct: "color:"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    answers: ["bgcolor", "color", "background-color", "background"],
    correct: "background-color"
  },
  {
    question: "How do you add a comment in CSS?",
    answers: ["// this is a comment", "&lt;!-- this is a comment --&gt;", "/* this is a comment */", "# this is a comment"],
    correct: "/* this is a comment */"
  },
  {
    question: "Which property is used to change the font of an element?",
    answers: ["font-weight", "font-style", "font-family", "font-type"],
    correct: "font-family"
  },
  {
    question: "How do you select an element with id 'header' in CSS?",
    answers: [".header", "#header", "*header", "header"],
    correct: "#header"
  },
  {
    question: "Which property is used to create space between the element's border and its content?",
    answers: ["padding", "margin", "border-spacing", "spacing"],
    correct: "padding"
  },
  {
    question: "What is the default value of the 'position' property in CSS?",
    answers: ["absolute", "relative", "static", "fixed"],
    correct: "static"
  },
  {
    question: "Which CSS property controls the text size?",
    answers: ["font-style", "text-size", "font-size", "text-style"],
    correct: "font-size"
  }
];

// HTML QUESTIONS //
const htmlQuestions = [
  {
    question: "What is HTML?",
    answers: ["Hyper Text Markup Language", "Hyper Tool Marked-up Language", "Hyper Test Made Language", "Hyperlinking Text Marking Language"],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["&ltbreak&gt", "&ltbr&gt", "&ltlb&gt", "&lthr&gt"],
    correct: "&ltbr&gt"
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    answers: ["&ltheading&gt", "&lth6&gt", "&lth1&gt", "&lthead&gt"],
    correct: "&lth1&gt"
  },
  {
    question: "Choose the correct HTML element to define emphasized text:",
    answers: ["&ltitalic&gt", "&ltem&gt", "&lti&gt", "&lte&gt"],
    correct: "&ltem&gt"
  },
  {
    question: "Which character is used to indicate an end tag?",
    answers: ["/", "*", "<", "^"],
    correct: "/"
  },
  {
    question: "How can you make a numbered list?",
    answers: ["&ltol&gt", "&ltul&gt", "&ltdl&gt", "&ltlist&gt"],
    correct: "&ltol&gt"
  },
  {
    question: "How can you make a bulleted list?",
    answers: ["&ltul&gt", "&ltol&gt", "&ltlist&gt", "&ltdl&gt"],
    correct: "&ltul&gt"
  },
  {
    question: "Which of the following elements is used to define a hyperlink in HTML?",
    answers: ["&lta&gt", "&ltlink&gt", "&lthref&gt", "&lturl&gt"],
    correct: "&lta&gt"
  },
  {
    question: "Which HTML element defines the title of a document?",
    answers: ["&lttitle&gt", "&ltmeta&gt", "&lthead&gt", "&ltheading&gt"],
    correct: "&lttitle&gt"
  },
  {
    question: "What is the correct HTML element to define important text?",
    answers: ["&ltstrong&gt", "&ltimportant&gt", "&lti&gt", "&ltb&gt"],
    correct: "&ltstrong&gt"
  }
];

// JAVASCRIPT QUESTIONS //
const jsQuestions = [
  {
    question: "Which language is used for web development?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: "JavaScript"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["#", "//", "/*", ";;"],
    correct: "//"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    answers: ["&ltscript href='script.js&gt", "&ltscript src='script.js&gt", "&ltscript name='script.js&gt", "&ltscript file='script.js&gt"],
    correct: "&ltscript src='script.js&gt"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: ["function myFunction()", "function:myFunction()", "create myFunction()", "function = myFunction()"],
    correct: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: ["call myFunction()", "myFunction.call()", "myFunction()", "execute myFunction()"],
    correct: "myFunction()"
  },
  {
    question: "Which operator is used to compare values in JavaScript?",
    answers: ["==", "=", "===", "<>"],
    correct: "=="
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: ["var myVariable", "variable myVariable", "v myVariable", "define myVariable"],
    correct: "var myVariable"
  },
  {
    question: "What is the output of 'console.log(typeof NaN)'?",
    answers: ["'number'", "'string'", "'undefined'", "'object'"],
    correct: "'number'"
  },
  {
    question: "Which method is used to remove the last element from an array?",
    answers: ["pop()", "shift()", "push()", "remove()"],
    correct: "pop()"
  },
  {
    question: "How do you write an 'if' statement in JavaScript?",
    answers: ["if (condition) {}", "if condition {};", "if condition then {}", "if (condition) then {}"],
    correct: "if (condition) {}"
  }
];



let currentQuestionIndex = 0; // Track the index of the current question//
let score = 0; // Track the user's score//
let questions = []; // Array to hold the selected quiz questions//

// Event listener to run code after the DOM has fully loaded//
document.addEventListener('DOMContentLoaded', function () {

  const quizContainer = document.getElementById('quiz-container'); // Quiz container where questions are loaded//
  const urlParams = new URLSearchParams(window.location.search);// Retrieve the URL parameters//
  const choice = urlParams.get('choice'); // Get the 'choice' parameter from the URL to determine the selected quiz//

  //getting lastScore from localStorage//
  let lastScore = localStorage.getItem('quizScore'); 
  // Check which quiz was selected and display an appropriate heading//
  if (choice === 'HTML') {
    console.log(choice)
    let h3 = document.createElement('h3');
    h3.classList.add('quiz-heading');
    h3.textContent = "You have chosen HTML Quiz";
    quizContainerMain.appendChild(h3);

  }

  if (choice === 'CSS') {
    console.log(choice);
    let h3 = document.createElement('h3');
    h3.classList.add('quiz-heading');
    h3.textContent = "You have chosen CSS Quiz";
    console.log("CSS")
    quizContainerMain.appendChild(h3);

  }

  if (choice === 'JS') {
    console.log(choice)
    let h3 = document.createElement('h3');
    h3.classList.add('quiz-heading');
    h3.textContent = "You have chosen JS Quiz";
    quizContainerMain.appendChild(h3);
  }

  // Add event listeners to the navigation links to redirect to the appropriate quiz page//
  if (htmlATag) {
    htmlATag.addEventListener('click', function (event) {
      event.preventDefault();
      const nextPageHtmlUrl = 'quiz.html?choice=HTML';
      window.location.href = nextPageHtmlUrl;
    });
  }

  if (cssATag) {
    cssATag.addEventListener('click', function (event) {
      event.preventDefault()
      const nextPageCssUrl = 'quiz.html?choice=CSS'
      window.location.href = nextPageCssUrl;
    })
  }

  if (jsATag) {
    jsATag.addEventListener('click', function (event) {
      event.preventDefault()
      const nextPageJsUrl = 'quiz.html?choice=JS'
      window.location.href = nextPageJsUrl;
    })
  }

  // Load the selected quiz questions based on the 'choice' parameter//
  if (choice) {
    switch (choice) {
      case 'HTML':
        questions = htmlQuestions;
        break;
      case 'CSS':
        questions = cssQuestions;
        break;
      case 'JS':
        questions = jsQuestions;
        break;
    }
    loadQuestion(); //calling the loadQuestion() Load the first question//
  }

  //Function to decode HTML entities ( &lt; to < and &gt; to >) to compare with the correct answer//
  function decodeHtmlEntities(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    console.log(text)
    return textarea.value;

  }

  // Function to load the current question into the quiz container//
  function loadQuestion() {
    disableBackArrow(); // Call the disablebackArrow function() to disable the browser back button//

    const storedIndex = localStorage.getItem('currentQuestionIndex'); //retrieving current questionIndex//
    currentQuestionIndex = storedIndex ? parseInt(storedIndex) : 0; //currentQuestionIndex = integerValue stored in localStorage if condition is true or its zero//

    if (currentQuestionIndex >= questions.length) {
      showResults(); // Show results if all questions have been answered//
      return;
    }
    const questionData = questions[currentQuestionIndex]; // Get the current question//

    quizContainer.innerHTML = `
        <div class="question">
            <h4 class = "question-head">${questionData.question}</h4>
            ${questionData.answers.map(answer => `
                <label class = "answer-label">
                    <input class = "answer-input" type="radio" name="answer" value="${answer}">
                    ${answer}
                </label><br>
            `).join('')}
        </div>
        <button id="submit-button">Submit</button>
    `;

    document.getElementById('submit-button').addEventListener('click', checkAnswer);// event listener to submit button//
  }

  //function to check if selected answer is write or wrong//
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const warningModal = new bootstrap.Modal(document.getElementById('warningModal'))
    if (!selectedAnswer) {
      document.querySelector('#modal-close-btn').addEventListener('click', function () {
        warningModal.hide();
      })
      warningModal.show();//modal('show'); // Show the Bootstrap modal if no answer is selected
      return;
    }


    const correctAnswer = decodeHtmlEntities(questions[currentQuestionIndex].correct); // Decode the correct answer//

    if (decodeHtmlEntities(selectedAnswer.value) === correctAnswer) {
      score++; // Increment score if the answer is correct

      console.log(score)
      // label.textContent= ''
    } else {


    }

    currentQuestionIndex++;
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    loadQuestion(); // Load the next question using loadQuestion()//
  }

  //function to show results of the test//
  function showResults() {


    lastScoreRecorded();// Call the lastScoreRecorded function inorder to diplay the last score//

    quizContainer.innerHTML = `
      <h3>Quiz Complete!</h3>
      <p>Your score is ${score} out of ${questions.length}</p>
      <button id="try-again" onclick="window.location.href='index.html'";">Back to Home</button>
  `;
    localStorage.removeItem('currentQuestionIndex'); //clearing the item//
    localStorage.setItem('quizScore', score); // store score in localStorage //
  }

  // A function to print the last score //
  function lastScoreRecorded() {
    //let lastScore = localStorage.getItem('quizScore');
    console.log(quizContainerMain)
    if(lastScore != null){
      // Insert last score into the quiz container if not null//
      quizContainerMain.insertAdjacentHTML('beforeend',`<label>Last Score was ${lastScore}</label>`)
     }else{
      // Insert a message to container if it is null//
       quizContainerMain.insertAdjacentHTML('beforeend', `<label>No previous score recorded.</label>`);
     }
    
    console.log(`Last score ${lastScore}`)
  }
});

//function to disable the browser back arrow when in quiz.html page //
function disableBackArrow() {
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    history.go(1);
  };
}