import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Sergei", age: 34, job: "Dev", hobbies: "Games, Study, Gym"},
            {name: "Lena", age: 31, job: "QA", hobbies: "Gym, Reading"}
        ]
    }

    switchNameHandler = (newName) => {
        let persons = this.state.persons;
        persons[0].name = newName;
        this.setState(persons);
    }

    nameChangeHandler = (event) =>{
        let persons = this.state.persons;
        persons[1].name = event.target.value;
        this.setState(persons);
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={this.switchNameHandler.bind(this, "another name")}>Press me!</button>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        job={this.state.persons[0].job}
                        click={this.switchNameHandler.bind(this, "My new name! ")}>
                        changed={this.nameChangeHandler}
                        {this.state.persons[0].hobbies}
                    </Person>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[0].age}
                        job={this.state.persons[1].job}
                        changed={this.nameChangeHandler}>
                        {this.state.persons[0].hobbies}
                    </Person>
                </div>
            </div>
        );
    }
}

export default App;
