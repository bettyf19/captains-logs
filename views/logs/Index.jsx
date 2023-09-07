const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <nav>
             <a href='/logs/new'><button>Create a New Log</button></a>
          </nav>
          <h2>Captain's Log Index</h2>
          {
            this.props.logs.map((log) => (
              <article>
                <a href={`/logs/${log._id}`}>
                  <h3>
                    <ul>
                        <li>
                        { log.title }
                        </li>
                    </ul>
                  </h3>
                </a>
              </article>
            ))
          }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;