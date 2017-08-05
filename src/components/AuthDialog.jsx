import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, Input, Divider, Button, Form, Icon } from 'semantic-ui-react'

class CreateUserDialog extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    this.props.submission(this.state);
    event.preventDefault();
  }
  
  render() {
    return (
      <Card fluid color='black'>
        <Card.Content>
          <Card.Header>
            Log into LiveAPI
          </Card.Header>
        </Card.Content>

        <Card.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Address</label>
              <Input fluid icon='external' iconPosition='left' placeholder='Address' name='address' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <Input fluid icon='add user' iconPosition='left' placeholder='Username' name='username' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input fluid icon='lock' iconPosition='left' placeholder='Password' name='password' onChange={this.handleChange} />
            </Form.Field>
            <Divider />
            <button type='submit'>Register</button>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

export default CreateUserDialog;