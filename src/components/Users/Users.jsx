import React from "react";

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        image
                    </div>

                    {user.fullName}
                    {user.status}
                    {user.location.city}
                    {user.location.country}
                </div>
                )
            }

        </div>
    )
}

export default Users;