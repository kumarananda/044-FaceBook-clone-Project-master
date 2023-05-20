

export function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
//   var aDay = 24*60*60*1000;
//   console.log(timeSince(new Date(Date.now()-aDay)));
//   console.log(timeSince(new Date(Date.now()-aDay*2)));


export const makeBirthYearArray = (birthY ) => {
  const array = []
  let currentY = new Date().getFullYear()

  for (let index = 0; index < (currentY- Number(birthY)); index++) {
    array.push( Number(birthY)+index);
  }

  return array.reverse()
}



export const montsFull = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
export const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
export const dayFull = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
export const dayShort = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];


export const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
}
export const daysInCurrentMonth = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
  return getDaysInMonth(currentYear, currentMonth)

}

export const currentMonthsDaysArray = () => {
  let daysArray = []
  let days = daysInCurrentMonth()
  for (let index = 1; index <= days; index++) {
    daysArray.push(index)
  }
  return daysArray
} 

/**
 * 
 * @param {*} year  
 * @param {*} month exmple = "January","February"..., or 1 = "January",2 = "February"...,
 * @param {*} &  if month typeOf string it will be capital each exmple = "January","February"
 * @returns 
 */
export const monthsDaysArray = (year, month) => {
  let daysArray = []
  if(typeof month === "string"){

    const capital = month.charAt(0).toUpperCase() + month.slice(1);

    let months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    let getMonth = months.indexOf(capital) +1;
    let days = getDaysInMonth(year, getMonth)
    for (let index = 1; index <= days; index++) {
      daysArray.push(index)
    }
    return daysArray
  }else{
    let days = getDaysInMonth(year, month)
    for (let index = 1; index <= days; index++) {
      daysArray.push(index)
    }
  }
  return daysArray
}



// // 👇️ Other Months
// const daysInJanuary = getDaysInMonth(2025, 1);
// console.log(daysInJanuary); // 👉️ 31

// const daysInSeptember = getDaysInMonth(2025, 9);
// console.log(daysInSeptember); // 👉️ 30