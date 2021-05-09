import { Request, Response, NextFunction } from "express";
import BaseController from '../../../base/base.controller';

import UserSMSRepo from '../../../intergration/backend/repository/repo.userSMS';
import UserSMSModel from '../../../intergration/backend/repository/model/repo.model.userSMS'
import UserRepo from '../../../intergration/backend/repository/repo.user';
import UserModel from '../../../intergration/backend/repository/model/repo.model.user'


class SMSController extends BaseController{
    
  async createUserSMS(request: any, response: Response, next: NextFunction) {
        try {
          const userSMSModel = new UserSMSModel()
          .setUserId('5')
          .setCustomerCode("avc")
          .setAccountId("5")
          .setInfo('10')
          .setStatus(1)
          .setCreatedAt(new Date())
          .setModifiedAt(new Date())

          await UserSMSRepo.create(userSMSModel);
         
        } catch (error: any) {
          
        }
      }

      async createUser(request: any, response: Response, next: NextFunction) {
        try {
          const userModel = new UserModel()
          .setUserId('5')
          .setUsername('tiencuong')
          .setFullName('nguyen tien cuong')
          .setPhoneNumber("0373631432")
          

          await UserRepo.create(userModel);
         
        } catch (error: any) {
          
        }
      }
}
export default new SMSController();