import StreetVerse from "@/assets/images/StreetVerse.png";
import Weather from "@/assets/images/Weather.png";
import CarRental from "@/assets/images/CarRental.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";
import QuickCart from "@/assets/images/QuickCart.png";

const portfolioProjects = [
  {
    company: "E-Commerce Website",
    year: "2025",
    title: "QuickCart",
    results: [
      { title: "Added an Admin Page to add,delete products and see order details" },
      { title: "Used Clerk for User Authentication and Inngest for handling user functions" },
      { title: "Added a Strive Payment Gateway for seemless payment" },
    ],
    link: "https://quick-cart-indol.vercel.app/",
    image: QuickCart,
  },
  {
    company: "Weather Dashboard",
    year: "2024",
    title: "Weather Dashboard",
    results: [
      { title: "Responsive Weather Dashborad with Live Updates" },
      { title: "Light and Dark User mode" },
      { title: "Forecasting for major cities for faster access" },
    ],
    link: "https://weather-dashboard-smoky.vercel.app/",
    image: Weather,
  },
  {
    company: "Car Rental",
    year: "2025",
    title: "Online Car Rental System",
    results: [
      { title: "Modern UI/UX showcasing core full stack skills" },
      { title: "Fully responsive design for desktop and mobile users" },
      { title: "Interactive experience with smooth animations and tech stack highlights" },
    ],
    link: "https://car-rental-omega-smoky.vercel.app/",
    image: CarRental,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-World Results</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how I transformed concepts into engaging digital experiences.</p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} 
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`
            }}>
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
