import React, { useState } from 'react';
import Icon from '../atoms/SvgIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Tu nombre completo"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="¿En qué puedo ayudarte?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input resize-none"
          placeholder="Cuéntame sobre tu proyecto o idea..."
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Icon name="Loading" size={20} className="animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Icon name="Exit" size={20} />
              <span>Enviar Mensaje</span>
            </>
          )}
        </button>

        {/* Status Message */}
        {submitStatus && (
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            submitStatus === 'success' 
              ? 'bg-cyan-500 bg-opacity-20 text-cyan-300 border border-cyan-500 border-opacity-30'
              : 'bg-red-500 bg-opacity-20 text-red-400 border border-red-500 border-opacity-30'
          }`}>
            <Icon 
              name={submitStatus === 'success' ? 'CheckMark' : 'Close'} 
              size={16} 
            />
            <span className="text-sm">
              {submitStatus === 'success' 
                ? '¡Mensaje enviado con éxito!' 
                : 'Error al enviar. Inténtalo de nuevo.'
              }
            </span>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
