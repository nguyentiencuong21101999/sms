'use strict'

import Repo from './interface/MariaDBRepo'

const tableName = "userSMS";
const keyName = "userId";

class RepoUserSMS {

  constructor() {
   
  }

  async findAll() {
    return await Repo.findAll(tableName);
  }

  async findById(id:string) {
    return await Repo.findById(id, keyName, tableName);
  }

  async create(object:any) {
    return await Repo.create(object, tableName);
  }

  async update(id:string, object:any) {
    return await Repo.update(id, object, tableName, keyName);
  }

  async delete(id:string) {
    return await Repo.delete(id, tableName, keyName);
  }

  async count() {
    return await Repo.count(tableName, keyName);
  }

  async findByCustomerCodeAndAccountId(customerCode:string, accountId:string) {
    let rs = await Repo.query(`SELECT * FROM ?? where ?? = ? AND ?? = ?`, [tableName, `customerCode`, `accountId`], [customerCode, accountId],null)
    return rs[0]
  }

  async findByStatus(status:number) {
    let rs = await Repo.query(`SELECT * FROM ?? where ?? = ?`, [tableName, `status`], [status],null)
    return rs[0]
  }

}
export default new RepoUserSMS();