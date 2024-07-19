import { useState, useEffect } from "react"

// IMPORT REACT ICONS
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

// IMPORT REACT ATOMS
import ButtonCyan from "@/atoms/atoms-shiva/button/cyan/large/jsx/index"
import ButtonDark from "@/atoms/atoms-shiva/button/dark/jsx/index"
import ButtonOrange from "@/atoms/atoms-shiva/button/orange/jsx/index"
import HeadingOneWhite from "@/atoms/atoms-shiva/headings/one/six-xl/white/jsx/index"
import HeadingTwoWhite from "@/atoms/atoms-shiva/headings/two/xl/white/jsx/index"
import Link from "@/atoms/links/jsx"
import PictureCover from "@/atoms/picture/internal/jsx/index"

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
        buttonText: "CONTACT US",
        buttonType: "cyan",
        heading: "Columbus Digital Marketing & Web Design Firm",
        imageAlt: "Image for Slide 5",
        imageSrc: "/images/hero/about-tmc-slide-3.jpg",
        orangeWords: ["Columbus"],
        subheading: "Voted a Top 1% Agency by Clutch and UpCity. Serving Clients in Ohio and Nationwide.",
        title: "THE MEDIA CAPTAIN",
    },
    {
        buttonText: "WORK FOR US",
        buttonType: "cyan",
        heading: "Doubled Grandview Dental's Organic Visibility on Google.",
        imageAlt: "Image for Slide 2",
        imageSrc: "/images/hero/tmc-slider-img-1.png",
        orangeWords: ["Doubled"],
        title: "OUR COLUMBUS MARKETING FIRM",
    },
    {
        buttonText: "WORK FOR US",
        buttonType: "dark",
        heading: "Helped Schmidt's Increase Social Media Engagement by 225%",
        imageAlt: "Image for Slide 3",
        imageSrc: "/images/hero/tmc-slider-img-2.png",
        orangeWords: ["by 225%"],
        title: "OUR COLUMBUS DIGITAL AGENCY",
    },
    {
        buttonText: "VIEW PORTFOLIO",
        buttonText2: "WORK FOR US",
        buttonType: "orange",
        buttonType2: "cyan",
        heading: "Launched Hundreds of Websites for all Business Types.",
        imageAlt: "Image for Slide 4",
        imageSrc: "/images/hero/tmc-slider-img-3.png",
        orangeWords: ["Hundreds"],
        title: "THE MEDIA CAPTAIN",
    },
    {
        buttonText: "VIEW SUCCESS STORY",
        buttonText2: "WORK WITH US",
        buttonType: "orange",
        buttonType2: "dark",
        heading: "Helped DermWarehouse Amass Over 400,000 Customers",
        imageAlt: "Image for Slide 5",
        imageSrc: "/images/hero/tmc-slider-img-4.png",
        orangeWords: ["400,000"],
        title: "OUR COLUMBUS MARKETING COMPANY",
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
            className="relative h-full w-full md:aspect-[16/7] transition-all duration-1000"
            style={{ background: currentGradient, transition: "background 4s ease" }}
        >
            {
            
                slides.map((slide, index) => (

                    currentSlide === index && (

                        <div className="absolute inset-0 grid md:grid-cols-2 gap-6" key={index}>
                            <div className="flex items-center md:justify-center pl-4 lg:pl-24">
                                <div className="grid gap-6">
                                    <HeadingTwoWhite>{ slide.title }</HeadingTwoWhite>
                                    <HeadingOneWhite>
                                        <span dangerouslySetInnerHTML={formatHeading(slide.heading, slide.orangeWords)} />
                                    </HeadingOneWhite>
                                    {slide.subheading && <HeadingTwoWhite>{ slide.subheading }</HeadingTwoWhite>}
                                    <div className="flex gap-4">
                                        <Link href="/">
                                            {slide.buttonType === "cyan" && <ButtonCyan children={ slide.buttonText } />}
                                            {slide.buttonType === "dark" && <ButtonDark children={ slide.buttonText } />}
                                            {slide.buttonType === "orange" && <ButtonOrange children={ slide.buttonText } />}
                                        </Link>
                                        {
                                            slide.buttonText2 && (

                                                <Link href="/">
                                                    {slide.buttonType2 === "cyan" && <ButtonCyan children={ slide.buttonText2 } />}
                                                    {slide.buttonType2 === "dark" && <ButtonDark children={ slide.buttonText2 } />}
                                                    {slide.buttonType2 === "orange" && <ButtonOrange children={ slide.buttonText2 } />}
                                                </Link>

                                            )
                                        }
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
                className="flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 bg-black size-14 text-white text-2xl bg-opacity-50 p-2 rounded-full"
                onClick={ handlePrevSlide }
            >
                <IoIosArrowBack/>
            </button>
            <button
                className="flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 bg-black size-14 text-white text-2xl bg-opacity-50 p-2 rounded-full"
                onClick={ handleNextSlide }
            >
                <IoIosArrowForward/>
            </button>
        </div>

    )

}
export default HeroSection
