import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";

import './AdminPage.css';

class AdminPage extends Component {
  state = {
    pages: [],
    pageID: '',
    title: '',
    description: '',
  };

  async componentDidMount() {
    const response = await axiosAPI.get('/pages.json');

    if(response.data){
      const pages = Object.keys(response.data);

      const pageID = pages[0];

      const pageData = await axiosAPI.get(`/pages/${pageID}.json`);

      this.setState({...pageData.data, pages, pageID})
    }
  }

  changeDataHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  saveChangesHandler = async (event) => {
    event.preventDefault();

    const newData = {
      title: this.state.title,
      description: this.state.description
    };

    await axiosAPI.patch(`/pages/${this.state.pageID}.json`, newData);

    this.props.history.push('/');
  };

  selectPageHandler = async (event) => {
    const pageID = event.target.value;

    const response = await axiosAPI.get(`/pages/${pageID}.json`);

    if(response.data){
      this.setState({...response.data, pageID})
    }
  };

  render() {
    return (
      <div className='AdminPage'>
        <h2>Edit pages</h2>
        <form className='AdminForm' onSubmit={this.saveChangesHandler}>
          <label htmlFor='pageID'>Select Page</label>
          <select
            name="pageID"
            id="pageID"
            value={this.state.pageID}
            onChange={this.selectPageHandler}
          >
            {this.state.pages.map(pageID =>
              <option className='text-capitalize' key={pageID}>
                {pageID}
              </option>
            )}
          </select>
          <label htmlFor='title'>Title</label>
          <input type="text" name='title' id='title' value={this.state.title} onChange={this.changeDataHandler}/>
          <label htmlFor='description'>Content</label>
          <textarea name="description" id="description" value={this.state.description} onChange={this.changeDataHandler}/>
          <button className="save">Save</button>
        </form>
      </div>
    );
  }
}

export default AdminPage;