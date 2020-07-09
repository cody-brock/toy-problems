import React, { Component } from 'react';
import './MonkeyDetails.css';
import { Link } from 'react-router-dom';

class MonkeyDetails extends Component {
  render() {
    let { monkey } = this.props;
    return(
        <div className="MonkeyDetails row justify-content-center mt-5">
          <div className="col-11 col-lg-5">
            <div className="MonkeyDetails-card card">
              <img className="card-img-top" src={monkey.img} alt={monkey.name} />
              <div className="card-body">
                <h4 className="card-title">
                  {monkey.name}
                </h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Age: {monkey.age}
                </li>
                <li className="list-group-item">
                  Toes: {monkey.toes}
                </li>
                <li className="list-group-item">
                  Fun Fact: {monkey.funFact}
                </li>
              </ul>
              <div className="card-body">
                <Link to='/monkeys' className='btn btn-info'>Go Back</Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default MonkeyDetails;