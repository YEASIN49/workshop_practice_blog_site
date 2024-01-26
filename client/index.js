
// CODE FOR CREATING POST 
const createForm = document.getElementById('createForm')

// THIS IS AN EVENT LISTENER WHICH WILL RUN WHEN WE CLICK THE create BUTTON OF CREATE POST 
createForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const bodyParam = new URLSearchParams( new FormData(createForm) )
    
        //CALLING UPDATE API
        fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            body: bodyParam
        })
        .then(res => {
            if(res.status !== 200){
                alert('Unable to post')
                return
            }
            alert('Created Successfully !')
        })
        
        .catch(err => {
            console.error({ err })
        })
});


// GET ALL POST
function getAll(){
    fetch('http://localhost:5000/api/posts')
        .then(res => {
            if(res.status !== 200){
                alert('Unable to update')
                return
            }
            return res.json()
        })
        .then( parsedRes => {
            const container = document.getElementById('post-container')
            let postMarkup = null
            parsedRes.forEach( item => {

                postMarkup = postMarkup ? ( 
                    postMarkup +
                    `<div style="border: 1px solid gray; width: 400px; padding: 5px"> 
                        <h4>Title: ${ item.title }</h4>
                        <p>Author: ${ item.username }</p>
                        <p>Post ID: ${ item._id }</p>
                        <p>Description: ${ item.description }</p>
                    </div>`
                )
                : 
                (
                    `<div style="border: 1px solid gray; width: 400px; padding: 5px"> 
                        <h4>Title: ${ item.title }</h4>
                        <p>Author: ${ item.username }</p>
                        <p>Post ID: ${ item._id }</p>
                        <p>Description: ${ item.description }</p>
                    </div>`
                )
            })
        
            
          

            //CLEANING EXISTING MOVIE HTML NODE/ELEMENT
            
            // approach 1
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }

            // approach 2
            // container.innerHTML = ""

            // // Adding new data markup
            container.insertAdjacentHTML('beforeend', postMarkup)

            
        })
        .catch(err => {
            // alert(err.message)
            console.error({ err })
        })
}

//  CODE FOR DELETE POST STARTS HERE
/*  
*	I ALREADY CREATED THE HTML PART FOR IT. YOU NEED TO PREPARE THE API OF THIS BACKEND PART( IN server Folder)
*	AND ALSO THE JAVASCRIPT FUNCTION OF FRONTEND HERE. NOW START THE CODE.   
*/

// code here.....

// ****************************************************************************************
/*  NOTE: IF you already clicked "Get All Post" Button. This means all the posts are
*   already rendered/visible in the website. So after you delete a post, it may still be available there.
*   So, click the "Get All Post" again. Now, if you see that the post is missing, You have done it. 
*/