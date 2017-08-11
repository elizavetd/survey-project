import React from 'react'
import { connect } from 'react-redux'
import { store } from '../../store'
import { getUserList } from '../../reducers/userReducer'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

@connect((store) => {
    return {
        users: getUserList()
    };
})
export default class UsersPage extends React.Component {
    //componentWillMount() {
       // store.dispatch({type: "RECEIVE_USER_LIST", userList: getUserList()});
        //this.forceUpdate();
   // }
    render() {
        const { users } = this.props;
        return (
            <div className="content">
                {console.log(users)} 
                <section className="users">
                    <table className="table">
                        <TableHeader />
                        <tbody>
                            {/* {users && users.map(user =>
                                <TableRow
                                    key = {user.id}
                                    username = {user.username}
                                    role = {user.role}
                                    signupDate = {user.signupDate}
                                    surveysCount = {user.surveysCount}
                                />
                            )} */}

                            {/* <TableRow
                                username = "admin@ad.min"
                                role = "Администратор"
                                signupDate = "01.01.2017"
                                surveysCount = {10}
                            />
                            <TableRow
                                username = "alma.russell@example.com"
                                role = "Пользователь"
                                signupDate = "02.02.2017"
                                surveysCount = {7}
                            />
                            <TableRow
                                username = "tony.smith64@example.com"
                                role = "Пользователь"
                                signupDate = "03.03.2017"
                                surveysCount = {4}
                            />
                            <TableRow
                                username = "stacey.fernandez@example.com"
                                role = "Пользователь"
                                signupDate = "03.04.2017"
                                surveysCount = {8}
                            />
                            <TableRow
                                username = "ralph.graves32@example.com"
                                role = "Пользователь"
                                signupDate = "05.06.2017"
                                surveysCount = {11}
                            /> */}
                        </tbody>
                        <TableFooter userCount={112} />
                    </table>
                </section>
            </div>
        );
    }
}
