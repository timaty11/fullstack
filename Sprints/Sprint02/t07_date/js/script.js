const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


const getFormattedDate = (date) => {
  const formatted_date = date.toISOString().slice(0, 10);

  const day = formatted_date.slice(8);
  const month = formatted_date.slice(5, 7);
  const year = formatted_date.slice(0, 4);
  const time = date.toTimeString();
  const num_day = date.getDay();
  const name_day = days[num_day];

  return `${day}.${month}.${year} ${time.slice(0, 5)} ${name_day}`;
};

