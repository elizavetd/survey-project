import React from 'react'

import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

export default class UsersPage extends React.Component {
  render() {
    return (
        <div className="content">
		    <section className="users">
                <table className="table">
				    <TableHeader />
				    <tbody>
                        <TableRow
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
                        />
				    </tbody>
                    <TableFooter userCount={112} />
			    </table>
		    </section>
	    </div>
    );
  }
}
