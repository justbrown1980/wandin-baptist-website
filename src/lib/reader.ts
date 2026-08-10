import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export function getReader() {
  return createReader(process.cwd(), keystaticConfig);
}
