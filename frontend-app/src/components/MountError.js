import React from 'react';

export default function MountError() {
  return (
    <div className="mount-error">
      <h4 className="mount-error__heading">UPS!</h4>
      <p className="mount-error__par">You probably didn't authorize with valid access token or your token expired.</p>
      <p className="mount-error__par">Make sure that both react development server and backend-app server are running and go to <a className="login__link" href="http://localhost:8888/login/">localhost:8888/login/</a>
      </p>
    </div>
  )
}
