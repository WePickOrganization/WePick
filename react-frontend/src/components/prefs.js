import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { HashRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import '../stylesheets/pref.css'

class prefs extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dynamicList: []
      };
      this.addListItem = this.addListItem.bind(this);
      this.removeListItem = this.removeListItem.bind(this);
      this.editSubmit = this.editSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/getArtists')
          .then(response =>{this.state.dynamicList = response.data;console.log(this.state.dynamicList);this.forceUpdate();}
          )
          .catch(function (error) {
            console.log(error);
          });
    }

    editSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post('/UpdateFavArtists', {
            
              dynamicList: this.state.dynamicList
            
          })
          .then(function (response) {
            console.log("Response" + response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    addListItem(itemToAdd){
      let currentList = this.state.dynamicList;
      currentList.push(itemToAdd);
      this.setState({dynamicList : currentList});
    }
    removeListItem(itemToRemove){
      let currentList = this.state.dynamicList;
      currentList.splice(itemToRemove, 1);
      this.setState({dynamicList : currentList});
    }
    render(){
      return(
        <div className="component-wrapper">
        <form  onSubmit={this.editSubmit}>
          <h1>Artists</h1>
          <DynamicList listItems={this.state.dynamicList} removeItem={this.removeListItem} />
          <InputBox addItem={this.addListItem} />
          <button type="submit" className="FormField__Button mr-20">Save</button>
        </form>
        </div>
      );
    }
  }
  
  class DynamicList extends React.Component {
    render(){
      return (
        <ul id="unorderedList">
          {
            Object.keys(this.props.listItems).map( (index) => {
              return (
                <li id="listElements"key={index} onClick={ () => this.props.removeItem(index) } name={index}>{this.props.listItems[index]}</li>
              );
            })
          }
        </ul>
      );
    }
  }
  
  class InputBox extends React.Component {
    formSubmit(e){
      e.preventDefault();    
      let itemToAdd = this.refs.item.value;
      if(itemToAdd != ''){
        this.props.addItem(itemToAdd);
        this.refs.item.value = '';
      }
    }

    render(){
      return (
        <div>
        <form ref="itemForm" onSubmit={e => this.formSubmit(e)}>
          <input type="text" id="item" placeholder="Enter an artist..." ref="item"/><br />
          <button type="submit" className="FormField__Button mr-20">Add Item</button>
        </form>
       </div>
      );
    }
  }

export default withRouter(prefs)