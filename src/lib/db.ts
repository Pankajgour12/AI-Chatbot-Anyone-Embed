import { connect } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
if (!MONGODB_URL) {
  console.log("Please define the MONGODB_URL environment variable ");
}

let cache = global.mongoose

if(!cache){
    cache = global.mongoose = {conn:null,promise:null}
}


const connectDb = async () => {
  if (cache.conn) {
    return cache.conn;
  }
  if (!cache.promise) {
    cache.promise = connect(MONGODB_URL!).then((c)=>c.connections)
  }



  try {
    cache.conn = await cache.promise
  } catch (error) {
    console.log(error)
    
  }
  return cache.conn;
  
}

export default connectDb;




