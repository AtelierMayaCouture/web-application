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
    x.open('POST', 'https://contact.ateliermayacouture.com/contact', true);
    x.setRequestHeader('Content-type', 'application/json');

    x.send(JSON.stringify(this.state.data));
  }

  validate = (data) => {
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
            <form className="form contact-form" onSubmit={this.handleSubmit}>
              <div className="clearfix">
                <div className="cf-left-col">
                  {/* Name */}
                  <Input
                    type="text" name="name" id="name" placeholder="Nom" required
                    value={this.state.data.name} onChange={this.handleChange}
                  />
                  {/* Email */}
                  <Input
                    type="email" name="email" id="email" placeholder="Email" required
                    value={this.state.data.email} onChange={this.handleChange}
                  />
                  {/* Phone */}
                  <Input
                    type="phone" name="phone" id="phone" placeholder="Téléphone" required
                    value={this.state.data.phone} onChange={this.handleChange}
                  />
                  <div style={{ marginBottom: 9 }}>
                    <ReCAPTCHA
                      ref="recaptcha"
                      sitekey="6LdPpRsTAAAAALi5zVtQRjR0KhK62uCsBW2FDxS5"
                      onChange={this.GRChange}
                    />
                  </div>
                </div>

                <div className="cf-right-col">

                  {/* Message */}
                  <div className="form-group">
                    <textarea
                      name="message" id="message" className="input-md round form-control" style={{ height: 214 }} placeholder="Message"
                      value={this.state.data.message} onChange={this.handleChange}
                    ></textarea>
                  </div>

                </div>
              </div>

              <div className="clearfix">
                <div className="cf-left-col">

                  {/* Tip */}
                  <div className="form-tip pt-20">
                    <i className="fa fa-info-circle"></i> Tous les champs sont requis
                    </div>

                </div>

                <div className="cf-right-col">

                  {/* Send Button */}
                  <div className="align-right pt-10">
                    {this.state.error && <p style={{ color: '#F44336' }}>{this.state.error}</p>}
                    {this.state.info &&
                      <p>
                        {this.state.info}
                      </p>
                    }
                    <button style={{ width: '100%' }} className="submit_btn btn btn-mod btn-medium btn-round">
                      Envoyer le message
                    </button>
                  </div>

                </div>
              </div>
              <div id="result"></div>
            </form>
          </div>
        </div>
      </span>
    )
  }
}

export default ContactForm;
