import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error.error.message);
    return (
        <div className='w-25 m-auto mt-5'>
            <div className="card text-center" >
  <img  src="https://www.kindpng.com/picc/m/255-2550104_404-error-page-png-transparent-png.png" className="card-img-top img-fluid" alt="..."/>
  <div className="card-body text-center">
    <p className="card-text">
        <h5>Page Not Found {error?.status}</h5>
        {error?.error?.message}
    </p>
    <Link to='/' className='btn btn-primary'>Go Back</Link>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;