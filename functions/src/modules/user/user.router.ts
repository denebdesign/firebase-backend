import { User } from './user';

export class UserRouter extends User {
    constructor( db, req ) {
        super( db, req );
        return;
    }
    version() {
        return '0.1';
    }

    count() {
        return 10;
    }

    register() {
        return this.create();
    }

}