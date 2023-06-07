import React from 'react'
import { Link, useRouteError,  } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='m-auto'>
      <div className='m-auto flex justify-center align-middle'>
      <img className='w-1/2 ' src={"https://i.ibb.co/Cw0sWbP/3814348.jpg"} alt="" />
        
      </div>
      <div className=' text-center'>
          <Link to='/' className='btn btn-success mb-8'>
            Back to homepage
          </Link>
        </div>
    </section>
  )
}

export default ErrorPage;