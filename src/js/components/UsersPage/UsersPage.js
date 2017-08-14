import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'
import { getUserList } from '../../reducers/userReducer'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

@connect((store) => {
    return {
        users: store.user.userList
    };
})
export default class UsersPage extends React.Component {
    componentWillMount() {
        getUserList();
    }
    render() {
        const { users } = this.props;
        return (
            <div className="content">
                {console.log(users)} 
                <section className="users">
                    <table className="table">
                        <TableHeader />
                        <tbody>
                            {users && users.map(user =>
                                <TableRow
                                    key = {user.id}
                                    username = {user.username}
                                    role = {user.role}
                                    signupDate = {user.signupDate}
                                    surveysCount = {user.surveysCount}
                                />
                            )}
                        </tbody>
                        <TableFooter userCount={112} />
                    </table>
                </section>
            </div>
        );
    }
}
