import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import ReactGa from 'react-ga';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NotFound from './NotFound';
import QuizMain from './QuizMain';
const BreadcrumbQuiz = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="https://www.mykhel.com/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Olympics Quiz</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default function App() {

    useEffect(function () {
        ReactGa.initialize('UA-110466-78');
        ReactGa.pageview(window.location.href);
    }, []);

    useEffect(function () {
        let querystring = new URLSearchParams(window.location.search);
        if (querystring.get('is_iframe')) {
            setHideBreadcrumb(true);
        }
    }, []);
    const [hideBreadcrumb, setHideBreadcrumb] = useState(false);
    return (
        <>{!hideBreadcrumb ? <Container className="p-0">
            <BreadcrumbQuiz />
        </Container> : <></>}

            <Container className="containerMain  mb-md-4 pb-5" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + '/quiz-video-bg.jpg' + ")", backgroundSize: "cover" }}>
                <Router basename='olympics-quiz'>
                    <Switch>
                        <Route exact path="/" component={QuizMain} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Container>
        </>
    );
}