// Advanced Format plugin, using for ordinals
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Global Variables
var date = "dddd [the] Do [of] MMMM, YYYY";
var hour = "HH:mm";
const currentDay = $("#currentDay");
const currentHour = $("#currentHour");
const hourEl = [
  $("#nine"), $("#ten"), $("#eleven"),
  $("#twelve"), $("#thirteen"), $("#fourteen"),
  $("#fifteen"), $("#sixteen"), $("#seventeen")
];
const workHours = [
  9, 10, 11,
  12, 13, 14,
  15, 16, 17
];

// Time and Date in the header of the application
function timeIs(format, time) {
  return dayjs(time).format(format)
};
currentDay.text(timeIs(date));
currentHour.text(timeIs(hour));

// Workday Hours
for (let i = 0; i < hourEl.length; i++) {
  let hourIS = dayjs().hour(workHours[i]).minute(0).format(hour)
  hourEl[i].text(hourIS)
}