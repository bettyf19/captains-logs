const React = require('react');
const DefaultLayout = require('../Default');

class Show extends React.Component {
  render() {
    const log = this.props.log
    return (
      <DefaultLayout>
        <div>
          <article>
           <h3>
             <b>{ log.title }: </b> 
               <br></br>
             { `${log.entry}` }
               <br></br>
             { log.isShipBroken ? `Ship is broken!` : `Ship is NOT broken!` }
            </h3>
            <a href={`/logs/${log._id}/Edit`}><button>Edit</button></a>
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete" />
            </form>
            <a href="/logs/"><button>Back to Main</button></a>
          </article>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;


{/* 
    //     <div>
    //       <article>
    //         <h2>
    //           { snack.name } costs {`$${snack.cost}`} and is { snack.calories } Calories!
    //         </h2>
    //         <a href={`/snacks/${snack._id}/Edit`}><button>Edit</button></a>
    //         <form action={`/snacks/${snack._id}?_method=DELETE`} method="POST">
    //           <input type="submit" value="Delete" />
    //         </form>
    //         <a href="/snacks/"><button>Back to Main</button></a>
    //       </article>
    //     </div>
    // <h2>{ log.title }: { `$${log.entry}` }
    // <br></br>
    // { log.isShipBroken ? 'Ship is broken!' : 'Ship is NOT broken!' } */}