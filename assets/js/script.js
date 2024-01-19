// Advanced Format plugin, using for ordinals
dayjs.extend(window.dayjs_plugin_advancedFormat)

// Time and Date in the header of the application
const currentDay = dayjs().format("dddd [the] Do [of] MMMM, YYYY");
const currentTime = dayjs().format("HH:mm")
$("#currentDay").text(currentDay);
$("#currentTime").text(currentTime);