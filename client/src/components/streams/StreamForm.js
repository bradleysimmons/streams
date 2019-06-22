import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //controlled element
  renderInput = ({ input, label, meta }) => {
    //syntax here adds all those props to input
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className} >
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="title: " />
        <Field
          name="description"
          component={this.renderInput}
          label="description: "
        />
        <button className="ui button primary">submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "title required";
  }

  if (!formValues.description) {
    errors.description = "description required";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);

