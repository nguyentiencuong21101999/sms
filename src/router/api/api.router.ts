import {Router} from 'express';
import SMSRouter from './sms/sms.router';
class APIRouter{
    router(){
        const router = Router();
        router.use('/sms',SMSRouter.route())
        
        return router;
    }
    
}
export default new APIRouter();