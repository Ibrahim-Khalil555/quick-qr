import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./QRGenerator.module.css";

const QRGenerator = () => {
  const [input, setInput] = useState("");
  const [qrText, setQrText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!input) return;

    setLoading(true);
    setQrText("");

    setTimeout(() => {
      setQrText(input);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>QR Code Generator</h2>

      <div className={styles.inputCard}>
        <input
          type="text"
          placeholder="Enter text or URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleGenerate} className={styles.button}>
          Generate
        </button>
      </div>

      {loading && <div className={styles.loader}></div>}

      {qrText && !loading && (
        <div className={styles.qrCard}>
          <QRCodeCanvas value={qrText} size={200} />
          <p className={styles.qrText}>Scan this QR code</p>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
