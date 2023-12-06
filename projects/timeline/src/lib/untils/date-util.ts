
/**
 * A utility class for working with dates.
 */
export class DateUtil {

  /**
   * Formats the given date according to the specified format.
   * @param date The date to format.
   * @param format The format string, using the following placeholders:
   *   - YYYY: four-digit year
   *   - MM: two-digit month (zero-padded)
   *   - DD: two-digit day of month (zero-padded)
   *   - HH: two-digit hour (zero-padded, 24-hour format)
   *   - mm: two-digit minute (zero-padded)
   *   - ss: two-digit second (zero-padded)
   * @returns The formatted date string.
   */
  static formatDate(date: Date, format: string): string {
    // Extract the year, month, day, hours, minutes, and seconds from the date
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Replace the placeholders in the format string with the corresponding date parts
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }
}
