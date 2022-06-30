import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordList: [],
    searchInput: '',
    isChecked: false,
  }

  render() {
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="image-logo"
          alt="app logo"
        />
        <div className="upper-container">
          <img
            className="password-small-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <div className="form-and-image-container">
            <div className="add-password-container">
              <form className="form-container">
                <h1 className="add-password-heading">Add New Password</h1>
                <div className="form-input-container">
                  <div className="input-container">
                    <div className="input-logo-container">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                        alt="website"
                        className="input-logo-image"
                      />
                    </div>
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter Website"
                    />
                  </div>
                  <div className="input-container">
                    <div className="input-logo-container">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                        alt="username"
                        className="input-logo-image"
                      />
                    </div>
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter UserName"
                    />
                  </div>
                  <div className="input-container">
                    <div className="input-logo-container">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                        alt="password"
                        className="input-logo-image"
                      />
                    </div>
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div className="password-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="large-image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
