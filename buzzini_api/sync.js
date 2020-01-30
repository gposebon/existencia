const connection = require('./connection');

function sync(){
    connection.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

};

module.exports = sync;