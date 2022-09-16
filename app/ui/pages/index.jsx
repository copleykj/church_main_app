import React, {useEffect} from 'react'
import { Testimonials } from './testimonials/Testimonials'
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    id: 1,
    href: 'news',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
   
  },
  {
    id: 1,
    href: 'news',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
   
  },
  {
    id: 1,
    href: 'news',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
   
  },
  {
    id: 1,
    href: 'news',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
   
  },
]

const posts = [
  {
    title: 'One Soul Baptized Last Sabbath in  Georgia, USA',
    href: 'news',
    category: { name: 'Article', href: 'news', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'One soul, our Brother in the faith of Jesus Richard Carbajal, was baptized last Sabbath, on September. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: 'news',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
  {
    title: 'One Soul Baptized Last Sabbath in Marietta, Georgia, USA',
    href: 'news',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'One soul, our Brother in the faith of was baptized last Sabbath, on September. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: 'news',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },
  {
    title: 'Improve your customer experience',
    href: 'news',
    category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
    description: 'One soul, our Brother in the faith of Jesus Richard Carbajal, was baptized last Sabbath, on September. Sapien tortor lacus arcu.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: 'news',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Hero = () => {
 
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (
    <main>
            <div className="absolute inset-x-0 bottom-0 mt-20 bg-gray-100 sm:mt-32" />
            <div className="w-full h-full mt-20 text-center">
              <div className="relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <video
                    className="object-cover w-full h-full"
                    src="https://media.istockphoto.com/videos/university-library-gifted-beautiful-black-girl-sitting-at-the-desk-video-id1214253752"
                    type="video/mp4" 
                    autoPlay muted loop
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-opacity-40 bg-primary mix-blend-multiply" />
                </div>
                <div className="relative mt-20 y-16 mpx-4 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-xl text-medium center trac-king-tight font md:text-4xl lg:text-5xl">
                    <span className="font-serif text-white " data-aos="fade-left">Welcome to</span>&nbsp;
                    <span className="font-serif text-tertiaryOne  " data-aos="fade-right">IMS Ghana field</span>
                  </h1>
                  <p className="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl">
                  Where your spirituality is our concern.
                  </p>
                  <div className="max-w-sm mx-auto mt-10 sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="contact"
                        className="flex items-center justify-center px-4 py-3 text-base font-medium text-white rounded-md shadow-sm bordewhiter-transparent bortertiaryOneder bg-tertiaryOne bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Get started
                      </a>
                      <a
                        href="News"
                        className="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-tertiaryOne bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                       Our News
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
       
      <div  className="px-4 pt-14 pb-20 bg-primary bg-opacity-20 dark:bg-slate-900 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28" data-aos="fade-right">
      <div  className="relative max-w-lg mx-auto lg:max-w-7xl">
      <div className="relative max-w-lg mx-auto  lg:max-w-7xl">
      <h1 className="flex items-center justify-center mt-1 text-3xl font-bold text-primary dark:text-tertiaryOne">Latest News</h1>
         </div>
        <div  className="grid gap-16 pt-7 mt-5 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12" data-aos="fade-right">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href='news' className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href='news' className="block mt-4">
                <p className="text-xl font-semibold text-gray-900 dark:text-tertiaryOne">{post.title}</p>
                <p className="mt-3 text-base text-gray-500 dark:text-slate-300">{post.description}</p>
              </a>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href='news'>
                    <span className="sr-only">{post.author.name}</span>
                    <img className="w-10 h-10 rounded-full" src={post.author.imageUrl} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    <div className="bg-white dark:bg-slate-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <h1 className="flex items-center justify-center mt-2 text-3xl font-bold text-primary dark:text-white">Album</h1>
         </div>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Some Albulm
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"  data-aos="fade-right">
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <video
                    className="object-cover w-full h-full"
                    
                    src="https://media.istockphoto.com/videos/university-library-gifted-beautiful-black-girl-sitting-at-the-desk-video-id1214253752"
                    type="video/mp4" 
                    autoPlay muted loop
                    alt="People working on laptops"
                  />
            
            <div aria-hidden="true" className="opacity-50 bg-gradient-to-b from-transparent to-black" />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Teshie Camp Meeting
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Join us
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              data-aos="fade-up"
           />
            <div
              aria-hidden="true"
              className="opacity-50 bg-gradient-to-b from-transparent to-black sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Camp Meeting
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                 Join us
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              data-aos="fade-up"
            />
            <div
              aria-hidden="true"
              className="opacity-50 bg-gradient-to-b from-transparent to-black sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Camp Meeting
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Join us
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a href="news" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
           Go to our news corner
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
   
      <Testimonials />

      <div className="relative bg-gray-900">
       <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
         <img
           className="h-full w-full object-cover"
           src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
           alt=""
         />
         <div
           aria-hidden="true"
           className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
         />
       </div>
       <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
         <div className="md:ml-auto md:w-1/2 md:pl-10">
           <h2 className="text-lg font-serif font-semibold text-gray-300">Soul winning is our priority</h2>
           <p className="mt-2 text-3xl  font-serif font-bold tracking-tight text-white sm:text-4xl">Come now, and let us reason together</p>
           <p className="mt-3 text-lg font-serif text-gray-300 line-clamp-3">
           Said the Lord, though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool. 
          
           </p>
           <span className='text-tertiaryOne'>Isaiah 1:18</span>
           <div className="mt-8">
             <div className="inline-flex rounded-md shadow">
               <a
                 href="contact"
                 className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
               >
                   Visit our church service
                 <div className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
    </main>
  )
}
