const router = require("express").Router()
const Post = require("../models/Post")

// CREATE A POST
router.post("/", async (req, res) => {
	try {
		const savePost = await Post.create(req.body)
		console.log(`POST HAS BEEN CREATED SUCCESSFULLY \n${savePost}`)
		res.status(200).json(savePost)
	} catch (err) {
		res.json(err)
	}
})


// GET ALL POST
router.get("/", async (req, res) => {
	try {
		let requiredPost = await Post.find()
		res.status(200).json(requiredPost)
	} catch (error) {
		res.status(500).json(error)
	}
})

//  FOR YOUR PRACTICE
/* 	CREATE THE API, WHICH CAN DELETE ONE POST. FOR THIS THE API SHOULD
* 	WILL RECEIVE post_id, author/user name AND password FROM THE USER.
*	IF THE post_id, username AND password IS MATCHED THEN, THE API WILL DELETE IT. 
*	I ALREADY CREATED THE HTML PART FOR IT. YOU NEED TO PREPARE THE API OF THIS BACKEND PART HERE
*	AND ALSO THE JAVASCRIPT FUNCTION OF FRONTEND(inside the client folder).   
*/

/******************************************************
* YOUR API FUNCTION CODE STARTS BELOW THIS LINE
******************************************************/

// code between these area......

/******************************************************
* YOUR API FUNCTION CODE ENDS ABOVE THIS LINE
******************************************************/


/*********************************************************************************
**********************************************************************************
**********************************************************************************
* 	IF YOU HAVE COMPLETED THE DELETE API AND IT IS WORKING WITH FRONTEND, 
*	NOW TRY TO CREATE YOURSELF A COMPLETE NEW APPLICATION. 
*	YOU CAN START CREATING YOUR OWN PORTFOLI SITE AS WE DISCUSSED IN THE WORKSHOP SESSION 
**********************************************************************************
**********************************************************************************
*********************************************************************************/


module.exports = router;