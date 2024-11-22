import * as winston from "winston";
import * as path from "node:path";
import * as url from "node:url";
import * as dayjs from "dayjs";
import "winston-daily-rotate-file";

const __dirname = url.fileURLToPath(new URL("../", import.meta.url));

const winstonFormat = winston.format.combine(
  winston.format.timestamp({
    format: () => dayjs().format("YYYY-MM-DD HH:mm:ss"),
  }),
  winston.format.printf(
    (info) => `[${info.timestamp}][${info.level}] ${info.message}`,
  ),
);

const logger = winston.createLogger({
  level: "info",
  format: winstonFormat,
  transports: [
    new winston.transports.DailyRotateFile({
      filename: path.join(__dirname, "logs") + "/info.%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
    new winston.transports.DailyRotateFile({
      filename: path.join(__dirname, "logs") + "/debug.%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      level: "debug",
    }),
    new winston.transports.File({
      filename: path.join(__dirname, "logs") + "/error.log",
      level: "error",
    }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winstonFormat,
    ),
  }),
);

export const log = logger;
