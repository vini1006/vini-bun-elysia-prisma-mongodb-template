import { logger } from '@rasla/logify';

export const getLogger = () =>
  logger({
    console: true,
    file: true,
    filePath: 'logs/app.log',
    skip: ['/health', '/metrics'],
    format:
      '🚀 {timestamp} | {level} | {method}:"{path}" | Status: {statusCode} | Time: {duration} ms',
    includeIp: true,
  });
