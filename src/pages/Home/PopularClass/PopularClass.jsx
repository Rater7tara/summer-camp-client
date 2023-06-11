import './PopularClass.css';


const PopularClass = ({ item }) => {
    const { dance_image, name, number_of_students } = item;

    return (
        <>

            <div className="avatar relative inline-flex w-fit">
                <div className="container  rounded-full relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
                    <img src={dance_image} class="image" />
                    <div className="middle">
                        <div className="text text-6xl">
                            <h1 className='text-2xl'>{number_of_students} Students</h1>
                            <button>+</button></div>
                    </div>
                </div>
                <span className="absolute bottom-7 right-0 top-auto z-10 inline-block rotate-0 p-2.5 bg-orange-500 text-md text-white font-bold uppercase">{name}</span>
            </div>
        </>
    );
};

export default PopularClass;