const User = require("../models/userModel")

// get random code in javaScript 
const makeRandom = (length = 6 ) => {

  // const rand = () =>  JSON.stringify(Math.floor(Math.random() * 10)) 
  const rand = () => Math.floor(Math.random() * 10)
  let code = []
  for (let i = 0; i < length; i++) {
    code.push(rand())
  }

  let randomString = code.toString().replace(/,/g, '')

  return randomString;
}

// get any mobile last 10 local digite 
const getLocalNo10Length = (array) => {
  let arrayrevers = array.split('').reverse();
  let code = []
  for (let i = 0; i < 10; i++) {
    code.push(arrayrevers[i])
  }
  let no10Length = code.reverse().toString().replace(/,/g, '')
  return no10Length;
}
// const updatedata = async (id) => {
//   try {
//       const data = await User.findByIdAndUpdate(id, {
//           email : 'ananda.saha121@yahoo.com'
//       })
//       console.log(data);
//   } catch (error) {
//       console.log(error);
//   }
// }
// updatedata("ObjectId('638f0d76ef7e39aa863639fd')")


module.exports = {
  makeRandom,
  getLocalNo10Length
}

