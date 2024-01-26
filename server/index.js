const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require('cors')

//initializing app
const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//defining URI key
dotEnv.config();

/********************************************************************
   THE CODE PROVIDED ABOBE ARE SOME COMMON THINGS THAT YOU WILL
   FIND ALMOST IN EVERY NODEJS BASED BACKEND.DON'T SPEND TOO MUCH TIME ON UNDERSTING THESE.
   YOU WILL UNDERSTAND THESE GRADUALLY OVER THE PERIOD OF LEARNING THROUGH DEVELOPING DIFFERENT APPLICAIONS
********************************************************************/

// FETCHING THE REFERENCE OF ROUTING FILES
const postRoute = require("./routes/posts");


/***************************************************************
 * 
 * YOU NEED TO INSTALL MONGODB IN YOUR PC. ONLY THEN YOU CAN RUN THE APPLICATION. 
 * 
 *************************************************************/
// //Database connectivity by mongoose
mongoose.set('strictQuery', true)

//// connecting to mongodb
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log("Connected to DB successfully"))
.catch(err => {
	console.log( err )
	console.log("======== MAKE SURE YOU STARTED MONGODB SERVICE! ========")
	// IN UBUNTU YOU CAN START THE SERVICE USING THE COMMAND: service mongod start
});
	

/*************************************************************************
 * 
 * I HAVE ALREADY CREATED A ROUTE FOR YOU. TRY TO UNDERSTAND IT.
 * WHEN THE SERVER RECEIVES A REQUEST SIMILAR TO: /api/posts or /api/posts/XYZ...
 * THIS WILL SEARCH THOSE REQUEST IN THE FILE REFERRED IN userRoute
 * YOU BASICALLY CREATE ROUTES IN THIS index.js PAGE IN BACKEND SERVER.
 * THE SPECIFIC FUNCTIONALITY SHOULD BE IN THE SPECIFIC FILES UNDER routes FOLDER. 
 * 
*********************************************************************/


app.use("/api/posts", postRoute);

// THE FUNCTION BELOW STARTS THE SERVER. HERE 5000 IS THE PORT WHERE THE SERVER CAN BE ACCESSED.
app.listen("5000", () => {
	console.log("Starting server at http://localhost:5000")
})