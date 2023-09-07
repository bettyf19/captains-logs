const React = require('react');
const DefaultLayout = require('../Default');

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <form action="/logs" method="POST">
          <fieldset>
            <legend>Create a New Log</legend>
            <label>
              TITLE:<input type="text" name="title" placeholder="Enter log title" />
            </label>
            <label>
              ENTRY:<input type="text" name="entry" placeholder="Enter log entry" />
            </label>
            <label> 
              IS SHIP BROKEN: <input type="checkbox" name="shipIsBroken" /> 
            </label>
          </fieldset>
          <input type="submit" value="CREATE NEW LOG" />
          <br></br>
          <a href="/logs/"><button>Back to Main</button></a>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;
