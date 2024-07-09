import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    imageLink: '',
    gender: 'male',
    skills: {
      java: false,
      html: false,
      css: false,
    },
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [name]: checked,
        },
      });
    } else if (name === 'gender') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    handleClear();
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      website: '',
      imageLink: '',
      gender: 'male',
      skills: {
        java: false,
        html: false,
        css: false,
      },
    });
  };

  return (
    <div className="container">
      <h1 className="header">Student Enrollment Form</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Website:</label>
            <input type="text" name="website" value={formData.website} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Image Link:</label>
            <input type="text" name="imageLink" value={formData.imageLink} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <div className="gender-container">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </div>
          </div>
          <div className="form-group">
            <label>Skills:</label>
            <div className="skills-container">
              <input
                type="checkbox"
                name="java"
                checked={formData.skills.java}
                onChange={handleChange}
              />
              Java
              <input
                type="checkbox"
                name="html"
                checked={formData.skills.html}
                onChange={handleChange}
              />
              HTML
              <input
                type="checkbox"
                name="css"
                checked={formData.skills.css}
                onChange={handleChange}
              />
              CSS
            </div>
          </div>
          <div className="buttons-container">
            <button type="submit" className="enroll-btn">Enroll Student</button>
            <button type="button" className="clear-btn" onClick={handleClear}>Clear</button>
          </div>
        </form>
        <div className="student-list">
          <h2>Enrolled Students</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>
                    <p><strong>{student.name}</strong></p>
                    <p>{student.gender}</p>
                    <p>{student.email}</p>
                    <p><a href={student.website} target="_blank" rel="noopener noreferrer">{student.website}</a></p>
                    <p>{Object.keys(student.skills).filter(skill => student.skills[skill]).join(', ')}</p>
                  </td>
                  <td>
                    {student.imageLink ? <img src={student.imageLink} alt="student" /> : <p>No Image</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
