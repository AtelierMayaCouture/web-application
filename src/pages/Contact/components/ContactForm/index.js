import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

// global components
import Input from '../../../../../src/components/Input';

const REGEX_EMAIL = /^[^@]+@[^\.]+\.[A-z]+/g;

class ContactForm extends React.Component {

  state = {
    editable: true,
    data: { name: '', email: '', phone: '', message: '', recaptcha: '' },
    error: '',
    info: '',
  };

  sendFormData = () => {
    /* create request */
    var x = new XMLHttpRequest();
    var _this = this;

    /* set the callback function */
    x.onreadystatechange = function () {
      if (x.readyState === 4) {
        var response = JSON.parse(x.responseText);

        if (x.status === 200) {
          _this.setState({ info: 'Message envoyé !' });
        }
        else {
          _this.setState({ error: response.msg });
        }
      }
    }
    /* send the request */
    x.open('POST', 'https://europe-west2-k8s-aksels.cloudfunctions.net/amcContact', true);
    x.setRequestHeader('Content-type', 'application/json');

    x.send(JSON.stringify(this.state.data));
  }

  validate = (data) => {
    // foo
    if (!this.state.data.recaptcha) {
      this.setState({
        editable: true,
        error: 'Cochez le captcha SVP',
      });
      return false;
    }
    const testRegex = REGEX_EMAIL.test(this.state.data.email);
    if (testRegex === false) {
      console.log('going in defuq');
      this.setState({
        editable: true,
        error: 'Cet email n\'est pas valide.?',
      });
      return false;
    }
    if (this.state.data.name.length < 3) {
      this.setState({
        editable: true,
        error: 'Nom: au minimum 3 caractères.',
      });
      return false;
    }
    if (this.state.data.message.length < 4) {
      this.setState({
        editable: true,
        error: 'Message: au minimum 4 caractères',
      });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    this.setState({ editable: false, error: '' });
    event.preventDefault();

    if (this.validate(this.state.data)) {
      this.setState({ info: 'En cours d\'envoi...', error: '' });
      this.sendFormData();
    }
  }

  handleChange = (event) => {
    if (this.state.editable) {
      this.setState(
        { data: { ...this.state.data, [event.target.name]: event.target.value } }
      );
    }
  }

  GRChange = (value) => {
    this.setState(
      { data: { ...this.state.data, recaptcha: value } }
    );
  }

  render() {
    return (
      <span>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
              <div className="clearfix">
                <div className="cf-left-col">
                   <a href="mailto:mayacouture@hotmail.fr">

                  <button className="btn btn-mod btn-medium btn-round">Cliquez pour m'envoyer un mail (mayacouture@hotmail.fr)</button>
                  </a>
                </div>

                <br />
                <br />
                <br />
                <br />
              <div className="clearfix"></div>
                <div className="cf-right-col">
                           <a href="tel:+33623571253">
                  <button className=" btn btn-mod btn-medium btn-round">Cliquez pour m'appeler (06 23 57 12 53)</button>
                  </a>
                </div>
              </div>

              <div className="clearfix">
                <div className="cf-left-col">

                </div>

                <div className="cf-right-col">

                  {/* Send Button */}
                </div>
              </div>
              <div id="result"></div>
          </div>
        </div>
      </span>
    )
  }
}

export default ContactForm;
