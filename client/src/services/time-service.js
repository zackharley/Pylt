
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default class TimeService {

  static getTimeSince(timestamp) {
    if (typeof timestamp !== 'number') return '';
    const then = new Date(timestamp * 1000);
    const time = new Date(new Date() - then);
    if (time.getHours() < 24 && then.getMonth() === new Date().getMonth() && then.getFullYear() === new Date().getFullYear()) {
      if (time.getHours() > 0) {
        return `${time.getHours()}h ago`;
      } else if (time.getMinutes() > 0) {
        return `${time.getMinutes()}m ago`;
      } else {
        return `${time.getSeconds()}s ago`;
      }
    } else {
      return `${days[then.getDay()]} ${months[then.getMonth()]} ${then.getDate()}, ${then.getFullYear()}`;
    }
  }
}
