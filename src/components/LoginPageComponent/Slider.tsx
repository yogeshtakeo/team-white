import { useState } from "react"


function Slider (){
    const img=[
                "/Images/Bankcard1.jpg",
                "/Images/Bankcard2.avif",
                "/Images/Bankcard3.avif"
    ]
       
    const [currentImageIndex, setCurrentImageIndex]=useState(0)

    function previousSlide(){
      setCurrentImageIndex((prevIndex) => prevIndex === 0? img.length -1 : prevIndex -1)
    }
       
    function nextSlide(){
        setCurrentImageIndex((prevIndex) => prevIndex === img.length -1 ? 0 : prevIndex + 1)
    }
    
    return(
        <>
        <div className="static right-0 rounded-xl">
                <div className="relative w-600">
                <div className="slide relative">
                    <img className="w-[1000px] h-[480px] object-cover rounded-br-md"
                        src={img[currentImageIndex]}/>
            </div>

                <button className="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                onClick={previousSlide}>❮</button>

                <button className="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                onClick={nextSlide}>❯</button>

                
            </div>
            </div>

        </>
    )
}

export default Slider