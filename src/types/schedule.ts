export interface Course {
  id: string | number;
  title_zh: string;
  description_zh?: string;
  start: string;
  end: string;
  room: string;
  type?: string;
  slide?: string;
  co_write?: string;
  record?: string;
  speaker1?: string;
  speaker2?: string;
  speaker3?: string;
  speaker4?: string;
  speaker5?: string;
}

export interface DayHeader {
  dayNum: string;
  dateText: string;
}

export interface DayMap {
  [key: string]: string;
}

export interface CellCoverage {
  [key: string]: {
    [timeSlot: string]: boolean;
  };
}

export interface CoursesByDay {
  [key: string]: Course[];
} 