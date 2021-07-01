import './App.css';
import MainComponent from "./Components/MainComponent";
import NotFound from "./Components/ErrorPages/NotFound";
import './assets/styles/style.scss'
import {useEffect, useState} from "react";
import {Route, Switch, BrowserRouter} from 'react-router-dom';

function App() {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        fakeRequest().then(() => {
            const el = document.querySelector(".page-loader-wrapper");
            if (el) {
                el.remove();
                setLoading(!isLoading);
            }
        });
    }, []);

    function fakeRequest() {
        return new Promise(resolve => setTimeout(() => resolve(), 1500));
    }

    if (isLoading) {
        return null;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainComponent}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
