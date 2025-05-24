import type { Course } from '../types/schedule';
import { MEAL_LUNCH, MEAL_DINNER, COURSE_TYPES } from '../constants/schedule';

const createDateInterpretedAsTaipei = (dateTimeString: string): Date => {
  if (dateTimeString.endsWith('Z') || dateTimeString.includes('+') || dateTimeString.lastIndexOf('-') > 7) { 
    return new Date(dateTimeString);
  }
  return new Date(dateTimeString + "+08:00");
};

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

  const start = createDateInterpretedAsTaipei(course.start);
  const end = createDateInterpretedAsTaipei(course.end);

  // Validate dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    console.error(`Invalid date object for course ${course.id} after attempting Taipei interpretation`);
    return 1;
  }

  return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 30));
};

/**
 * Get a formatted time string for a course
 */
export const formatCourseTime = (startStr: string, endStr: string): string => {
  if (!startStr || !endStr) return "N/A";
  
  const startDate = createDateInterpretedAsTaipei(startStr);
  const endDate = createDateInterpretedAsTaipei(endStr);
  
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

    const courseDate = createDateInterpretedAsTaipei(course.start);
    
    const courseTimeStringInTaipei = courseDate.toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Taipei",
    });

    return courseTimeStringInTaipei === timeSlot;
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
  timeSlots: readonly string[]
): void => {
  for (let i = 1; i < rowspan; i++) {
    const futureSlotIndex = timeIndex + i;
    if (futureSlotIndex < timeSlots.length) {
      const futureTimeSlot = timeSlots[futureSlotIndex];
      if (futureTimeSlot) {
        cellCoverage[dayKey][futureTimeSlot] = true;
      }
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