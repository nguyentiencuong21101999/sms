// /**
//  * Created By Nguyen Cong Thanh on 31/10/2019 17:09.
//  *
//  * Copyright IntelIn 2019.
//  */

//  'use strict'

//  import HttpCode from 'services/codeResponse/http'
//  import ResponseCode from '../../codeResponse/code.js'
 
//  class ResponseModel {
//     code :any | null
//     data:any | {}
//     messages:string | undefined
//    constructor() {
//      this.code = null
//      this.data = {}
//      this.messages = ''
//    }
 
//    getSuccess() {
//      return {
//        code: `${this.code ? this.code : HttpCode.OK}`,
//        data: this.getData(),
//        messages: `${ResponseCode[this.code] ? ResponseCode[this.code] : 'Success'}`,
//        getHttpCode: () => {
//          return HttpCode.OK
//        },
//      }
//    }
 
//    getSystemException() {
//      return {
//        code: ResponseCode.SYSTEM_ERROR,
//        data: {},
//        messages: ResponseCode[ResponseCode.SYSTEM_ERROR],
//        getHttpCode: () => {
//          return HttpCode.OK
//        },
//      }
//    }
 
//    getBadRequest() {
//      return {
//        getHttpCode: () => {
//          return HttpCode.BAD_REQUEST
//        },
//      }
//    }
 
//    setCode(code:any) {
//      this.code = code
//      this.messages = ResponseCode[code]
//    }
 
//    getCode() {
//      return this.code
//    }
 
//    setData(data:any) {
//      this.data = data
//    }
 
//    getData() {
//      return this.data
//    }
 
//    setMessage(messages:string) {
//      this.messages = messages
//    }
 
//    getMessage() {
//      return this.messages
//    }
 
//  }
 
//  export default ResponseModel
 