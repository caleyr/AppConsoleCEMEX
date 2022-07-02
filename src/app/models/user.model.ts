
export class User {
    constructor(
        public document: string,
        public email: string,
        public firstName: string,
        public id: string,
        public lastName: string,
        public phoneNumber: string,
        public slug: string,
        public userName: string,
        public photo?: string,
        public roles?: string[],
        public idCurrentRol?: any
        /* public accessFailedCount?: any,
        public concurrencyStamp?: any,
        public documentIdentityCardBack?: any,
        public documentIdentityCardFrontal?: any,
        public emailConfirmed?: any,
        public lockoutEnabled?: any,
        public lockoutEnd?: any,
        public normalizedEmail?: any,
        public normalizedUserName?: any,
        public passwordHash?: any,
        public phoneNumberConfirmed?: any,
        public status?: any,
        public twoFactorEnabled?: any,
        public securityStamp?: any */
    ) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get firstLetter() {
        return this.firstName[0] + this.lastName[0];
    }
}
