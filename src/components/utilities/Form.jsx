import React, { useState } from 'react';
import Pera from './Pera';

const Form = ({ className = '', logo = false, animation }) => {
  const contactFormFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Email",
    },
    {
      name: "phone",
      label: "Mobile Number",
      type: "tel",
      required: true,
      placeholder: "Mobile No.",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      placeholder: "Message",
      rows: 1,
    },
  ];

  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  };

  const BASE_URL = "https://livinterio.com/";

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch(`${BASE_URL}api/enquiry`, {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData(initialFormData);
      } else {
        alert('Failed to send message: ' + data.message);
      }
    } catch (err) {
      alert('An error occurred: ' + err.message);
    }
  };

  const renderField = (field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name],
      onChange: handleChange,
      className:
        "text-[var(--text-primary)] placeholder-[var(--text-primary)] text-[12px] p-[10px] mb-[10px] lg:mb-[25px] tracking-[2px] uppercase font-[500] mt-1 block w-full border-b border-[var(--text-primary)] outline-none focus:border-[var(--text-primary)] focus:ring-[var(--text-primary)]",
      required: field.required ?? true,
      placeholder: field.placeholder,
      ...field.inputProps,
    };

    switch (field.type) {
      case 'textarea':
        return <textarea {...commonProps} rows={field.rows || 4} />;
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return <input type={field.type || 'text'} {...commonProps} />;
    }
  };

  return (
    <div
      data-aos={animation}
      className={`max-w-[500px] mr-auto w-full p-[30px] 2xl:p-[40px] bg-[var(--background-secondary)] rounded-lg ${className}`}
    >
      {logo && (
        <div className="w-fit mb-[10px] mx-auto">
          <img
            src="/assets/images/logo-black.webp"
            alt="logo"
            width={200}
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {contactFormFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="hidden block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {renderField(field)}
          </div>
        ))}
        <div className="flex items-start gap-2 text-[12px]">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-[3px]"
          />
          <label htmlFor="consent" className="leading-snug cursor-pointer">
            <Pera className="!text-[9px] text-start !leading-[15px]">
              I authorize company representatives to Call, SMS, Email or
              WhatsApp me about its products and offers. This consent overrides
              any registration for DNC/NDNC.
            </Pera>
          </label>
        </div>
        <button
          type="submit"
          className="w-fit border border-[var(--text-primary)] md:w-[auto] w-[100%] hover:border-[var(--text-primary)] uppercase text-[12px] tracking-[4px] bg-[var(--text-primary)] hover:bg-transparent text-white hover:text-[var(--text-primary)] py-[15px] px-[34px] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
