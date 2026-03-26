import conf from "../conf/conf";
import { Client, ID,Databases,Storage,Query  } from "appwrite";

export class Service {
    Client = new Client();
    databases;
    storage;
    constructor() {
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.storage = new Storage(this.Client);
    }
    async createPost({title, content, slug,featuredImage,status,userId}) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteUsersCollectionId, slug,{ 

                title,
                content,
                
                featuredImage,
                status,
                userId
            });
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }
    async updatePost(slug,{title, content,featuredImage,status,}) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteUsersCollectionId, slug,{ 

                title,
                content,
                
                featuredImage,
                status
            });
        } catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteUsersCollectionId, slug);
        } catch (error) {
            console.error("Error deleting post:", error);
            throw error;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteUsersCollectionId, slug);
        } catch (error) {
            console.error("Error getting post:", error);
            throw error;
        }
    }
    async getPosts(query =[Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteUsersCollectionId, query);
        } catch (error) {
            console.error("Error getting posts:", error);
            throw error;
        }
    }
   //file upload SERVICE
   async uploadFile(file) {
    try {
        const response = await this.storage.createFile(conf.appwriteBucketsCollectionId, ID.unique(), file);
        return response;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }



    


}
async deleteFile(fileId) {
    try {
        await this.storage.deleteFile(conf.appwriteBucketsCollectionId, fileId);
    } catch (error) {
        console.error("Error deleting file:", error);
        throw error;
    }
}
getFilePreviewUrl(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketsCollectionId, fileId);
}
getFileDownloadUrl(fileId) {
    return this.storage.getFileDownload(conf.appwriteBucketsCollectionId, fileId);      
}

}

const Service = new Service();

export default Service;
