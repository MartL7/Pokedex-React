import React from 'react';
import { App } from '../App.jsx';
import { Modal } from './Modal.jsx';
import '../App.css'

export const Header = () => {
  return (
    <main className="main">
      <div className="Container-main">
        <Modal />

        <div className="container">
          <div className="row mt-5">
             <App />
          </div>
        </div>
      </div>
    </main>
  );
};

