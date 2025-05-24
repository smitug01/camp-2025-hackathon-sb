import type { Course } from '../types/schedule';
import { MEAL_LUNCH, MEAL_DINNER, COURSE_TYPES } from '../constants/schedule';

/**
 * Generate a unique course ID
 */
export const generateCourseId = (course: Course, timeSlot: string): string => {
  return course.id ? String(course.id) : 
    `course_${course.title_zh?.replace(/\s+/g, "_")}_${timeSlot.replace(":", "_")}`;
};

/**
 * Check if a course is a meal break
 */
export const isMealCourse = (course: Course): boolean => {
  return course.title_zh === MEAL_LUNCH || course.title_zh === MEAL_DINNER;
};

/**
 * Check if a course has additional details
 */
export const hasCourseDetails = (course: Course): boolean => {
  return Boolean(
    course.description_zh || 
    course.slide || 
    course.co_write || 
    course.record || 
    course.speaker1
  );
};

/**
 * Calculate duration in 30-minute slots
 */
export const calculateDurationInSlots = (course: Course): number => {
  if (!course.start || !course.end) {
    console.error(`Invalid course dates for ${course.id}`);
    return 1; // Default to 1 slot if invalid
  }

  const start = new Date(course.start);
  const end = new Date(course.end);

  // Validate dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    console.error(`Invalid date format for course ${course.id}`);
    return 1;
  }

  return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 30));
};

/**
 * Get a formatted time string for a course
 */
export const formatCourseTime = (start: string, end: string): string => {
  if (!start || !end) return "N/A";
  
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  const formatTime = (date: Date) => date.toLocaleTimeString("zh-TW", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Taipei",
  });
  
  return `${formatTime(startDate)} - ${formatTime(endDate)}`;
};

/**
 * Get a course starting at a specific time slot
 */
export const getCourseStartingAt = (courses: Course[], timeSlot: string): Course | undefined => {
  return courses.find(course => {
    if (!course.start) return false;

    const courseDateTime = new Date(course.start);
    const courseTime = new Date(courseDateTime.toLocaleString("en-US", { timeZone: "Asia/Taipei" }));

    const courseTimeString = courseTime.toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Taipei",
    });

    return courseTimeString === timeSlot;
  });
};

/**
 * Update cell coverage for future slots
 */
export const updateCellCoverage = (
  cellCoverage: Record<string, Record<string, boolean>>,
  dayKey: string,
  timeIndex: number,
  rowspan: number,
  timeSlots: string[]
): void => {
  for (let i = 1; i < rowspan; i++) {
    const futureSlotIndex = timeIndex + i;
    if (futureSlotIndex < timeSlots.length) {
      const futureTimeSlot = timeSlots[futureSlotIndex];
      cellCoverage[dayKey][futureTimeSlot] = true;
    }
  }
};

/**
 * Get CSS classes for a course cell
 */
export const getCourseCellClasses = (course: Course): string => {
  let classes = "course-cell";
  const type = course.type?.toLowerCase();

  // Check if the type is a valid key in COURSE_TYPES
  const isValidType = Object.values(COURSE_TYPES).includes(type as typeof COURSE_TYPES[keyof typeof COURSE_TYPES]);

  if (type && isValidType) {
    classes += ` type-${type}`;
  } else {
    classes += ` type-${COURSE_TYPES.DEFAULT}`;
  }
  return classes;
}; 