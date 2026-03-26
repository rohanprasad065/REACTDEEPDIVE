import conf from "../conf/conf";
import { Client, Account ,ID} from "appwrite";

export class AuthService {
    Client = new Client();
    account;


    constructor() {
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.Client);  
    }

      async createAccount({email, password}) {
        try {
          const response = await this.account.create(ID.unique(), email, password, name);
          if (response) {
            //call another method
            return this.login({email, password});
          
          }
          else{
            return response;
          }
        } catch (error) {
          console.error("Error creating account:", error);
          throw error;
        }
      }
      async login({email, password}) {
        try {
            return await this.account.createSession(email, password);
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }
    async getCurrentUser() {  
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Error getting current user:", error);
            throw error;
        }
        return null;

    }
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }





}

const authService = new AuthService();

export default AuthService;