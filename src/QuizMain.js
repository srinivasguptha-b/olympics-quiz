import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import ReactGa from 'react-ga';
import SingleAdUnit from "./SingleAdUnit";
import { isMobile } from 'react-device-detect';
const QuizMain = () => {
    let history = useHistory();
    const [hideBreadcrumb, setHideBreadcrumb] = useState(false);
    const questions = [
        {
            questionText: 'Who won India\'s first individual medal ?',
            answerOptions: [
                { answerText: 'KD Jadhav', isCorrect: true },
                { answerText: 'Leander Paes', isCorrect: false },
                { answerText: 'Karnam Malleswari', isCorrect: false }
            ],
        },
        {
            questionText: 'Who won India its only medal in tennis ?',
            answerOptions: [
                { answerText: 'Ramesh Krishnan', isCorrect: false },
                { answerText: 'Leander Paes', isCorrect: true },
                { answerText: 'Somdev Devvarman', isCorrect: false }
            ],
        },
        {
            questionText: 'How many times has Indian men won hockey gold?',
            answerOptions: [
                { answerText: '5', isCorrect: false },
                { answerText: '7', isCorrect: false },
                { answerText: '8', isCorrect: true },
            ],
        },
        {
            questionText: 'When was the last time India won hockey gold?',
            answerOptions: [
                { answerText: '1952 Helsinki', isCorrect: false },
                { answerText: '1980 Moscow', isCorrect: true },
                { answerText: '1996 Atlanta', isCorrect: false }
            ],
        },
        {
            questionText: 'Who is the first Indian woman weightlifter to win a medal?',
            answerOptions: [
                { answerText: 'PV Sindhu', isCorrect: false },
                { answerText: 'Saina Nehwal', isCorrect: false },
                { answerText: 'Karnam Malleswari', isCorrect: true }
            ],
        },
        {
            questionText: 'Which year did India win its first medal in shooting?',
            answerOptions: [
                { answerText: '2004 Athens', isCorrect: true },
                { answerText: '2008 Beijing', isCorrect: false },
                { answerText: '2012 London', isCorrect: false }
            ],
        },
        {
            questionText: 'Who is the first Indian woman wrestler to win a medal?',
            answerOptions: [
                { answerText: 'Vinesh Phogat', isCorrect: false },
                { answerText: 'Sakshi Malik', isCorrect: true },
                { answerText: 'Divya Kakran', isCorrect: false }
            ],
        },
        {
            questionText: 'In which Olympics did India win maximum medals?',
            answerOptions: [
                { answerText: '1980 Moscow', isCorrect: false },
                { answerText: '2000 Sydney', isCorrect: false },
                { answerText: '2012 London', isCorrect: true }
            ],
        },
        {
            questionText: 'Who won India its first individual gold medal?',
            answerOptions: [
                { answerText: 'Milkha Singh', isCorrect: false },
                { answerText: 'Abhinav Bindra', isCorrect: true },
                { answerText: 'Rajyavardhan Singh Rathore', isCorrect: false }
            ],
        },
        {
            questionText: 'Who won India its first medal in boxing?',
            answerOptions: [
                { answerText: 'Akhil Kumar', isCorrect: false },
                { answerText: 'Vijender Singh', isCorrect: true },
                { answerText: 'Vikas Kishan', isCorrect: false }
            ],
        },
        {
            questionText: 'Cricket was part of which Olympics?',
            answerOptions: [
                { answerText: '1896', isCorrect: false },
                { answerText: '1900', isCorrect: true },
                { answerText: '1936', isCorrect: false }
            ],
        },
        {
            questionText: 'Who was the first mascot of Summer Games?',
            answerOptions: [
                { answerText: 'Waldi 1972 Munich', isCorrect: true },
                { answerText: 'Amik 1976 Montreal', isCorrect: false },
                { answerText: 'Misha 1980 Moscow', isCorrect: false }
            ],
        },
        {
            questionText: 'Who is the founder of modern Games?',
            answerOptions: [
                { answerText: 'Pierre de Coubertin', isCorrect: true },
                { answerText: 'Jesse Owens', isCorrect: false },
                { answerText: 'Carl Lewis', isCorrect: false }
            ],
        },
        {
            questionText: 'Which woman has won maximum medals?',
            answerOptions: [
                { answerText: 'Jackie Joyner Kersee', isCorrect: false },
                { answerText: 'Nadia Comaneci', isCorrect: false },
                { answerText: 'Larisa Latynina', isCorrect: true }
            ],
        },
        {
            questionText: 'How many times Olympics has been cancelled?',
            answerOptions: [
                { answerText: 'Never', isCorrect: false },
                { answerText: '3 times', isCorrect: false },
                { answerText: '5 times', isCorrect: true }
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState([]);
    const [clicked, setClicked] = useState([]);
    const [answeredCount, setAnsweredCount] = useState(0);
    const [ansToggle, setAnsToggle] = useState(false);
    useEffect(function () {
        let querystring = new URLSearchParams(window.location.search);
        if (querystring.get('is_iframe')) {
            setHideBreadcrumb(true);
        }

        if (window.location.href.split('/').pop().includes('#')) {

            if (querystring.get('is_iframe')) {
                window.location.href = window.location.href.replace(window.location.href.split('/').pop(), '') + "?is_iframe=1";
            } else {
                window.location.href = window.location.href.replace(window.location.href.split('/').pop(), '');
            }
        }
        //window.location = window.location.pathname;
    }, []);
    useEffect(function () {
        ReactGa.initialize('UA-110466-78');
    }, []);

    useEffect(function () {
        ReactGa.pageview(window.location.href);
    }, [currentQuestion, showScore]);

    const handleAnswerOptionClick = (answerOption) => {
        setClicked([...clicked, { qtnindex: currentQuestion, ansindex: answerOption.index }]);
        if (answerOption.isCorrect) {
            setScore(score + 1);
        }
        setAnsToggle(true);
        setTimeout(function () {
            setAnsweredCount(answeredCount + 1);
            setAnswered([...answered, currentQuestion]);
        }, 300);
    };


    const AnswerButtonNew = (answerOption) => {
        let opind = ['A', 'B', 'C', 'D'];
        let chkvarient = "";
        if (answered.indexOf(currentQuestion) > -1) {
            if (answerOption.isCorrect) {
                chkvarient = "correct";
            } else {
                clicked.map(v => {
                    if (v.qtnindex === currentQuestion) {
                        if (v.ansindex === answerOption.index) {
                            chkvarient = "wrong"
                        }
                    }
                });
            }

        } else {
            chkvarient = ""
        }
        return (
            <li className={chkvarient}><div className="w-100 mt-3">
                <div className="option1">
                    <div className="left-option">
                        {opind[answerOption.index]}
                    </div>

                    <Button className="m-0 p-3 w-100 right-option" onClick={() => handleAnswerOptionClick(answerOption)} disabled={(answered.indexOf(currentQuestion) > -1) ? "disabled" : ""}> {answerOption.answerText} </Button>

                </div>
            </div>
            </li>
        )
    }
    const gotoNextQuestion = () => {
        if (ansToggle) {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                if (hideBreadcrumb) {
                    history.push("/?is_iframe=1#" + parseInt(nextQuestion + 1));
                } else {
                    history.push("/#" + parseInt(nextQuestion + 1));
                }

                if (nextQuestion == 1) {
                    if (isMobile) {
                        ReactGa.event({
                            category: 'Olympics Quiz',
                            action: 'OlympicsSplPage1',
                            label: 'Mobile Start'
                        });
                    } else {
                        ReactGa.event({
                            category: 'Olympics Quiz',
                            action: 'OlympicsSplPage1',
                            label: 'Desktop Start'
                        });
                    }
                }

            } else {
                setShowScore(true);
                if (isMobile) {
                    ReactGa.event({
                        category: 'Olympics Quiz',
                        action: 'OlympicsSplPage1',
                        label: 'Mobile End'
                    });
                } else {
                    ReactGa.event({
                        category: 'Olympics Quiz',
                        action: 'OlympicsSplPage1',
                        label: 'Desktop End'
                    });
                }
            }
            setAnsToggle(false);
        }
    }

    return (

        <>
            <div className='row w-100 text-white'>
                {!hideBreadcrumb ? <SingleAdUnit /> : <></>}
                <div className='col-md-2'></div>
                <div className='main col-md-8 d-flex align-items-center justify-content-center'>
                    <h1 className="text-center">Quiz About The Olympic Games</h1>
                    {/* <div className="d-none d-md-block">Desktop</div>
                    <div className="d-block d-sm-none">Mobile</div> */}
                    {showScore ? (<>
                        <div className='col-md-12 text-center mt-4 oidw-quiz-block d-flex align-items-center justify-content-center flex-column'>
                            <h2 className="">You scored {score} out of {questions.length}</h2>
                            <h2><Button variant="link" onClick={() => { window.location.reload(); }}>Play Again</Button></h2>

                        </div>
                    </>) : (<>
                        <div className="col-md-12 oidw-quiz-block mt-4 p-4">
                            <div className='mb-2'>
                                <div className='col-md-12 oidw-quiz-no d-flex flex-row'>
                                    <div className="col-md-2 text-center"><i>{currentQuestion + 1}</i></div>
                                    <div className='question col-md-10'>Q. {questions[currentQuestion].questionText}</div>
                                </div>
                            </div>
                            <div className='col-md-12 options mb-5'>
                                <ul>
                                    {questions[currentQuestion].answerOptions.map((answerOption, i) => (
                                        <AnswerButtonNew index={i} {...answerOption} key={i} />
                                    ))}
                                </ul>
                            </div>
                            <div className="option-bottom clearfix nextques">
                                <div className="next-question">
                                    <button type="button" name="button" onClick={gotoNextQuestion}>
                                        {currentQuestion + 1 < questions.length ? <>
                                            Next Question <span className="oidw-arrow-right"></span></> : <> Finish </>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>
                <div className='col-md-2'></div>
            </div>
        </>

    );
}
export default QuizMain;
