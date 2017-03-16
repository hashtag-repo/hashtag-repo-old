import React, {Component} from 'react';
import UserSummary from './UserSummary.jsx';
import UserBillsTable from './UserBillsTable.jsx';

class UserMain extends Component {
  constructor(props) {
    super(props);


    this.state = {

    };
  
  }


  render() {


    return (
      <div className="usermain-div">
        UserMain
        <UserSummary />
        <UserBillsTable />
      </div>
    );
  }

}

export default UserMain;