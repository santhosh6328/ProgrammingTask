

var json = {
    title: "Programming Task",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "Please click on 'Start Quiz', button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "age",
                    title: "What is your age?",
                    choices: [
                        "Less than 18", "More than 18", "Would rather not say"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "gender",
                    title: "What is your gender ?",
                    choicesOrder: "random",
                    choices: [
                        "Male", "Female", "Would rather not say"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "health",
                    title: "How Health consious are you?",
                    choicesOrder: "random",
                    choices: [
                        "Very", "May be a little", "Not at all"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "softDrink",
                    title: "What soft drink do you drink?",
                    choicesOrder: "random",
                    choices: [
                        "Pepsi", "coke", "thums-up"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Excercise",
                    title: "How frequently do you excercise ?",
                    choicesOrder: "random",
                    choices: [
                        "Daily", "Weekly", "Annually"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "concerned_of_your_health",
                    title: "Are you concerned of your health ?",
                    choicesOrder: "random",
                    choices: [
                        "Yes", "No", "Sometimes"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "news",
                    title: "Do you read about health news ?",
                    choicesOrder: "random",
                    choices: [
                        "Yes", "No", "Sometimes"
                    ],
                }
            ]
        }
    ],
    completedHtml: "<h4>Thank you for participating in the survey.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
