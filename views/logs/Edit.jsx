const React = require('react');
const DefaultLayout = require('../Default');

class Edit extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <fieldset>
            <legend>Edit {log.title}</legend>
            <label>
              TITLE:<input
                type="text"
                name="title"
                placeholder="Enter log title"
                value={log.title}
              />
            </label>
            <label>
              ENTRY:<input
                type="text"
                name="entry"
                placeholder="Enter log entry"
                value={log.entry}
              />
            </label>
            <label> 
              IS SHIP BROKEN: <input 
              type="checkbox" 
              name="shipIsBroken"
              value={log.isShipBroken} /> 
            </label>
          </fieldset>
          <input type="submit" value="EDIT LOG" />
          <br></br>
          <a href="/logs/"><button>Back to Main</button></a>
        </form>
      </DefaultLayout>
    )
  }
};

module.exports = Edit;