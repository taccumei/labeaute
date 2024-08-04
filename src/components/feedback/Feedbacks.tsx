
type Props = {
  url: string,
  desc: string
}

const Feedbacks = ({url, desc}: Props) => {
  return (
    <div className='py-5 flex-row-reverse flex'>
       <div className='px-2 w-[220px] h-[220px]'>
        <img src={url} alt="fb1"/>
        <p className='mt-5 text-xl font-sans'>{desc}</p>
      </div>
    </div>
  )
}

export default Feedbacks;