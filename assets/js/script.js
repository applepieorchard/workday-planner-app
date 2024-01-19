// Advanced Format plugin, using for ordinals
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Global Variables
var date = "dddd [the] Do [of] MMMM, YYYY";
var hour = "HH:mm";
const currentDay = $("#currentDay");
const currentHour = $("#currentHour")

// Time and Date in the header of the application
function timeIs(format, time) {
  return dayjs(time).format(format)
};
function textIs(element, content) {
  return element.text(content)  
}
textIs(currentDay, timeIs(date));
textIs(currentHour, timeIs(hour));