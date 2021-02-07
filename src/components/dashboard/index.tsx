import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
} from "react-bootstrap";
import ContentWrapper from "../common/ContentWrapper";
import db from "../../databases";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.loadInformation = this.loadInformation.bind(this);

    this.loadInformation();
  }

  loadInformation() {
    if (db.Business == undefined) {
      setTimeout(this.loadInformation, 100);
    } else {
      new db.Business({id: 0}).fetch().then((business) => {
        this.setState({
          name: business.get("name")
        });
      });
    }
  }

  render() {
    return (
      <ContentWrapper title={this.state.name}>
        <Row>
          <Col></Col>
        </Row>
      </ContentWrapper>
    );
  }
};

export default Dashboard;
