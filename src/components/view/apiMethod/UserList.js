import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const UserList = () => {
    const [users, setusers] = useState([])
    const id = useParams()
    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const results = await axios.get('http://localhost:3005/users')
        // return results
        setusers(results.data.reverse())
    }

    const ondelete = async (id) => {
        await axios.delete('http://localhost:3005/users/' + id)
        loadUsers()
    }

    return (
        <div className="mt-5">
            <div className="container">
                <Link to="/useradd">
                    <button className="btn btn-info">
                        add user
                    </button>
                </Link>
                <br />
                <br />
                <table className="table shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((value, i) => {
                                return <tr>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.name} </td>
                                    <td>{value.email} </td>
                                    <td>{value.website} </td>
                                    <td>
                                        <Link to='/userview' className="btn btn-primary">View</Link>
                                        <Link to={`/UserId/${value.id}`} className="btn btn-outline-warning mx-2">Edit</Link>
                                        <span className="btn btn-danger" onClick={()=>ondelete(value.id)}>Delete</span>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default UserList
