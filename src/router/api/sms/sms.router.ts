import { Router } from 'express';
import SMSController from './sms.controler';
class SMSRouter {
    route() {
      const route = Router();
      route.post('/createUserSMS',SMSController.createUserSMS);
      route.post('/createUser',SMSController.createUser);
      return route;
    }
  }
  
  export default new SMSRouter();
