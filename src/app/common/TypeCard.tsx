import Link from "next/link";

const TypeCard = ({ img, title, url } : { img: string; title: string; url: string}) => {
    return (
      <Link 
      href={url}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className='border-[10px] border-white 
      w-full max-w-96 h-64 shadow-md hover:shadow-2xl transition-all duration-300 mx-4
      flex justify-center items-end'>
        <h2 className='w-full bg-gradient-to-t from-[#25456c] to-transparent text-center py-10
        text-white tracking-wider sm:text-xl font-bold'>{title}</h2>
      </Link>
    )
  }

export default TypeCard;