import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Home from './Home';
import AnotherScreen from './AnotherScreen';
import Greeting from './Greeting';

// import GreetingClass from './GreetingClass';

interface GreetingState {
  name: string,
  message: string
}

function App() {

  const [inputName, setName] = useState<GreetingState | null>(null);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {

    setName({name: e.target.value, 
            message: `Hi, ${e.target.value}` })
  }

  console.log(inputName)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact={true} path='/' component={Home}></Route>
            <Route path='/another' component={AnotherScreen}></Route>
          </Switch>

        </header>
      </div>
      <div>

        <input
          type="text"
          value={inputName?.name}
          onChange={onChangeName} />
        <Greeting message={inputName?.message} />
        {/* <GreetingClass message={inputName?.message} /> */}
      </div>
    </>
  );
}

export default App;
