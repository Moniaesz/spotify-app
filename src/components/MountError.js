import React from 'react';

export default function MountError() {
  return (
    <div className="mount-error">
      <h4 className="mount-error__heading">UPS!</h4>
      <p className="mount-error__par">You probably didn't authorize with valid access token or your token expired.</p>
      <p className="mount-error__par">Restart react development server and albums backend server and go to localhost:8888/login/</p>
    </div>
  )
}
