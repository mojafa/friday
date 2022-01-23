export default class SessionHelper {
    public static set(key:string , value:any){
        const json = JSON.stringify(value);
        sessionStorage.setItem(key, json);
    }

    public static get(key){
        try{
            const jsonString = sessionStorage.getItem(key);
            const obj = JSON.parse( jsonString );
            return obj

        }catch(e){
            return null
        }
    }

    public static remove(key:string){
        sessionStorage.removeItem(key);
    }

    public static clear(){
        sessionStorage.clear();
    }

}
