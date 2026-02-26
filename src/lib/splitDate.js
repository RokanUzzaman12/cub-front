export function getDay(date) {
  return date.match(/^([A-Za-z]+) (\d{1,2})/)[2];
}
export function getMonth(date) {
  return date.match(/^([A-Za-z]+) (\d{1,2})/)[1];
}
