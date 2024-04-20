export const calculateViews = (num) => {
  let count = num.toString().length;
  if (count <= 3) return num.toString();
  else if (count > 3 && count < 7) {
    let num1 = num / 1000;
    return num1.toFixed(1).toString() + "K";
  } else {
    let num1 = num / 1000000;
    return num1.toFixed(1).toString() + "M";
  }
};

export const calculateDateTime = (vidDateTime) => {
  let date = new Date();
  let currDate = date.toLocaleString();
  let vidYear = vidDateTime.slice(0, 4);
  let currYear = currDate.slice(6, 10);
  if (vidYear === currYear) {
    let vidMonth = vidDateTime.slice(5, 7);
    let currMonth = currDate.slice(3, 5);
    if (vidMonth === currMonth) {
      let vidDay = vidDateTime.slice(8, 10);
      let currDay = currDate.slice(0, 2);

      if (vidDay === currDay) {
        let vidHour = vidDateTime.slice(11, 13);
        let currHour = currDate.slice(12, 14);
        if (vidHour === currHour) {
          let vidMin = vidDateTime.slice(14, 16);
          let currMin = currDate.slice(15, 17);
          if (vidMin === currMin) {
            return "0 min ago";
          } else {
            if (currMin - vidMin === 1) return "1 min ago";
            return (currMin - vidMin).toString() + " mins ago";
          }
        } else {
          if (currHour - vidHour === 1) return "1 hour ago";
          return (currHour - vidHour).toString() + " hours ago";
        }
      } else {
        if (currDay - vidDay === 1) return "1 day ago";
        return (currDay - vidDay).toString() + " days ago";
      }
    } else {
      if (currMonth - vidMonth === 1) return "1 month ago";
      return (currMonth - vidMonth).toString() + " months ago";
    }
  } else {
    if (currYear - vidYear === 1) return "1 year ago";
    return (currYear - vidYear).toString() + " years ago";
  }
};
