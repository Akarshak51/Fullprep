import {ENV} from "../../config/env.js";
let refreshing=null;
async function request(path,{method="GET",body,headers={}}={}){
 const res=await fetch(`${ENV.API_BASE_URL}${path}`,{method,credentials:"include",headers:{"Content-Type":"application/json",...headers},body:body!==undefined?JSON.stringify(body):undefined});
 if(res.status===401&&path!=="/auth/refresh"&&path!=="/auth/login"&&path!=="/auth/google"){if(!refreshing){refreshing=fetch(`${ENV.API_BASE_URL}/auth/refresh`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}}).finally(()=>{refreshing=null})}const rr=await refreshing;if(rr.ok)return request(path,{method,body,headers});}
 const payload=await res.json().catch(()=>({}));if(!res.ok)throw new Error(payload.message||`Request failed (${res.status})`);return payload?.data!==undefined?payload.data:payload;
}
export const http={get:path=>request(path),post:(path,body)=>request(path,{method:"POST",body}),patch:(path,body)=>request(path,{method:"PATCH",body}),put:(path,body)=>request(path,{method:"PUT",body}),del:path=>request(path,{method:"DELETE"})};
