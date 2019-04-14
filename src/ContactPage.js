import React, { Component } from 'react';

import './Contact.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class ContactPage extends Component {
  render() {
    return (
      <section className="contact-page">
        <div class="flex-container">
          <div class="flex-item one">Первый</div>
          <div class="flex-item two">Второй</div>
          <div class="flex-item three">Третий</div>
        </div>
      </section>
    );
  }
}

export default ContactPage;