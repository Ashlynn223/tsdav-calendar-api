import logo from './logo.svg';
import './App.css';
import { DAVClient } from 'tsdav';
import {useEffect} from 'react';

function App() {
  const thisIsAfunk = (async () => {
      const client = new DAVClient({
        serverUrl: 'https://apidata.googleusercontent.com/caldav/v2/',
        credentials: {
          tokenUrl: 'https://accounts.google.com/o/oauth2/token',
          username: '',
          refreshToken: '',
          clientId: '',
          clientSecret: '',
        },
        authMethod: 'Oauth',
        defaultAccountType: 'caldav',
      });

      (async () => {
        await client.login();
      
        const calendars = await client.fetchCalendars();
      
        const calendarObjects = await client.fetchCalendarObjects({
          calendar: calendars[0],
        });
      })();
    
      // const calendars = await client.fetchCalendars();
    
      // const calendarObjects = await client.fetchCalendarObjects({
      //   calendar: calendars[0],
      // });
      // console.log("calendarObjects", calendarObjects)
  })()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
