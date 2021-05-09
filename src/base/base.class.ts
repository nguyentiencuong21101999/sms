import LoggerService from '../../services/logger/logger.service'
class BaseClass{
    logger:any
    model:any

    constructor() {
        this.logger = LoggerService
        this.model = {
            // request: RequestModel,
            // requestSystem: RequestSystemModel,
            // response: ResponseModel,
          }
      }
    

}

export default  BaseClass;