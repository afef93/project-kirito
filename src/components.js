import React from "react";

export function Heading() {
    return (
        <div>
            <h1>React Social Login Buttons</h1>
            <div className="install">
                <pre>npm install react-social-login-buttons</pre>
            </div>
            <div className="install">
                <pre>yarn add react-social-login-buttons</pre>
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <div>
            <p>
        <span className="credits center">
          <span>Made by </span>
          <a
              href="https://github.com/MichalSzorad"
              target="_blank"
              rel="noopener noreferrer"
              className="center"
          >
            <span>@MichalSzorad</span>
          </a>
        </span>
            </p>
        </div>
    );
}
