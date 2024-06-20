import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This is the best portfolio I have ever seen!'
    },
    {
      name: 'Jane Smith',
      feedback: 'A true showcase of exceptional skills and talent.'
    }
  ];

  return (
    <section id="testimonials" className="p-8 bg-gray-100">
      <h2 className="text-4xl mb-4 font-bold">Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg mb-2">{testimonial.feedback}</p>
            <p className="text-sm text-gray-600">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
