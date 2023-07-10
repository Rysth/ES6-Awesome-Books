import './modules/actions.js';
import { DateTime } from './modules/luxon.min.js';
import { todayDate } from './modules/elements.js';

window.onload = () => {
  const now = DateTime.now();
  todayDate.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

setInterval(() => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  todayDate.innerHTML = date;
}, 1000);
