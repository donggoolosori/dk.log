const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatDate(date: string) {
  const d = new Date(date);

  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
