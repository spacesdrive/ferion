export interface Person {
  name: string;
  wordmark: string;
  resumeUrl: string;
  sites: { tech: string; motion: string; blog: string };
}

const person: Person = {
  name: 'Ujjwal Kumar Rai',
  wordmark: 'ujjwal',
  // the resume viewer is its own Pages project, so it opens in a PDF viewer with a download button
  resumeUrl: 'https://resume.tech.ujjwal.fyi',
  sites: {
    tech: 'https://tech.ujjwal.fyi',
    motion: 'https://motion.ujjwal.fyi',
    blog: 'https://blog.ujjwal.fyi',
  },
};

export default person;
