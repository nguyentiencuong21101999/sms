/**
 * Created By Nguyen Cong Thanh on 10/09/2019 14:11.
 *
 * Copyright IntelIn 2019.
 */

'use strict'

import path from 'path'
import fs from 'fs'
import log4js from 'log4js'

log4js.configure({
  appenders: {
    access: { type: 'dateFile', filename: 'log/access.log', maxLogSize: 51916800, backups: 3, compress: true }
  },
  categories: { default: { appenders: ["access"], level: "all" } }
});

const logger = log4js.getLogger("access");

const getTime = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
}

class LoggerService {

  constructor() {
   
  }

  info(content:string) {
    const log = `[${getTime()}] [INFO] ${content}`
    logger.info(content)
    console.info('\x1b[36m%s\x1b[0m', log)
  }

  debug(message:string, content:string) {
    const log = `[${getTime()}] [DEBUG] ${message} ${JSON.stringify(content)}`
    logger.debug(message, content)
    console.debug(log)
  }

  trace(content:string) {
    logger.trace(content)
    console.trace(`[${getTime()}] [TRACE] ${JSON.stringify(content)}`)
  }

  warn(content:string) {
    const log = `[${getTime()}] [WARN] ${JSON.stringify(content)}`
    logger.warn(content)
    console.warn('\x1b[33m%s\x1b[0m', log)
  }

  log(content:string) {
   // logger.log(content)
    console.log(`[${getTime()}]-[LOG]: \n`, content)
  }

  error(content:string) {
    const log = `[${getTime()}] [ERROR] ${JSON.stringify(content)}`
    logger.error(content)
    console.error('\x1b[31m%s\x1b[0m', log)
  }

}

export default new LoggerService();
