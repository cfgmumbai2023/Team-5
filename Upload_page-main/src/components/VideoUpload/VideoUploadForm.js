import React, { useState } from 'react';
import axios from 'axios';
import './VideoUploadForm.css'

const VideoUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [description, setDescription] = useState('');

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setSelectedFile(droppedFile);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);
      // formData.append('topics', topics);
      // formData.append('tags', tags);

      axios
        .post('your-upload-url', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(progress);
          },
        })
        .then((response) => {
          setUploadStatus('Upload completed!');
        })
        .catch((error) => {
          setUploadStatus('Upload failed!');
        });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="upload-form">
      <h1 className="form-title">Video Upload</h1>
      <div className="file-input-container" onDrop={handleDrop} onDragOver={handleDragOver}>
        <input type="file" accept="video/*" onChange={handleFileSelect} className="file-input" id="file-input" />
        <label htmlFor="file-input" className="file-input-label">
          <span className="file-input-label-text">Select Video</span>
        </label>
        <p className="or">or</p>
        <p className="drag-drop-text">Drag and drop a video file here</p>
      </div>
      <div className="dropdown-container">

        <div className='class-select-dropdown' style={{margin: "20px 10px 10px 20px"}}>
          <label> Class </label>
          <select value={selectedOption1} onChange={handleOption1Change}>
          <option value="">-- Select Class --</option>
          <option value="option1">Class 1</option>
          <option value="option2">Class 2</option>
          <option value="option3">Class 3</option>
        </select>
        </div>

        <div className='language-select-dropdown' style={{margin: "20px 10px 10px 20px"}}>
          <label> language </label>
          <select value={selectedOption2} onChange={handleOption2Change}>
            <option value="">-- Select Language --</option>
            <option value="option1">English</option>
            <option value="option2">हिंदी</option>
            <option value="option3">ગુજરાતી</option>
          </select>
          </div>

        <div className='topic' style={{margin: "20px 10px 10px 20px"}}>
          <label> Topic </label>
          <input type="text" value={inputValue} onChange={handleInputChange} />

        </div>

      <div className="description-container" style={{margin: "20px 10px 10px 20px"}}>
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} />
      </div>

      </div>

      
      <button onClick={handleUpload} className="upload-button">
        Upload
      </button>
      {uploadProgress > 0 && <p className="progress">Upload Progress: {uploadProgress}%</p>}
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
};

export default VideoUploadForm;
