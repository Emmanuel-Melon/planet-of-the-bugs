const notifications = [
  {
    id: 1,
    name: "Gyomei Himejima",
    avatar:
      "https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg",
    text: "We are proud to live and die as human beings.",
    active: false,
  },
  {
    id: 2,
    name: "Muzan Kibutsuji",
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    text: "Prepare to witness the true terror of the Demong King!",
    active: true,
  },
  {
    id: 3,
    name: "Ryuk",
    avatar:
      "https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg",
    text: "Hahahahaha",
    active: false,
  },
];

export const fetchNotifications = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    setInterval(() => resolve(notifications), 1000);
  });
};
