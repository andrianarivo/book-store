export const bookAuthors = [
  'Jane Austen',
  'J.K. Rowling',
  'Ernest Hemingway',
  'William Shakespeare',
  'Harper Lee',
  'George Orwell',
  'Mark Twain',
  'F. Scott Fitzgerald',
  'Charles Dickens',
  'Stephen King',
  'Suzanne Collins',
  'Frank Herbert',
];

export const bookChapters = [
  'Chapter 1: The Beginning',
  'Chapter 2: Into the Unknown',
  'Chapter 3: Unveiling Secrets',
  'Chapter 4: A Twist of Fate',
  'Chapter 5: The Journey Continues',
  'Chapter 6: Trials and Tribulations',
  'Chapter 7: Confronting the Enemy',
  'Chapter 8: The Final Showdown',
  'Chapter 9: Epilogue',
];

export const getDummyChapter = () => bookChapters[Math.floor(Math.random() * bookChapters.length)];
export const getDummyAuthor = () => bookAuthors[Math.floor(Math.random() * bookChapters.length)];
export const getDummyProgress = () => Math.floor(Math.random() * 101);
