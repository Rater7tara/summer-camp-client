import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    
    const total = cart.reduce((sum, item) => item.price + sum, 0);


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-beige.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className='w-full'>
            <Helmet>
                <title>DancingDream | My Cart</title>
            </Helmet>
              <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">PAY</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    <thead className='bg-slate-900 text-lg text-white rounded-md'>
                        <tr>
                            <th>#</th>
                            <th>Classes</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.dance_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-2xl'>${item.price}</td>
                                <td className="">
                                    <button onClick={() => handleDelete(item)} className="btn bg-white  text-white"><FaTrashAlt className='text-red-600 text-2xl'></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;