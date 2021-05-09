class UserModel {

    userId: string | undefined;
    username: string | undefined;
    fullName: string | undefined;
    phoneNumber: string | undefined;
    prefix: string | undefined;
    email: string | undefined;
    address: string | undefined;
    dob: string | undefined;
    gender: number | undefined;
    avatar: string | undefined;
    balance: number | undefined;
    minBalance: number | undefined;
    currency: string | undefined;
    status: number | undefined;
    type: number | undefined;
    wrongPasswordAttempt: number | undefined;
    timeBannedByWrongPassword: string | undefined;
    createdAt: string | undefined;
    modifiedAt: string | undefined;

    constructor() { }

    setUserId(userId: string) { this.userId = userId; return this; }
    setUsername(username:string) { this.username = username; return this; }
    setFullName(fullName:string) { this.fullName = fullName; return this; }
    setPhoneNumber(phoneNumber:string) { this.phoneNumber = phoneNumber; return this; }
    setPrefix(prefix:string) { this.prefix = prefix; return this }
    setEmail(email:string) { this.email = email; return this; }
    setAddress(address:string) { this.address = address; return this; }
    setDob(dob:string) { this.dob = dob; return this; }
    setGender(gender:number) { this.gender = gender; return this; }
    setAvatar(avatar:string) { this.avatar = avatar; return this; }
    setBalance(balance:number) { this.balance = balance; return this; }
    setMinBalance(minBalance:number) { this.minBalance = minBalance; return this; }
    setCurrency(currency:string) { this.currency = currency; return this; }
    setStatus(status:number) { this.status = status; return this; }
    setType(type:number) { this.type = type; return this; }
    setWrongPasswordAttempt(wrongPasswordAttempt:number) { this.wrongPasswordAttempt = wrongPasswordAttempt; return this; }
    setTimeBannedByWrongPassword(timeBannedByWrongPassword:string) { this.timeBannedByWrongPassword = timeBannedByWrongPassword; return this }
    setCreatedAt(createdAt:string) { this.createdAt = createdAt; return this; }
    setModifiedAt(modifiedAt:string) { this.modifiedAt = modifiedAt; return this; }

}

export default UserModel;