// Advanced Format plugin, using for ordinals
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Time and Date in the header of the application
function timeIs(format, time) {
  return dayjs(time).format(format)
};

var date = "dddd [the] Do [of] MMMM, YYYY";
var hour = "HH:mm";

$("#currentDay").text(timeIs(date));
$("#currentTime").text(timeIs(hour));