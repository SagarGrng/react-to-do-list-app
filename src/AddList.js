import React, {Component} from 'react'

class AddNewList extends Component{
  state = {
    title:""
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.value === ""){
      console.log("Cannot be blank")
    }else{
      this.props.newList(this.state)
      this.setState({
        title:""
      })
    }
  }
  handleChange = (e) => {
      this.setState({
        title: e.target.value
      })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="flow-text">Add new ToDo List</label>
          <input type="text" onChange={this.handleChange} value={this.state.title}></input>
        </form>
      </div>
    )
  }
}

export default AddNewList
