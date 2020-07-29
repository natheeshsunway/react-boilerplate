import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import Icon from './common/Icon';

import styles from '~components/styles/Footer.scss';

const cx = classnames.bind(styles);

const Footer = () => {
  return (
    <footer className="footer has-text-grey-light">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong className="has-text-grey-light">
              <Icon icon="cloud"/>
              &nbsp;react-boilerplate
            </strong> by <a href="https://github.com/mikechabot" target="_blank" rel="noopener noreferrer">Mike
            Chabot</a>.
            <br/>
            The <a href="https://github.com/mikechabot/react-boilerplate" target="_blank" rel="noopener noreferrer">source
            code</a> is licensed under <a
              href="https://github.com/mikechabot/react-boilerplate/blob/master/LICENSE">MIT</a>.
          </p>
          <div className={cx('footer--buttons')}>
            <GithubButton
              label="Star"
              icon="octicon-star"
              href="mikechabot/react-boilerplate"
              ariaLabel="Star mikechabot/react-boilerplate on GitHub"
            />
            <GithubButton
              label="Fork"
              icon="octicon-repo-forked"
              href="mikechabot/react-boilerplate/fork"
              ariaLabel="Fork mikechabot/react-boilerplate on GitHub"
            />
            <GithubButton
              label="Watch"
              icon="octicon-eye"
              href="mikechabot/react-boilerplate/subscription"
              ariaLabel="Watch mikechabot/react-boilerplate on GitHub"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

const GithubButton = ({
  label,
  icon,
  href,
  ariaLabel
}) => {
  return (
    <div style={{ margin: 5 }}>
      <a className="github-button"
        href={`https://github.com/${href}`}
        data-icon={icon}
        data-size="large"
        data-show-count={true}
        aria-label={ariaLabel}>
        {label}
      </a>
    </div>
  );
};

GithubButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

export default Footer;
