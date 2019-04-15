import React, { Component } from 'react';

import './Contact.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class ContactPage extends Component {
  render() {
    return (
      <div>
        <section className="contact-page">
          <div>
            <h2>Features And Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique possimus inventore velit alias facilis asperiores
              accusantium, fuga iusto repellat quia veritatis facere culpa
              officiis consectetur dolorum, molestias magni distinctio iste?
            </p>
          </div>
          <hr />

          <ul className="grid">
            <li>
              <i className="fa fa-camera-retro" />
              <h4>Photography</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id felis et ipsum bibendum ultrices vitae pulvinar velit.
              </p>
            </li>
            <li>
              <i className="fa fa-cubes" />
              <h4>Web Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id felis et ipsum bibendum ultrices vitae pulvinar velit.
              </p>
            </li>
            <li>
              <i className="fa fa-newspaper-o" />
              <h4>Content Editing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id felis et ipsum bibendum ultrices vitae pulvinar velit.
              </p>
            </li>
          </ul>
        </section>

        <section className="reviews">
          <h2 className="title">What others say:</h2>

          <p className="quote">
            Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
          <p className="author">— Patrick Farrell</p>

          <p className="quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed
            aliquam dictum sapien, id sagittis augue malesuada eu.
          </p>
          <p className="author">— George Smith</p>

          <p className="quote">
            Donec commodo dolor augue, vitae faucibus tortor tincidunt in.
            Aliquam vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.
          </p>
          <p className="author">— Kevin Blake</p>
        </section>

        <section class="contact">
          <h2 class="title">Join our newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed
            aliquam dictum sapien, id sagittis augue malesuada eu.
          </p>
          <hr />

          <form>
            <input type="email" placeholder="Email" />
            <a href="/" class="btn">
              Subscribe now
            </a>
          </form>
        </section>
      </div>
    );
  }
}

export default ContactPage;
