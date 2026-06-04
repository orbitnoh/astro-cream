export function formatDateLabel(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(date)
    .replace(/\.$/, '');
}

export function formatDateTimeAttribute(date: Date): string {
  return date.toISOString().slice(0, 10);
}
