import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { authApi, userStorageKey } from "./authSettings"
import "./Login.css"

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "", password: "", location: "", bio: "", image: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

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
                            bio: registerUser.bio
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
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Application Name</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" required value={registerUser.password} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputLocation"> Location </label>
                    <input type="location" name="location" id="location" className="form-control" placeholder="Location" required value={registerUser.location} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputBio"> Bio </label>
                    <input type="bio" name="bio" id="bio" className="form-control" placeholder="Bio" required value={registerUser.bio} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}