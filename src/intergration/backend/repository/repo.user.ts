'use strict'

import Repo from "./interface/MariaDBRepo";

const tableName = "user";
const keyName = "userId";

class RepoUser {

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

  async findByUsername(username:string) {
    let rs = await Repo.query(`SELECT * FROM ?? where ?? = ?`, [tableName, `username`], [username],null)
    return rs;
  }

  async findByPhoneNumber(phoneNumber:string) {
    let rs = await Repo.query(`SELECT * FROM ?? where ?? = ?`, [tableName, `phoneNumber`], [phoneNumber],null)
    return rs;
  }

  async findByEmail(email:string) {
    let rs = await Repo.query(`SELECT * FROM ?? where ?? = ?`, [tableName, `email`], [email],null)
    return rs;
  }

  async findByPhoneNumberAndEmail(phoneNumber:string, email:string) {
    let rs = await Repo.query(`SELECT * FROM ?? where ?? = ? AND ?? = ?`, [tableName, `phoneNumber`, `email`], [phoneNumber, email],null)
    return rs;
  }

  // async plusBalanceById(id, balance) {
  //   let rs = await Repo.query(`UPDATE ?? SET ?? = ?? + ?, modifiedAt = NOW() where ?? = ?`, [tableName, `balance`, `balance`, keyName], [balance, id])
  //   return rs;
  // }

//   async plusBalanceById(transactionId:string, transactionStatus, userId, amount) {
//     // let rs = await Repo.query(`UPDATE ?? SET ?? = ?? + ?, modifiedAt = NOW() where ?? = ?`, [tableName, `balance`, `balance`, keyName], [balance, id])
//     const rs = await Repo.query(`CALL plus_balance_for_user_sms(?, ?, ?, ?);`, [], [transactionId, transactionStatus, userId, amount])
//     return rs;
//   }

//   async minusBalanceById(id, balance, transaction) {
//     try {
//       let rs = await Repo.query(`UPDATE ?? SET modifiedAt = NOW(), ?? = CASE WHEN ?? - ? >= ?? THEN ?? - ? ELSE 'balance is smaller than minBalance' END where ?? = ?`,
//         [tableName, `balance`, `balance`, `minBalance`, `balance`, keyName], [balance, balance, id])
//       return rs;
//     } catch (e) {
//       e.transaction = transaction
//       throw e
//     }
//   }

}
export default new RepoUser();