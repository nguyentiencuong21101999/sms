// /**
//  * Created By Nguyen Cong Thanh on 19/09/2019 14:19.
//  *
//  * Copyright IntelIn 2019.
//  */
// const   RESPONSE_CODE={};
//     //3rd party integration
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_0"] = "0"] = "Momo create payment success"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_9043"] = "9043"] = "Momo user not connected to bank"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_99"] = "99"] = "Momo system error"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_49"] = "49"] = "Momo user cancel transaction"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_7"] = "7"] = "Momo transaction pending"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_29"] = "29"] = "Momo system maintainer"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_32"] = "32"] = "Momo transaction done"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_36"] = "36"] = "Momo transaction timeout"
//     RESPONSE_CODE[RESPONSE_CODE["MOMO_37"] = "37"] = "Momo transaction limit"
//     RESPONSE_CODE[RESPONSE_CODE["ZALO_1"] = 1] = "Zalo create payment success"
    
//     // system
//     RESPONSE_CODE[RESPONSE_CODE["SYSTEM_ERROR"] = "5000"] = "Unknown error from server"
//     RESPONSE_CODE[RESPONSE_CODE["SYSTEM_SUCCESS"] = "2000"] = "Action success"
//     RESPONSE_CODE[RESPONSE_CODE["SUBSCRIPTION_SUCCESS"] = "2100"] = "Subscription is ok"
//     RESPONSE_CODE[RESPONSE_CODE["SUBSCRIPTION_EXPIRED"] = "2101"] = "Subscription is expired"
//     RESPONSE_CODE[RESPONSE_CODE["SUBSCRIPTION_NOT_FOUND"] = "2102"] = "Subscription not found"
//     RESPONSE_CODE[RESPONSE_CODE["PAYMENT_EXPIRED"] = "PAYMENT_4000"] = "Payment expired"
    
//     // auth
//     RESPONSE_CODE[RESPONSE_CODE["AUTH_TOKEN_INVALID"] = "AUTH_4000"] = "Token invalid"
//     RESPONSE_CODE[RESPONSE_CODE["AUTH_TOKEN_EXPIRED"] = "AUTH_4001"] = "Token expired"
    
//     // otp
//     RESPONSE_CODE[RESPONSE_CODE["OTP_CREATE_SUCCESS"] = "OTP_2000"] = "create otp successful"
//     RESPONSE_CODE[RESPONSE_CODE["OTP_SUBMIT_SUCCESS"] = "OTP_2001"] = "submit otp successful"
//     RESPONSE_CODE[RESPONSE_CODE["OTP_RESEND_SUCCESS"] = "OTP_2002"] = "resend otp successful"
//     RESPONSE_CODE[RESPONSE_CODE["OTP_CANCEL_SUCCESS"] = "OTP_2003"] = "cancel otp successful"
//     RESPONSE_CODE[RESPONSE_CODE["OTP_KEY_EXPIRED"] = "OTP_4000"] = "otp key expired"
//     RESPONSE_CODE[RESPONSE_CODE["OTP_CODE_WRONG"] = "OTP_4001"] = "otp code wrong"
//     RESPONSE_CODE[RESPONSE_CODE["OTP_CODE_WRONG_MANY_TIMES"] = "OTP_4002"] = "otp code wrong many times"
//     RESPONSE_CODE[RESPONSE_CODE["OTP_CREATED_MAX_IN_DAY"] = "OTP_4003"] = "User create otp maximum"
    
//     // user
//     RESPONSE_CODE[RESPONSE_CODE["USER_REGISTER_SUCCESS"] = "USER_REGISTER_2000"] = "User register successful"
//     RESPONSE_CODE[RESPONSE_CODE["USER_REGISTER_EXISTED_USERNAME"] = "USER_REGISTER_4000"] = "User register existed username"
//     RESPONSE_CODE[RESPONSE_CODE["USER_REGISTER_EXISTED_PHONE_NUMBER"] = "USER_REGISTER_4001"] = "User register existed phoneNumber"
//     RESPONSE_CODE[RESPONSE_CODE["USER_REGISTER_EXISTED_EMAIL"] = "USER_REGISTER_4002"] = "User register existed email"
//     RESPONSE_CODE[RESPONSE_CODE["USER_LOGIN_SUCCESS"] = "USER_LOGIN_2000"] = "User login successful"
//     RESPONSE_CODE[RESPONSE_CODE["USER_LOGIN_HAD_PASSWORD_SUCCESS"] = "USER_LOGIN_2001"] = "User had password"
//     RESPONSE_CODE[RESPONSE_CODE["USER_LOGIN_NOT_EXISTED"] = "USER_LOGIN_4000"] = "User login not existed"
//     RESPONSE_CODE[RESPONSE_CODE["USER_LOGIN_WRONG_PASSWORD"] = "USER_LOGIN_4001"] = "User login wrong password"
//     RESPONSE_CODE[RESPONSE_CODE["USER_LOGIN_BANNED_BY_WRONG_PASSWORD"] = "USER_LOGIN_4003"] = "banned by wrong password"
//     RESPONSE_CODE[RESPONSE_CODE["USER_LOGIN_WRONG_PASSWORD_MANY_TIMES"] = "USER_LOGIN_4004"] = "wrong password many times"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_SUCCESS"] = "USER_PROFILE_2000"] = "User get profile successful"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_UPDATED_SUCCESS"] = "USER_PROFILE_2001"] = "User update profile successful"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_CHANGE_EMAIL_CREATE_REF_KEY_SUCCESS"] = "USER_PROFILE_2002"] = "User update email create refKey successful"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_CHANGE_EMAIL_SUCCESS"] = "USER_PROFILE_2003"] = "User update email successful"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_CHANGE_EMAIL_CURRENT_CHANGED"] = "USER_PROFILE_4000"] = "Email current changed"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_CHANGE_EMAIL_PASSWORD_INCORRECT"] = "USER_PROFILE_4001"] = "Password incorrect"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_CHANGE_EMAIL_REF_KEY_EXPIRED"] = "USER_PROFILE_4002"] = "RefKey expired by time"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_CREATE_PASSWORD"] = "USER_PROFILE_2004"] = "User create password successfully"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_UPDATE_PASSWORD_CURRENT_INCORRECT"] = "USER_PROFILE_4003"] = "Password current incorrect"
//     RESPONSE_CODE[RESPONSE_CODE["USER_PROFILE_UPDATE_PASSWORD"] = "USER_PROFILE_2005"] = "update password successfully"
    
//     RESPONSE_CODE[RESPONSE_CODE["USER_FORGOT_PASSWORD_SUCCESS"] = "USER_FORGOT_PASSWORD_2000"] = "User get url to reset password successful"
//     RESPONSE_CODE[RESPONSE_CODE["USER_FORGOT_PASSWORD_HAD_INFO"] = "USER_FORGOT_PASSWORD_2001"] = "user had email"
//     RESPONSE_CODE[RESPONSE_CODE["USER_FORGOT_PASSWORD_BY_REF_KEY_SUCCESS"] = "USER_FORGOT_PASSWORD_2002"] = "user get url by ref key success"
//     RESPONSE_CODE[RESPONSE_CODE["USER_FORGOT_PASSWORD_NOT_FOUND"] = "USER_FORGOT_PASSWORD_4000"] = "User not found"
//     RESPONSE_CODE[RESPONSE_CODE["USER_FORGOT_PASSWORD_CREATED_MAXIMUM"] = "USER_FORGOT_PASSWORD_4001"] = "user forgot password maximum in day"
//     RESPONSE_CODE[RESPONSE_CODE["USER_FORGOT_PASSWORD_NOT_HAVE_PASSWORD"] = "USER_FORGOT_PASSWORD_4002"] = "user have not password"
//     RESPONSE_CODE[RESPONSE_CODE["USER_GET_RESET_PASSWORD_SUCCESS"] = "USER_RESET_PASSWORD_2000"] = "User get url reset password success"
//     RESPONSE_CODE[RESPONSE_CODE["USER_RESET_PASSWORD_SUCCESS"] = "USER_RESET_PASSWORD_2001"] = "User reset password success"
//     RESPONSE_CODE[RESPONSE_CODE["USER_GET_RESET_PASSWORD_EXPIRE"] = "USER_RESET_PASSWORD_4000"] = "token expired by time"
    
//     // vendor
//     RESPONSE_CODE[RESPONSE_CODE["VENDOR_GET_PUBLIC_SUCCESS"] = "VENDOR_2000"] = "vendor get public success"
    
//     // sms
//     RESPONSE_CODE[RESPONSE_CODE["SMS_BALANCE_IS_NOT_ENOUGH"] = "SMS_4000"] = "balance is not enough"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_USER_NOT_FOUND"] = "SMS_4001"] = "user not found"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_USER_EXISTED"] = "SMS_4002"] = "user existed"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_STATUS_USER_NOT_ACTIVE"] = "SMS_4003"] = "status user not active"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_STATUS_DUPLICATE"] = "SMS_4004"] = "duplicate status"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_CREATE_TRANSACTION_FAILED"] = "SMS_4005"] = "create transaction failed"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_BALANCE_MINUS_SUCCESSFUL"] = "SMS_2000"] = "minus balance success"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_BALANCE_GET_SUCCESSFUL"] = "SMS_2001"] = "get balance by user id success"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_CREATE_USER_SUCCESSFUL"] = "SMS_2002"] = "create user success"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_BALANCE_PLUS_SUCCESSFUL"] = "SMS_2003"] = "plus balance success"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_TRANSACTION_GET_SUCCESSFUL"] = "SMS_2004"] = "get transaction success"
//     RESPONSE_CODE[RESPONSE_CODE["SMS_UPDATE_STATUS_ACCOUNT_SUCCESSFUL"] = "SMS_2005"] = "update account status success"
    
//     // transaction
//     RESPONSE_CODE[RESPONSE_CODE["TRANSACTION_CREATE_FAILED"] = "TRANSACTION_4000"] = "create transaction failed"
//     RESPONSE_CODE[RESPONSE_CODE["TRANSACTION_CONFIRM_FAILED"] = "TRANSACTION_4001"] = "status transaction not created"
    
//     // top up
//     RESPONSE_CODE[RESPONSE_CODE["TOP_UP_RECEIVE_NOT_FOUND"] = "TOP_UP_4000"] = "receiver not found"

 
 
//  export default RESPONSE_CODE
 
// class RESPONSE_CODE{
//      fruits: string[] = ['Apple', 'Orange', 'Banana']; 
// }