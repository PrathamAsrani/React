import React from 'react'

const UserData = (props) => {
    const Data = props.users;
  return (
    <div>
        {
            Data.map((item,index) => {
                const {id, name, username, email} = item;
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{username}</td>
                    </tr>
                )
            })
        }
    </div>
  )
}

export default UserData