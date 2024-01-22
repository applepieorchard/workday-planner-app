// Advanced Format plugin, using for ordinals
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Query Selectors
const currentDay = $("#currentDay");
const currentHour = $("#currentHour");
const hourEl = [
  $("#nine .hour"), $("#ten .hour"), $("#eleven .hour"),
  $("#twelve .hour"), $("#thirteen .hour"), $("#fourteen .hour"),
  $("#fifteen .hour"), $("#sixteen .hour"), $("#seventeen .hour")
];
const timeBlocks = [
  $("#nine .timeBlock input"), $("#ten .timeBlock input"), $("#eleven .timeBlock input"),
  $("#twelve .timeBlock input"), $("#thirteen .timeBlock input"), $("#fourteen .timeBlock input"),
  $("#fifteen .timeBlock input"), $("#sixteen .timeBlock input"), $("#seventeen .timeBlock input")
];
const saveButtons = [
  $("#nine .saveBtn"), $("#ten .saveBtn"), $("#eleven .saveBtn"),
  $("#twelve .saveBtn"), $("#thirteen .saveBtn"), $("#fourteen .saveBtn"),
  $("#fifteen .saveBtn"), $("#sixteen .saveBtn"), $("#seventeen .saveBtn")
];
const timeBlockBg = [
  $("#nine .timeBlock"), $("#ten .timeBlock"), $("#eleven .timeBlock"),
  $("#twelve .timeBlock"), $("#thirteen .timeBlock"), $("#fourteen .timeBlock"),
  $("#fifteen .timeBlock"), $("#sixteen .timeBlock"), $("#seventeen .timeBlock")
];

// Variables
var date = "dddd [the] Do [of] MMMM, YYYY";
var hour = "HH:mm";
const workHours = [
  9, 10, 11,
  12, 13, 14,
  15, 16, 17
];
const diaries = [
  "diaryNine", "diaryTen", "diaryEleven",
  "diaryTwelve", "diaryThirteen", "diaryFourteen",
  "diaryFifteen", "diarySixteen", "diarySeventeen"
];
const currently = dayjs().startOf("h").format("HH:mm");

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
};

// Local Storage
for (let i = 0; i < diaries.length; i++) {
  var diaryEntry = localStorage.getItem(diaries[i]);
  timeBlocks[i].val(diaryEntry);
  saveButtons[i].click(function() {
    var input = timeBlocks[i].val();
    return localStorage.setItem(diaries[i], input)
  })
}

// Timeblock Colouring
for (let i = 0; i < timeBlockBg.length; i++) {
  if (currently === hourEl[i].text()) {
    timeBlockBg[i].addClass("present").removeClass("past future")
  } else if (currently > hourEl[i].text()) {
    timeBlockBg[i].addClass("past").removeClass("present future")
  } else if (currently < hourEl[i].text()) {
    timeBlockBg[i].addClass("future").removeClass("past present")
  }
}