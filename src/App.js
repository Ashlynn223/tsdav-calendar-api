import logo from './logo.svg';
import './App.css';
import { createDAVClient } from 'tsdav';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    (async () => {
      const client = await createDAVClient({
        serverUrl: 'https://apidata.googleusercontent.com/caldav/v2/',
        credentials: {
          tokenUrl: 'https://accounts.google.com/o/oauth2/token',
          username: 'YOUR_EMAIL_ADDRESS',
          refreshToken: 'YOUR_REFRESH_TOKEN_WITH_CALDAV_PERMISSION',
          clientId: 'YOUR_CLIENT_ID',
          clientSecret: 'YOUR_CLIENT_SECRET',
        },
        authMethod: 'Oauth',
        defaultAccountType: 'caldav',
      });
    
      const calendars = await client.fetchCalendars();
    
      const calendarObjects = await client.fetchCalendarObjects({
        calendar: calendars[0],
      });
      console.log("calendarObjects", calendarObjects)
    })();
  }, [])

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
