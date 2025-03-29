import React, { useState, useRef } from "react";

const CameraOrUpload = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false); 
  const videoRef = useRef(null); 
  const canvasRef = useRef(null); 

  const startCamera = async () => {
    try {
      setShowCamera(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing the camera:", error);
      alert("Failed to access the camera.");
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL("image/png");
    setImage(dataURL); 
    setShowCamera(false); 
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload or capture an image first!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: image }), 
      });

      const data = await response.json();
      setResult(data.message || JSON.stringify(data));
    } catch (error) {
      console.error("Error while sending image to the model:", error);
      alert("An error occurred while processing the image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>AI Model Image Inference</h1>

      {showCamera && (
        <div style={styles.cameraContainer}>
          <video ref={videoRef} autoPlay style={styles.videoPreview}></video>
          <button onClick={captureImage} style={styles.captureButton}>
            Capture Image
          </button>
        </div>
      )}

      <div style={styles.preview}>
        {image ? (
          <img src={image} alt="Preview" style={styles.imagePreview} />
        ) : (
          <p style={styles.placeholderText}>Image preview will appear here.</p>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        style={styles.fileInput}
      />

      <button onClick={startCamera} style={styles.button}>
        Open Camera
      </button>

      <button onClick={handleSubmit} style={styles.button} disabled={isLoading}>
        {isLoading ? "Processing..." : "Submit to AI Model"}
      </button>

      {result && (
        <div style={styles.resultBox}>
          <h3 style={styles.resultHeading}>Result:</h3>
          <p style={styles.resultText}>{result}</p>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  cameraContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  videoPreview: {
    width: "300px",
    height: "300px",
    border: "2px solid #ccc",
    borderRadius: "10px",
  },
  captureButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
  preview: {
    width: "300px",
    height: "300px",
    border: "2px dashed #ccc",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    backgroundColor: "#fff",
  },
  imagePreview: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
  },
  placeholderText: {
    fontSize: "14px",
    color: "#aaa",
  },
  fileInput: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "14px",
    cursor: "pointer",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    width: "300px",
  },
  resultBox: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  resultHeading: {
    fontSize: "18px",
    color: "#333",
  },
  resultText: {
    fontSize: "16px",
    color: "#666",
  },
};

export default CameraOrUpload;