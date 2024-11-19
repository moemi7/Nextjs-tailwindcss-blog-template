import React, { useState } from 'react';
import styles from './widgetcss.module.css'; // Assuming you're using a CSS module

const ReuzenpandaWidget = () => {
  const [iframeVisible, setIframeVisible] = useState(false);

  const toggleIframe = () => {
    setIframeVisible(!iframeVisible);
  };

  return (
    <div className={styles.widgetContainer}>
      <iframe
        id="reuzenpanda-widget-iframe"
        className={`${styles.iframe} ${iframeVisible ? styles.slideIn : styles.slideOut}`}
        src={
          iframeVisible
            ? 'https://configurator-gilt-kappa.vercel.app/widget/telefoonreparatiemobistartelefoonwinkel@gmail.com'
            : undefined
        }
        scrolling="no"
        frameBorder="0"
      ></iframe>
      <button
        id="reuzenpanda-open"
        className={styles.openButton}
        onClick={toggleIframe}
      >
        {iframeVisible ? 'Sluit' : 'Offerte aanvragen'}
      </button>
    </div>
  );
};

export default ReuzenpandaWidget;
