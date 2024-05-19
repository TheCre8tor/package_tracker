import { type LogLevel } from 'bunyan';

export const bunyanParser = (value: string | undefined): LogLevel => {
  const levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];

  if (!value || !levels.includes(value)) {
    return 'trace';
  }

  const level = levels.indexOf(value);
  return levels[level] as LogLevel;
};
