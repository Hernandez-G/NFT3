import { useState } from "react";
import React from "react";
import "./ProfileForm.css"
import * as usersApi from "../../utilities/users-api"

function ProfileForm({user}) {
    const [userUpdate, setUserUpdate] = useState({
        username: user.username ? user.username : '',
        bio: user.bio ? user.bio : ''
    });
    const[submitting, setSubmitting] = useState(false);
     async function handleSubmit(evt) {
        evt.preventDefault();
        // alert('form');
        setSubmitting(true);
        const profile = await usersApi.updateProfile(userUpdate)
        console.log(profile)
        // when submitted data is loading
        setTimeout(() => {
            setSubmitting(false);
        
        }, 2000)
    }
    
    function handleChange(evt) {
        setUserUpdate({...userUpdate, [evt.target]: evt.target.value });
        console.log(handleChange);

    }

        
        return(

            <div className="wrapper">
                <h1>Edit Profile</h1>
                {submitting &&
                <div>Submitting Form...</div>
                }
                <form onSubmit={handleSubmit} handleChange={handleChange}>
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input 
                            type="text"
                            name="username"
                            value={user.username}
                             />
                            <br />
                            <p>Upload Photo</p>
                            <input type="file" name="newfile" />
                            <input type="submit" name="submit" />
                            <p>Bio</p>
                            <textarea name="message" required/>
                            <p>Instagram</p>
                            <input name="name" />
                            <p>Twitter</p>
                            <input name="name" />
                        </label>
                            <button type="submit" >Save</button>
                    </fieldset>

                </form>


            </div>
            )
        }
        export default ProfileForm;