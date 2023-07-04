import { useState } from "react"
import img1 from '../../assets/cover_image_1679401666.jpeg.760x400_q85_crop_upscale.jpg'
import img2 from '../../assets/istockphoto-1049658918-612x612.jpg'
import img3 from '../../assets/photo-1515974256630-babc85765b1d.avif'


function Slider (){
    const slides=[
        {
            text:['Auto purchase loans', 'Low rates on purchase and lease buyout loans'],
            img: img1},
        {
            text:['Get Flexible Financing Options for Your Dream Car'],
            img:img2},
                
                {
                    text:['Upgrade Your Ride with Low Interest Auto Purchase Loans'],
                    img:img3},
               
    ]
       
    const [currentImageIndex, setCurrentImageIndex]=useState(0)

    function previousSlide(){
      setCurrentImageIndex((prevIndex) => prevIndex === 0? slides.length -1 : prevIndex -1)
    }
       
    function nextSlide(){
        setCurrentImageIndex((prevIndex) => prevIndex === slides.length -1 ? 0 : prevIndex + 1)
    }
    
    return(
        <>
        
                <div className="relative">
                <div className="slide relative">
                    <img className="w-[1000px] h-[460px] object-cover rounded-br-md"
                        src={slides[currentImageIndex].img}/>
                         <div className="absolute bottom-[45%] right-[30%] p-10 ">
                            {slides[currentImageIndex].text.map((items: string, index: number) => (
                            <li className="list-none text-black font-semibold text-2xl"
                            key={index}  >
                                 {items}
                
              </li>
            ))}
             <button className='bg-black rounded p-1 mt-6 mb-6 text-white w-44'>Learn More</button>
</div>
            </div>
            
                <button className="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                onClick={previousSlide}>❮</button>

                <button className="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                onClick={nextSlide}>❯</button>
 </div>
            

        </>
    )
}

export default Slider