const date = new Date();

export let TODAYDATA = {
    DAY: date.getDate(),
    YEAR: date.getFullYear(),
    MONTH: date.getMonth() + 1
  };