import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";

import './MainPage.css';

class MainPage extends Component {
  state={};

  async componentDidMount() {
    const pageID = this.props.match.params.name;

    const response = await axiosAPI.get(`/pages/${pageID}.json`);

    if(response.data){
      this.setState({...response.data})
    }
  }

  async componentDidUpdate(prevProps) {
    const pageID = this.props.match.params.name;

    if(prevProps.match.params.name !== pageID){
      const response = await axiosAPI.get(`/pages/${pageID}.json`);

      if(response.data){
        this.setState({...response.data})
      }
    }
  }

  render() {
    return (
      <div className='MainPage'>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default MainPage;