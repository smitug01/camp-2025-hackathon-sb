export interface Course {
  id: string | number;
  room: string;
  type: string;
  start: string;
  end: string;
  duration: string;
  slide?: string;
  qa?: string;
  co_write?: string;
  live?: string;
  broadcast?: string;
  record?: string;
  language?: string;
  uri?: string;
  zh: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
  speakers: string[];
  tags: string[];
  expo?: string[]; // For community events
}

export interface Speaker {
  id: string;
  avatar: string;
  zh: {
    name: string;
    bio: string;
  };
  en: {
    name: string;
    bio: string;
  };
}

export interface SessionType {
  id: string;
  note?: string;
  zh: {
    name: string;
    description: string;
  };
  en: {
    name: string;
    description: string;
  };
}

export interface Room {
  id: string;
  zh: {
    name: string;
    description: string;
  };
  en: {
    name: string;
    description: string;
  };
}

export interface ScheduleData {
  sessions: Course[];
  speakers: Speaker[];
  session_types: SessionType[];
  rooms: Room[];
  tags: any[];
}
