'use strict'

class UserSMSModel {

    userId: string = '';
    customerCode: string = '';
    accountId: string = '';
    info: string = '';
    status: number = 0;
    createdAt: string = '';
    modifiedAt: string = '';

    constructor() { }

    setUserId(userId: string) { this.userId = userId; return this; }
    setCustomerCode(customerCode: string) { this.customerCode = customerCode; return this; }
    setAccountId(accountId: string) { this.accountId = accountId; return this; }
    setInfo(info: string) { this.info = info; return this; }
    setStatus(status: number) { this.status = status; return this; }
    setCreatedAt(createdAt: any) { this.createdAt = createdAt; return this; }
    setModifiedAt(modifiedAt: any) { this.modifiedAt = modifiedAt; return this; }

}

export default UserSMSModel;