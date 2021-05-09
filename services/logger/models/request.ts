'use strict'

class RequestModel {

  payload:any;
  headers:any  
  constructor() {
    this.headers = {
      ['content-type']: '',
      token: '',
    }
  }

  getHeaders() { return this.headers }
  setHeaders(headers:any) { this.headers = headers }
  getToken() { return this.headers.token }

  getPayload() { return this.payload }
  setPayload(payload:any) { this.payload = payload; return this }

  getUserId() { return this.getPayload().userId }
  getUsername() { return this.getPayload().username }
  getFullName() { return this.getPayload().fullName }
  getPhoneNumber() { return this.getPayload().phoneNumber }
  getEmail() { return this.getPayload().email }

}

export default RequestModel
