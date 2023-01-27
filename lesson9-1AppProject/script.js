function display()
{
    var answerChosen = "";
    var testScore = 100;
    var testLen = document.getElementById('test').getElementsByTagName('p').length;
    var choice = [];
    var chosen = [];
    for(i = 1; i < testLen + 1; i++)
    {
        var answer = document.getElementsByName(`group${i}`);
        answer = Array.from(answer);
        var correctAnswer = document.getElementsByName(`group${i}${i}`)
        let len = answer.length;
        answer.forEach(function(ele, ind)
        {
            if (ele.value == 'correct')
            {
                choice.push(correctAnswer[ind].innerText);
            }
        })
        let newChoice = answer.some(function(ele)
        {
            return ele.checked == true;
        })
        if (newChoice != true)
        {
            testScore -= Math.round(100/6);
            answerChosen += `Your incorrect answer for question number ${i} was that you didnt make a choice. The correct answer was ${choice[i - 1]}.\n `;
            continue;
        }
        for(j = 0; j < len; j++)
        {
            if (answer[j].checked == true && answer[j].value != 'correct')
            {
                testScore -= Math.round(100/6);
                answerChosen += `Your incorrect answer for question number ${i} was ${correctAnswer[j].innerText}. The correct answer was ${choice[i - 1]}.\n `;
                break;
            }
        }
    }
    if (testScore < 0)
    {
        testScore = 0;
    }
    if (testScore == 100)
    {
        alert(`Your score is ${testScore} percent. Great job!`);
    }
    else
    {
        alert(`Your score is ${testScore} percent.\n ${answerChosen}.`)
    }
}

function check()
{

}
// if(!Array.from.some(input => input.checked))
// {
//     testScore -= Math.round(100/6);
//     answerChosen += `Your incorrect answer for question number ${i} was that you didnt make a choice. The correct answer was ${choice[i - 1]}.\n `;
// }

// if (answer[j].checked != true)
// {
//     answerChosen += `Your incorrect answer for question number ${i} was that you didnt pick an answer. The correct answer was ${choice[i - 1]}.\n `;
//     testScore -= Math.round(100/6);
//     break;
// }

