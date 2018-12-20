import { AppComponent } from '../app.component';

export class ApiConstant {
    //Local
    static BASEURL = "http://localhost:3344/";
    
    //Production
    //static baseUrl = "http://exampleApiUrl.com/api/";

    static UserBase = ApiConstant.BASEURL + 'api/home/';

    static userAll = ApiConstant.UserBase + 'all';
    static userCreate = ApiConstant.UserBase + 'create';
    static userUpdate = ApiConstant.UserBase + 'update';
}