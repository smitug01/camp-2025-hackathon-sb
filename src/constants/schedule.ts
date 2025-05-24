export const MEAL_LUNCH = "午餐";
export const MEAL_DINNER = "晚餐";

export const COURSE_TYPES = {
  MAIN: 'main',
  BROAD: 'broad',
  HACKATHON: 'hackathon',
  GAME: 'game',
  COMMUNITY: 'community',
  OTHER: 'other',
  DEFAULT: 'default',
} as const;

export const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00",
] as const;

export const DAY_DEFINITIONS = [
  { id: "Day1", displayNum: "1", dateText: "7/9 三" },
  { id: "Day2", displayNum: "2", dateText: "7/10 四" },
  { id: "Day3", displayNum: "3", dateText: "7/11 五" },
  { id: "Day4", displayNum: "4", dateText: "7/12 六" },
  { id: "Day5", displayNum: "5", dateText: "7/13 日" },
] as const; 