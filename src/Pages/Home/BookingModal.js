import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebaseinit';

const BookingModal = () => {
      const [user] = useAuthState(auth)
      return (
        <div>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label
                for="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="font-bold text-primary text-lg">
                {/* Booking for: {name} */}
              </h3>
              <form
            //     onSubmit={handelBooking}
                className="grid grid-cols-1 gap-3 mt-3 justify-items-center"
              >
                
                
                <input
                  type="text"
                  disabled
                  value={user?.displayName}
                  name="name"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="email"
                  disabled
                  value={user?.email}
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="number"
                  placeholder="Type Phone Number"
                  name="phone"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-secondary input-bordered w-full max-w-xs"
                />
              </form>
            </div>
          </div>
        </div>
      );
};

export default BookingModal;