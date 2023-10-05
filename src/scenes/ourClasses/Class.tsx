import { ClassType } from '@/shared/types'


type Props = ClassType

const Class = ({ image, name, description = 'some description' }: Props) => {
  const overlayStyle = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col
   items-center bg-primary-500 justify-center whitespace-normal 
   opacity-0 transition duration-500 hover:opacity-90 text-center text-white`
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyle}>
        <p className='text-2xl'>{name}</p>
        <p className='mt-5'>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class
