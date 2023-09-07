const mongoose = require('./connection');
const Log = require('./Log');

const db = mongoose.connection;

db.on('open', () => {
 // array of starter logs
 const starterLogs = [
  { title: "The Second Mudd Encounter", 
    entry: "Captain's log. Stardate 4513.3. After having been taken over by an android, the Enterprise has been under way at warp seven for four days. Now we are entering orbit around a planet which has never been charted.", 
    isShipBroken: true },
  { title: "The Neural Conflict", 
    entry: "Captain's log, Stardate 4211.4. Keeping our presence here secret… is an enormous tactical advantage. Therefore, I cannot risk contact with Starfleet Command. I must take action on my own judgment. I've elected to violate orders… and make contact with planet inhabitants here.", 
    isShipBroken: false },
  { title: "The Farragut Incident", 
    entry: "Captain's log, Stardate 3619.2. With the mysterious death of two crewmen, all personnel on the planet have been evacuated back to the ship.", 
    isShipBroken: false },
  { title: "First Contact with the Melkotians", 
    entry: "Captain's Log, Stardate 4385.3. We have transported down to the Melkotian planet and have encountered conditions which are completely contrary to what we were prepared for.", 
    isShipBroken: true }
];

// Delete all snacks
Log.deleteMany({})
  .then(data => {
    Log.create(starterLogs)
      .then(data => {
        db.close();
      })
      .catch(error => {
        db.close();
      });
  })
  .catch(error => {
    db.close();
  });
})