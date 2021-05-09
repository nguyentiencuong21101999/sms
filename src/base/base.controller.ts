import baseClass from "./base.class";

class BaseController extends baseClass{
    constructor(){
        super();
        this.responseSuccess = this.responseSuccess.bind(this)
        this.responseException = this.responseException.bind(this)

    }
    responseSuccess(response:any, code:any, data = {}, message:string) {
        // this.logger.info(`BaseController execute responseSuccess with`)
        // this.logger.debug(`BaseController execute responseSuccess receive code`, code)
        // this.logger.debug(`BaseController execute responseSuccess receive data`, data)
        // this.logger.debug(`BaseController execute responseSuccess receive message`, message)
        try {
          const responseData = new this.model.response()
          responseData.setCode(code)
          responseData.setData(data)
          responseData.setMessage(message)
          this.logger.info(`BaseController execute responseSuccess with response data`, responseData.getSuccess())
          response
            .status(responseData.getSuccess().getHttpCode())
            .json(responseData.getSuccess());
        } catch (e) {
          this.logger.error(`BaseController responseSuccess with ${e.toString()}`)
          throw e
        }
      }
    
      responseException(response:any) {
        // this.logger.info(`BaseController execute responseException with`)
        try {
          const responseData = new this.model.response()
          response
            .status(responseData.getSystemException().getHttpCode())
            .send(responseData.getSystemException());
        } catch (e) {
          this.logger.error(`BaseController responseException with ${e.toString()}`)
          throw e
        }
      }
}

export default BaseController;