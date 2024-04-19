export class GlobalConstants{
    public static token = localStorage.getItem("bearerToken")
    public static baseUrl = "https://fsapi.thibautstachnick.com/api"
    public static isLoggedIn :boolean = localStorage.getItem("bearerToken") !== null
}
