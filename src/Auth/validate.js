// import React, { Component } from 'react'

// export default validate = () => {
// return(
//     let reg = /^[a-z\d\._-]+[\@][a-z]+[\.] $/;
// )
// }

// aakash.d2389@gmail.com


export default function validateEmail(email) {
    var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    email = email.trim();
    if (email == "" || email == undefined || email == null) {
        return { status: false, error: "*Please enter email address." };
    }
    else if (!emailRegex.test(email)) {
        return { status: false, error: "*Please enter valid email address." };
    }
    else {
        return { status: true, error: '' };
    }
}