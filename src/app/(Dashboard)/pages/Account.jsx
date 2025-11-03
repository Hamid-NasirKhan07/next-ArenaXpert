import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Account() {
  const router = useRouter();

  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [cityOptions, setCityOptions] = useState([]);

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeError, setTimeError] = useState('');
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState('');
  const [formError, setFormError] = useState('');
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [price, setPrice] = useState('');

  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const provinceCities = {
    Punjab: ['Lahore', 'Multan', 'Faisalabad', 'Rawalpindi'],
    Sindh: ['Karachi', 'Hyderabad', 'Sukkur'],
    KPK: ['Peshawar', 'Abbottabad', 'Mardan']
  };

  useEffect(() => {
    // Fetch arena details ID from backend using userId or username, then fetch arena details
    async function fetchData() {
      const storedUserId = localStorage.getItem('userId');
      if (!storedUserId) {
        setFormError('User ID not found in local storage.');
        setLoading(false);
        return;
      }
      try {
        // Fetch arena details ID by userId
  const idResponse = await fetch(`/api/arena/get-arena-id/${encodeURIComponent(storedUserId)}`);
        if (!idResponse.ok) {
          setFormError('Failed to fetch arena details ID.');
          setLoading(false);
          return;
        }
        const idData = await idResponse.json();
        const arenaDetailsId = idData.arenaDetailsId;
        if (!arenaDetailsId) {
          setFormError('Arena details ID not found for user.');
          setLoading(false);
          return;
        }
        // Fetch arena details by arenaDetailsId
  const response = await fetch(`/api/arena/owner-info/${encodeURIComponent(arenaDetailsId)}`);
        if (response.ok) {
          const data = await response.json();
          setFirstName(data.firstName || '');
          setLastName(data.lastName || '');
          setUsername(data.username || '');
          setProvince(data.province || '');
          setCity(data.city || '');
          setCityOptions(provinceCities[data.province] || []);
          setStartTime(data.openingTime || '');
          setEndTime(data.closingTime || '');
          setLength(data.length || '');
          setWidth(data.width || '');
          setHeight(data.height || '');
          setPrice(data.price || '');
          setCategoriesSelected(data.categories || []);
          setImages([]); // Images will be handled separately
          setImagePreviews(data.arenaImageUrls || []);
          setLoading(false);
        } else {
          setFormError('Failed to fetch owner info.');
          setLoading(false);
        }
      } catch {
        setFormError('Error fetching owner info.');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setCityOptions(provinceCities[selectedProvince] || []);
    setCity('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
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
      return;
    }

    const newImagePreviews = images.map((image) => URL.createObjectURL(image));
    setImagePreviews(newImagePreviews);

    return () => {
      newImagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    const newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !username || !province || !city) {
      setFormError('Please fill all personal info fields.');
      return;
    }

    if (startTime >= endTime) {
      setTimeError('Start time must be earlier than end time.');
      return;
    }

    if (images.length > 6) {
      setImageError('Please upload up to 6 images.');
      return;
    }

    if (!length || isNaN(Number(length))) {
      setFormError('Please enter a valid length.');
      return;
    }
    if (!width || isNaN(Number(width))) {
      setFormError('Please enter a valid width.');
      return;
    }
    if (!height || isNaN(Number(height))) {
      setFormError('Please enter a valid height.');
      return;
    }
    if (!price || isNaN(Number(price))) {
      setFormError('Please enter a valid price.');
      return;
    }

    try {
      let imageUrls = imagePreviews;
      if (images.length > 0) {
        // Upload new images
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
          return (uploadData.urls && uploadData.urls[0]) || null;
        });

        imageUrls = await Promise.all(uploadPromises);
      }

      const data = {
        firstName,
        lastName,
        username,
        province,
        city,
        length: Number(length),
        width: Number(width),
        height: Number(height),
        price: Number(price),
        openingTime: startTime,
        closingTime: endTime,
        description: e.target.elements.arenaDescription.value,
        categories: categoriesSelected,
        arenaImageUrls: imageUrls,
        arenaName: e.target.elements.arenaName.value,
        phoneNumber: e.target.elements.phoneNumber.value,
        address: e.target.elements.address.value,
      };

      const response = await fetch('/api/arena', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Arena details updated successfully.');
  router.push('/dashboard');
      } else {
        const data = await response.json();
        setFormError(data.message || 'Failed to update arena details.');
      }
    } catch {
      setFormError('Error updating form. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Edit Arena Owner Details</h1>
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
            <input type="text" className="form-control" id="arenaName" name="arenaName" defaultValue={''} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" defaultValue={''} required />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" defaultValue={''} required />
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
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="width" className="form-label">Width (feet)</label>
            <input
              type="number"
              className="form-control"
              id="width"
              name="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="height" className="form-label">Height (feet)</label>
            <input
              type="number"
              className="form-control"
              id="height"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Set per hour price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
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
              value={startTime}
              onChange={handleStartTimeChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="closingTime" className="form-label">Closing Time</label>
            <input
              type="time"
              className="form-control"
              id="closingTime"
              name="closingTime"
              value={endTime}
              onChange={handleEndTimeChange}
              required
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
            value={''}
            onChange={() => {}}
            required
          ></textarea>
        </div>

        {formError && <p className="text-danger">{formError}</p>}

        <button type="submit" className="btn btn-primary mt-3">Update Arena Details</button>
      </form>
    </div>
  );
}
