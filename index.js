//Creating a function that merges usernames into one

//
require('datejs');

//function to combine users
function combineUsers(...args) {

  //Initialize the Return Object
  const combinedObject = { 
    users: []
  };

  //Loop through the arguments
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  //Adding date
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};