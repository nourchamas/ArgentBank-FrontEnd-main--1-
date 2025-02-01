const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chamasnour87:k2G1cRy3tMUvt4uj@argent.xyfsk.mongodb.net/?retryWrites=true&w=majority&appName=argent",
      {
        useNewUrlParser: true,
      }
    );
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
