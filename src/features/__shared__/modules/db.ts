import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/dhoniaridho.com");

const DB = mongoose;

export default DB;
