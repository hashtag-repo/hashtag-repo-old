import React, {Component} from 'react';
import UserSummary from './UserSummary.jsx';
import UserBillsTable from './UserBillsTable';

class UserMain extends Component {
  constructor(props) {
    super(props);


    this.state = {

    };
  
  }


  render() {


    return (
      <div>
        <UserSummary />
        <UserBillsTable />
      </div>
    );
  }

}

export default UserMain;