const mongoose = require('mongoose');
async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/quizDBMS');
        console.log('connection successfull !!');
    }catch(error){
        console.log("connection not successfull !!", error); 
    }
}
main();