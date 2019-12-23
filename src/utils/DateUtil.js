import { format } from 'date-fns';
// import en from 'date-fns/locale/pt-BR';
import en from 'date-fns/locale/en-US';

/**
 * Format dates using `format` from `date-fns` to the format `dd/MM/yyyy`
 *
 * @param {number | Date} date
 */
export function formatDate(date) {
  return format(date, 'dd MMM yyyy', { locale: en });
}
