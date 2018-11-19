import React from 'react';
import './style.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="container ls-footer">
        <div className="ls-left-pad">
          <a href="https://github.com/Terminal/docs.terminal.ink/blob/master/LICENCE">
            CC-BY-SA-4.0
          </a>
          <a href="https://github.com/Terminal/docs.terminal.ink">
            GitHub
          </a>
          <a href="https://discord.gg/8uC6aKZ" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href="https://terminal.ink">
            Terminal.ink
          </a>
        </div>
        <p className="ls-footer-copyright">Copyright 2017 - 2018, Terminal.ink; Discord is a trademark of Discord Inc.</p>
      </footer>
    );
  }
}

export default Footer;