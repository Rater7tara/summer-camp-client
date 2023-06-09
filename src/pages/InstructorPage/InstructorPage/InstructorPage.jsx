import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';


const InstructorPage = () => {
    return (
        <div>
            <Helmet>
                <title>DancingDream | Instructors</title>
            </Helmet>
            <Cover></Cover>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default InstructorPage;