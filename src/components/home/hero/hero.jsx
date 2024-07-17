import React, { useState, useEffect } from "react"

// IMPORT REACT ATOMS
import ButtonCyan from "@/atoms/atoms-shiva/button/cyan/large/button-cyan"
import ButtonDark from "@/atoms/atoms-shiva/button/dark/button-dark"
import ButtonOrange from "@/atoms/atoms-shiva/button/orange/button-orange"
import HeadingOneWhite from "@/atoms/atoms-shiva/headings/one/six-xl/white/one-six-xl"
import HeadingTwoWhite from "@/atoms/atoms-shiva/headings/two/xl/white/two-xl"
import PictureCover from "@/atoms/picture/internal/picture-cover"

// HARDCODED DATA
const gradients = [
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,116,133,1) 49%, rgba(138,189,208,1) 100%)",
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,116,133,1) 49%, rgba(138,189,208,1) 100%)",
    "linear-gradient(90deg, rgba(138,189,208,1) 0%, rgba(87,116,133,1) 49%, rgba(2,0,36,1) 100%)",
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(87,116,133,1) 49%, rgba(138,189,208,1) 100%)",
    "linear-gradient(90deg, rgba(138,189,208,1) 0%, rgba(87,116,133,1) 49%, rgba(2,0,36,1) 100%)",
]
const slides = [
    {
        title: "THE MEDIA CAPTAIN",
        heading: "Columbus Digital Marketing & Web Design Firm",
        subheading: "Voted a Top 1% Agency by Clutch and UpCity. Serving Clients in Ohio and Nationwide.",
        buttonText: "CONTACT US",
        buttonType: "cyan",
        imageSrc: "/images/hero/about-tmc-slide-3.jpg",
        imageAlt: "Image for Slide 5",
        orangeWords: ["Columbus"]
    },
    {
        title: "OUR COLUMBUS MARKETING FIRM",
        heading: "Doubled Grandview Dental's Organic Visibility on Google.",
        buttonText: "WORK FOR US",
        buttonType: "cyan",
        imageSrc: "/images/hero/tmc-slider-img-1.png",
        imageAlt: "Image for Slide 2",
        orangeWords: ["Doubled"]
    },
    {
        title: "OUR COLUMBUS DIGITAL AGENCY",
        heading: "Helped Schmidt's Increase Social Media Engagement by 225%",
        buttonText: "WORK FOR US",
        buttonType: "dark",
        imageSrc: "/images/hero/tmc-slider-img-2.png",
        imageAlt: "Image for Slide 3",
        orangeWords: ["by 225%"]
    },
    {
        title: "THE MEDIA CAPTAIN",
        heading: "Launched Hundreds of Websites for all Business Types.",
        buttonText: "VIEW PORTFOLIO",
        buttonType: "orange",
        buttonText2: "WORK FOR US",
        buttonType2: "cyan",
        imageSrc: "/images/hero/tmc-slider-img-3.png",
        imageAlt: "Image for Slide 4",
        orangeWords: ["Hundreds"]
    },
    {
        title: "OUR COLUMBUS MARKETING COMPANY",
        heading: "Helped DermWarehouse Amass Over 400,000 Customers",
        buttonText: "VIEW SUCCESS STORY",
        buttonType: "orange",
        buttonText2: "WORK WITH US",
        buttonType2: "dark",
        imageSrc: "/images/hero/tmc-slider-img-4.png",
        imageAlt: "Image for Slide 5",
        orangeWords: ["400,000"]
    }
]

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentGradient, setCurrentGradient] = useState(gradients[0])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length)
        }, 20000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setCurrentGradient(gradients[currentSlide])
    }, [currentSlide])

    const handleNextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length)
    }

    const handlePrevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
    }

    const formatHeading = (heading, orangeWords) => {
        let formattedHeading = heading
        orangeWords.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi')
            formattedHeading = formattedHeading.replace(regex, '<span class="text-orange-500">$1</span>')
        })
        return { __html: formattedHeading }
    }

    return (
        <div
            className="relative h-dvh md:h-full w-full md:aspect-[16/7] transition-all duration-1000"
            style={{ background: currentGradient, transition: "background 4s ease" }}
        >
            {
            
                slides.map((slide, index) => (

                    currentSlide === index && (

                        <div className="absolute inset-0 grid md:grid-cols-2 gap-6" key={index}>
                            <div className="flex items-center md:justify-center pl-4 lg:pl-24">
                                <div className="grid gap-4">
                                    <HeadingTwoWhite>{ slide.title }</HeadingTwoWhite>
                                    <HeadingOneWhite>
                                        <span dangerouslySetInnerHTML={formatHeading(slide.heading, slide.orangeWords)} />
                                    </HeadingOneWhite>
                                    {slide.subheading && <HeadingTwoWhite>{ slide.subheading }</HeadingTwoWhite>}
                                    <div className="flex gap-4">
                                        <a href="/">
                                            {slide.buttonType === "cyan" && <ButtonCyan button_text={ slide.buttonText } />}
                                            {slide.buttonType === "dark" && <ButtonDark button_text={ slide.buttonText } />}
                                            {slide.buttonType === "orange" && <ButtonOrange button_text={ slide.buttonText } />}
                                        </a>
                                        {slide.buttonText2 && (
                                            <a href="/">
                                                {slide.buttonType2 === "cyan" && <ButtonCyan button_text={ slide.buttonText2 } />}
                                                {slide.buttonType2 === "dark" && <ButtonDark button_text={ slide.buttonText2 } />}
                                                {slide.buttonType2 === "orange" && <ButtonOrange button_text={ slide.buttonText2 } />}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden h-full w-full aspect-square">
                                <PictureCover
                                    alternative_text={ slide.imageAlt }
                                    source={ slide.imageSrc }
                                />
                            </div>
                        </div>
                        
                    )

                ))
            
            }

            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black size-14 text-white text-2xl bg-opacity-50 p-2 rounded-full"
                onClick={ handlePrevSlide }
            >
                ❮
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black size-14 text-white text-2xl bg-opacity-50 p-2 rounded-full"
                onClick={ handleNextSlide }
            >
                ❯
            </button>
        </div>
    )
}
export default HeroSection
