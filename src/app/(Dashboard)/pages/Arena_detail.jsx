import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Arena_detail() {
  const router = useRouter();

  const provinceCities = {
    Punjab: ['Lahore', 'Multan', 'Faisalabad', 'Rawalpindi'],
    Sindh: ['Karachi', 'Hyderabad', 'Sukkur'],
    KPK: ['Peshawar', 'Abbottabad', 'Mardan']
  };

  // Personal info states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const [cityOptions, setCityOptions] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  // Arena detail states
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeError, setTimeError] = useState('');
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState('');
  const [formError, setFormError] = useState('');

  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [price, setPrice] = useState('');

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setCityOptions(provinceCities[selectedProvince] || []);
    setCity('');
    setFormError('');
  };

  const handleCityChange = (e) => {
    if (!province) {
      setFormError('Please select a province first.');
      return;
    }
    setCity(e.target.value);
    setFormError('');
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategoriesSelected([...categoriesSelected, value]);
    } else {
      setCategoriesSelected(categoriesSelected.filter((cat) => cat !== value));
    }
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    setTimeError('');
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    setTimeError('');
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length < 1 || files.length > 6) {
      setImageError('Please upload between 1 and 6 images.');
      setImages([]);
      setImagePreviews([]);
      return;
    }

    setImageError('');
    setImages(files);
  };

  useEffect(() => {
    if (images.length < 1) {
      setImagePreviews([]);
      return;
    }

    const newImagePreviews = images.map((image) => URL.createObjectURL(image));
    setImagePreviews(newImagePreviews);

    return () => {
      newImagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove strict validation to allow submission
    // Basic check for required fields only
    if (!firstName || !lastName || !username) {
      setFormError('Please fill all required personal info fields.');
      return;
    }

    try {
      // Upload images if any
      let imageUrls = [];
      if (images.length > 0) {
        const uploadPromises = images.map(async (image) => {
          const imageFormData = new FormData();
          // API expects field name 'files' for multi-file uploads
          imageFormData.append('files', image);

          const uploadResponse = await fetch('/api/uploads/arena', {
            method: 'POST',
            body: imageFormData,
          });

          if (!uploadResponse.ok) {
            throw new Error('Image upload failed');
          }

          const uploadData = await uploadResponse.json();
          // uploads route returns { urls: [ ... ] }
          return (uploadData.urls && uploadData.urls[0]) || null;
        });

        imageUrls = await Promise.all(uploadPromises);
      }

      const data = {
        firstName,
        lastName,
        username,
        userId,
        province,
        city,
        arenaName: e.target.elements.arenaName.value,
        phoneNumber: e.target.elements.phoneNumber.value,
        address: e.target.elements.address.value,
        length: Number(length) || 0,
        width: Number(width) || 0,
        height: Number(height) || 0,
        price: Number(price) || 0,
        openingTime: startTime,
        closingTime: endTime,
        description: e.target.elements.arenaDescription.value,
        categories: categoriesSelected,
        arenaImageUrls: imageUrls
      };

      const response = await fetch('/api/arena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData._id) {
          localStorage.setItem('arenaDetailsId', responseData._id);
        }
          // Delay navigation to allow user to see success
        setTimeout(() => {
          router.push('/dashboard');
        }, 500);
      } else {
        const data = await response.json();
        setFormError(data.message || 'Failed to submit arena details.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('Error submitting form. Please try again.');
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Arena Owner Details</h1>
      <form onSubmit={handleSubmit} noValidate style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
        <h3>Personal Information</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <label htmlFor="province" className="form-label">Province</label>
            <select className="form-select" id="province" name="province" value={province} onChange={handleProvinceChange} required>
              <option value="">-- Select Province --</option>
              {Object.keys(provinceCities).map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <select className="form-select" id="city" name="city" value={city} onChange={handleCityChange} disabled={!province} required>
              <option value="">-- Select City --</option>
              {cityOptions.map((cityName) => (
                <option key={cityName} value={cityName}>{cityName}</option>
              ))}
            </select>
          </div>
        </div>

        <h3 className="mt-4">Arena Details</h3>

        <div className="mb-3">
          <label htmlFor="arenaImages" className="form-label">Upload Arena Pictures (1–6)</label>
          <input
            type="file"
            className="form-control"
            id="arenaImages"
            name="arenaImages"
            accept="image/*"
            multiple
            required
            onChange={handleImageChange}
          />
          {imageError && <p className="text-danger mt-1">{imageError}</p>}
          {imagePreviews.length > 0 && (
            <div className="d-flex flex-wrap gap-3 mt-3">
              {imagePreviews.map((src, index) => (
                <div
                  className="position-relative border rounded"
                  key={index}
                  style={{ width: '120px', height: '120px', overflow: 'hidden', flexShrink: 0 }}
                >
                  <img
                    src={src}
                    alt={`preview-${index}`}
                    className="img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="btn btn-sm btn-danger position-absolute"
                    style={{ top: '5px', right: '5px', borderRadius: '50%', padding: '2px 6px', fontSize: '14px', lineHeight: '1' }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="arenaName" className="form-label">Arena name</label>
            <input type="text" className="form-control" id="arenaName" name="arenaName" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" required />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Categories</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="categoryCricket"
              value="cricket"
              onChange={handleCategoryChange}
              checked={categoriesSelected.includes('cricket')}
            />
            <label className="form-check-label" htmlFor="categoryCricket">Cricket</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="categoryFootball"
              value="football"
              onChange={handleCategoryChange}
              checked={categoriesSelected.includes('football')}
            />
            <label className="form-check-label" htmlFor="categoryFootball">Football</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="categoryBadminton"
              value="badminton"
              onChange={handleCategoryChange}
              checked={categoriesSelected.includes('badminton')}
            />
            <label className="form-check-label" htmlFor="categoryBadminton">Badminton</label>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-2">
            <label htmlFor="length" className="form-label">Length (feet)</label>
            <input
              type="number"
              className="form-control"
              id="length"
              name="length"
              required
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="width" className="form-label">Width (feet)</label>
            <input
              type="number"
              className="form-control"
              id="width"
              name="width"
              required
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="height" className="form-label">Height (feet)</label>
            <input
              type="number"
              className="form-control"
              id="height"
              name="height"
              required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Set per hour price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <label htmlFor="openingTime" className="form-label">Opening Time</label>
            <input
              type="time"
              className="form-control"
              id="openingTime"
              name="openingTime"
              required
              value={startTime}
              onChange={handleStartTimeChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="closingTime" className="form-label">Closing Time</label>
            <input
              type="time"
              className="form-control"
              id="closingTime"
              name="closingTime"
              required
              value={endTime}
              onChange={handleEndTimeChange}
            />
          </div>
        </div>

        {timeError && <p className="text-danger mt-2">{timeError}</p>}

        <div className="mb-3 mt-3">
          <label htmlFor="arenaDescription" className="form-label">Arena Description</label>
          <textarea
            className="form-control"
            id="arenaDescription"
            name="arenaDescription"
            rows="4"
            placeholder="Enter detailed description about the arena"
            required
          ></textarea>
        </div>

        {formError && <p className="text-danger">{formError}</p>}

        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}
