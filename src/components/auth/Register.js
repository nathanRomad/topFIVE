import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { authApi, userStorageKey } from "./authSettings"
import "./Login.css"
import '../../App.css';

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "", password: "", location: "", bio: "", image: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const [imageUrl, setImageUrl] = useState(null)
    const [imageAlt, setImageAlt] = useState(null)

    const handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('upload_preset', 'topFIVE_upload');
        const options = {
            method: 'POST',
            body: formData,
        };

        // replace cloudname with your Cloudinary cloud_name
        return fetch('https://api.cloudinary.com/v1_1/nateromad/image/upload', options)
            .then(res => res.json())
            .then(res => {
                setImageUrl(res.secure_url)
                setImageAlt(res.original_filename)
            })
            .catch(err => console.log(err));
    }

    const openWidget = () => {
        // create the widget
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'nateromad',
                uploadPreset: 'topFIVE_upload',
            },
            (error, result) => {
                if (result.event === 'success') {
                    setImageUrl(result.info.secure_url)
                    setImageAlt(result.info.original_filename)
                }
            }
        );
        widget.open(); // open up the widget after creation
    };

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {

        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`,
                            password: registerUser.password,
                            location: registerUser.location,
                            bio: registerUser.bio,
                            imageUrl: imageUrl,
                            imageAlt: imageAlt
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem(userStorageKey, createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main className="container--register" style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>
            <section className="registration" >
                <form className="form--register" onSubmit={handleRegister}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register for topFIVE</h1>
                    <fieldset>
                        <label htmlFor="firstName"> First Name </label>
                        <input type="text" name="firstName" id="firstName" className="form-control nes-input" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName"> Last Name </label>
                        <input type="text" name="lastName" id="lastName" className="form-control nes-input" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email" name="email" id="email" className="form-control nes-input" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password" name="password" id="password" className="form-control nes-input" placeholder="Password" required value={registerUser.password} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputLocation"> Location </label>
                        <input type="location" name="location" id="location" className="form-control nes-input" placeholder="Location" required value={registerUser.location} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputBio"> Bio </label>
                        <input type="bio" name="bio" id="bio" className="form-control nes-input" placeholder="Bio" required value={registerUser.bio} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                    </fieldset>
                    <fieldset>
                        <button type="submit"> Sign in </button>
                    </fieldset>
                </form>
                <section className="App">
                    <section className="left-side">
                        <form>
                            <div className="form-group">
                                <input type="file" />
                            </div>

                            <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
                            <button type="button" className="btn widget-btn" onClick={openWidget}>Upload Via Widget</button>
                        </form>
                    </section>
                    <section className="right-side">
                        <p>The resulting image will be displayed here</p>
                        {imageUrl && (
                            <img src={imageUrl} alt={imageAlt} className="displayed-image" />
                        )}
                    </section>
                </section>
            </section>
        </main>
    )
}