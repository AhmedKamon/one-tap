import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import demo from '../utilites/images/damo.svg';
import Image from 'next/image';
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';
import styles from '../styles/media.module.css';

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image:
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  dotsOptions: {
    color: '#4267b2',
    type: 'rounded',
  },
  imageOptions: {
    crossOrigin: 'anonymous',
    margin: 20,
  },
});
const Media = () => {
  const [url, setUrl] = useState('https://qr-code-styling.com');
  const [fileExt, setFileExt] = useState('png');
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          <Image
            src={demo}
            alt="working"
            title="working"
            height={640}
            width={640}
            layout="responsive"
          />
          <div style={styles.inputWrapper}>
            <input value={url} onChange={onUrlChange} style={styles.inputBox} />
            <select onChange={onExtensionChange} value={fileExt}>
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WEBP</option>
            </select>
            <button onClick={onDownloadClick}>Download</button>
          </div>
          <div ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default Media;
