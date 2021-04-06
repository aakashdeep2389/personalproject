import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

function UserAdd() {
    let histroy  = useHistory()
    const [users, setUsers] = useState({
        name: '',
        email: '',
        website: '',
        phone: '',
    })
    let {name, email, website, phone} = users

    const  onchange=(e)=>{
        setUsers({...users, [e.target.name]: e.target.value})
    }

    const formSubmit = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:3005/users', users);
        histroy.push('/userlist')
    }
    console.log('usersusersusers', users);

    return (
        <div className="container">
            <form className="mt-5" onSubmit={formSubmit}>
                <Link to="/userlist">
                    <button className="btn btn-primary">
                        backto userlist
                    </button>
                </Link> 
                <br/>
                <br/>

                <div className="form-group">
                    <label htmlFor="">name</label>
                    <input type="text" name="name" id="" value={name} onChange={(e)=> {onchange(e)}} className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">email</label>
                    <input type="email" name="email" id="" value={email} onChange={(e)=> {onchange(e)}} className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">website</label>
                    <input type="text" name="website" id="" value={website} onChange={(e)=> {onchange(e)}}  className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">phone</label>
                    <input type="phone" name="phone" id="" value={phone} onChange={(e)=> {onchange(e)}}  className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                    <button type="submit"  className="btn btn-primary" >
                        add User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserAdd
