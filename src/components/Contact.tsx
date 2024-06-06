import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
    <div className="relative py-12">
      <div className="container mx-auto px-4">


        <div className=" border-b border-gray-700 bg-gray-800 text-white shadow-2xl text-left mx-48 mt-20 rounded-lg p-8 flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 mr-16">
            <h2 className="text-2xl font-semibold mb-4">Contacte Moi</h2>
            <p className="mb-4">Feel free to contact me</p>
            <form className='text-black'>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-purple-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-purple-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-purple-600"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-purple-600"
                ></textarea>
              </div>
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-orange-400"> Send</button>
            </form>
          </div>


          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-semibold mb-4">Address</h2>
            <p className="mb-4">12,Lot saada, Marrakech, Maroc</p>
            <h2 className="text-2xl font-semibold mb-4">Phone</h2>
            <p className="mb-4">+212 650 14 25 31</p>
            <h2 className="text-2xl font-semibold mb-4">Email</h2>
            <p className="mb-4">houssamrouga@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
