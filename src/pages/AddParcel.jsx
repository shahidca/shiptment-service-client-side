import React, { useState } from "react";

const AddParcel = () => {
  const [parcelType, setParcelType] = useState("document");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="bg-white py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto border rounded-xl shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Add Parcel
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Parcel Type */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Enter your parcel details
            </h3>
            <div className="flex items-center gap-6 mb-4">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <input
                  type="radio"
                  name="parcelType"
                  checked={parcelType === "document"}
                  onChange={() => setParcelType("document")}
                  className="accent-green-600"
                />
                Document
              </label>
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <input
                  type="radio"
                  name="parcelType"
                  checked={parcelType === "non-document"}
                  onChange={() => setParcelType("non-document")}
                  className="accent-green-600"
                />
                Not Document
              </label>
            </div>
          </div>

          {/* Parcel Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Parcel Name
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                placeholder="Parcel Weight (KG)"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Sender & Receiver Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sender Details */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">
                Sender Details
              </h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Sender Name"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Select Pickup Warehouse</option>
                </select>
                <input
                  type="text"
                  placeholder="Sender Contact No"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Select your region</option>
                </select>
                <textarea
                  placeholder="Pickup Instruction"
                  className="w-full border rounded-lg px-4 py-2"
                  rows="2"
                ></textarea>
              </div>
            </div>

            {/* Receiver Details */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">
                Receiver Details
              </h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Select Delivery Warehouse</option>
                </select>
                <input
                  type="text"
                  placeholder="Receiver Contact No"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Receiver Address"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Select your region</option>
                </select>
                <textarea
                  placeholder="Delivery Instruction"
                  className="w-full border rounded-lg px-4 py-2"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Pickup Info */}
          <p className="text-sm text-gray-600 italic">
            * PickUp Time: 4pm - 7pm Approx
          </p>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 cursor-pointer"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddParcel;
