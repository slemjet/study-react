import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Person name="Sergei" age='34' job = 'Dev'/>
                    <Person name="Lena" age='31' job = 'QA'/>
                </div>
            </div>
        );
    }

}

export default App;
