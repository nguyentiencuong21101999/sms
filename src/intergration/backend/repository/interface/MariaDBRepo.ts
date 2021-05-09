import mariadb from "mariadb";

class MariaDBRepo {
  con: any = null;

  createConnection(config: any) {
    console.log("Establish maria connection...");
    this.con = mariadb.createPool({
      connectionLimit: 16,
      host: config.mariaDBConfig.host,
      user: 'root',
      password: 'Tiencuong@123',
      database: 'sms',
    })
    console.log("Init Maria connection pool successful!");

  }
  async query(query: string, field: Array<string>, param: any | null, data: any|null) {
    query = query.replace(/\?\?/gi, '$')
    while (query.includes('$')) {
      query = query.replace('$', this.con.escapeId(field[0]))
      field.splice(0, 1)
    }
    if (data) {
      query = query.replace('#', data)
    }
    console.log(query);

    return await this.con.query(query, param).then((rs: any) => {
      return rs[0];
    }).catch((e: any) => {
      if (e) {
        throw e
      }
    });
  }

  async findAll(tableName: string) {
    return await this.query('SELECT * FROM ??', [tableName], null, null);
  }
  async findById(id: string, key: string, tableName: string) {
    // Logger.info(`MariaDbRepo execute findById`);
    // Logger.debug(`MariaDbRepo execute findById receive id`, id);
    // Logger.debug(`MariaDbRepo execute findById receive key`, key);
    // Logger.debug(`MariaDbRepo execute findById receive tableName`, tableName);
    let rs = await this.query("SELECT * FROM ?? where ?? = ? ", [tableName, key], [id], null)
    if (!rs) {
      throw new Error("Not found id " + id + " in table " + tableName)
    }
    return rs;
  }
  async create(object: any, tableName: string) {
    let query = `INSERT INTO ${this.con.escapeId(tableName)}`;
    let fieldQuery = ' (';
    let valuesQuery = '(';
    let array = Object.getOwnPropertyNames(object); // => key
    array.forEach(field => {
      fieldQuery += this.con.escapeId(field) + ',';
      valuesQuery += this.con.escape(object[field]) + ',';
    })
    fieldQuery = fieldQuery.substr(0, fieldQuery.length - 1)
    valuesQuery = valuesQuery.substr(0, valuesQuery.length - 1)
    fieldQuery += ') ';
    valuesQuery += ')';
    query = query + fieldQuery + ' VALUES ' + valuesQuery;
    console.log(query);

    await this.con.query(query);
  }
  async update(id: string, object: any, tableName: string, keyName: string) {
    console.log(`MariaDbRepo execute update`);
    let condition = ''
    let array = Object.getOwnPropertyNames(object);
    array.forEach(field => {

      condition += `${this.con.escapeId(field)} = ${this.con.escape(object[field])},`;
    })
    condition = condition.substr(0, condition.length - 1)
    await this.query(`UPDATE ?? SET # WHERE ?? = ?`, [tableName, keyName], [id], condition);
  }
  async delete(id: string, tableName: string, keyName: string) {
    await this.query('DELETE FROM ?? WHERE ?? = ?', [tableName, keyName], [id], null);
  }
  async count(tableName: string, keyName: string) {
    let rs = await this.query('SELECT COUNT(??) as number FROM ??', [keyName, tableName], null, null);
    return rs.number
  }
}

export default new MariaDBRepo();