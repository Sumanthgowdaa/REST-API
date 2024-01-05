const reset_password = (name,email,token) => {
    return `<div>
                <main>
                <div>
                <p>Hello, ${name},your email is ${email} </p>
                <h3>Follow this link to reset your password </h3>
                <p>
                <strong>
                <a class="btn" target="blank" href= "http://localhost:4000/password/reset?token=${token} ">
                    Reset Password
                </a>
                </strong>
                </p>

                <p>If you didn't want to reset password,kindly in=gnore the link </p>
                
                <h4>Thanks </h4>
                <h5> Team API </h5>
                </div>
                </main>    
            </div>`
}
module.exports = reset_password