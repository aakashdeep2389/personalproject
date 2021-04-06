import React, {useState} from 'react'

function Signup() {
    const [Uname, setUname] = useState('')
    
    return (
        <div>
            <div class="container">
                <h1>singup</h1>  
                <form>
                    <div class="form-group">
                      <input type="text" name="" id="" value={Uname} class="form-control" placeholder="Fullname" aria-describedby="helpId" />
                    </div>    
                    <div class="form-group">
                      <input type="email" name="" id="" class="form-control" placeholder="email" aria-describedby="helpId" />
                    </div>    
                    <div class="form-group">
                      <input type="text" pattern={/[0-9.]+/} name="" id="" class="form-control" placeholder="phone" aria-describedby="helpId" />
                    </div>    
                    <div class="form-group">
                      <input type="password" name="" id="" class="form-control" placeholder="password" aria-describedby="helpId" />
                    </div>    
                    <div class="form-group">
                      <input type="password"  name="" id="" class="form-control" placeholder="Cpassword" aria-describedby="helpId" />
                    </div>    
                    <div class="form-group">
                      <input type="submit"  name="" id="" class="btn btn-primary" value="Submit" aria-describedby="helpId" />
                    </div>    
                </form>  
            </div>
        </div>
    )
}

export default Signup
