import React from 'react'
import useMenu from '../../../Hooks/useMenu'
import HeadingTitle from '../../../Components/HeadingTitle/HeadingTitle';


export default function MenuCategory({heading, subHeading, category}) {
    const [menu, loading] = useMenu();
    const menuItems = menu.filter(item => item.category === category)

  return (
    <div className='my-10'>
        <div>
     
            <HeadingTitle heading={heading} subHeading={subHeading}></HeadingTitle>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            { !loading && menuItems.map(item => (
                <div className='bg-white rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <img src={item.image} alt={item.name} className='w-[118px] rounded-tl-none rounded-full' />
                            <div className='ml-3'>
                                <h3 className='text-gray-900 font-medium text-lg'>{item.name} ----</h3>
                                <p className='text-gray-500 text-sm'>{item.recipe}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-orange-400 text-sm'>${item.price}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>

        <div className='text-center'>
             <button className='uppercase btn btn-warning'>View full now</button>
        </div>

    </div>
  )
}
