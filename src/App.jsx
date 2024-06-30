import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function App() {
  return (
    <>
      <section id='hero'>
        <div className='container max-w-6xl mx-auto py-12 px-6'>
          <nav className='flex justify-between'>
            <img src="../src/assets/images/logo.svg" alt="" />
            <div className='hidden font-alata text-white md:flex space-x-8'>
              <div className='group'>
                <a href="">About</a>
                <div className=' mx-2 group-hover:border-b'></div>
              </div>
              <div className='group'>
                <a href="">Careers</a>
                <div className=' mx-2 group-hover:border-b'></div>
              </div>
              <div className='group'>
                <a href="">Experience</a>
                <div className=' mx-2 group-hover:border-b'></div>
              </div>
              <div className='group'>
                <a href="">Products</a>
                <div className=' mx-2 group-hover:border-b'></div>
              </div>
              <div className='group'>
                <a href="">Support</a>
                <div className=' mx-2 group-hover:border-b'></div>
              </div>
            </div>
            {/* hum logo */}
          </nav>
          {/* mobile menu */}
          <div className='container max-w-md font-sans text-white uppercase mt-32 mb-32 border-2 p-6 md:p-10 text-4xl md:text-5xl'>
            Impressive Experience that deliver
          </div>
        </div>
      </section>
      {/* feature */}
      <section id='feature'>
        <div className='container max-w-6xl mx-auto mt-32 mb-32 px-6 py-12  md:px-0'>
          <div className='relative flex flex-col md:flex-row'>
            <img src="../src/assets/images/desktop/image-interactive.jpg" className='' alt="" />
            <div className=' md:absolute text-center mt-4 p-1  top-48 md:max-w-xl md:p-8  bg-white right-0'>
              <h2 className='  uppercase text-4xl  md:text-left'>the leader in interactive vr</h2>
              <div className='md:text-left mt-2 '>Virtual Reality (VR) is a computer-generated simulation of an environment that can be interacted with in a seemingly real or physical way by a person using special electronic equipment, such as a helmet with a screen inside or gloves fitted with sensors. It's a technology that has been rapidly evolving, offering immersive experiences across various industries, including gaming, entertainment, education, healthcare, and more</div>
            </div>
          </div>
        </div>
      </section>
      {/* our creation */}
      <section id='creations'>
        <div className='max-w-6xl mx-auto px-6 py-12 space-y-4 md:px-0'>
          <div className='flex flex-col md:flex-row font-sans justify-between'>
            <h2 className=' text-4xl uppercase text-center md:text-left md:px-0'>our creations</h2>
            <button className='hidden md:block px-6 py-2 uppercase border-2 font-bold border-black bg-black text-white hover:bg-white hover:text-black'>See All</button>
          </div>
          
          <div className=' container flex flex-col md:flex-row justify-between  space-y-6 md:space-y-0 md:space-x-8 md:px-0 '>
            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-pocket-borealis.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>pocket borealis</div>
            </div>
            <div className='hidden md:block relative group overflow-hidden w-1/5'>
              <img src="../src/assets/images/desktop/image-pocket-borealis.jpg" className=' group-hover:scale-110 ' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>pocket borealis</div>
            </div>

            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-grid.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'> grid</div>
            </div>
            <div className=' hidden md:block w-1/5 relative group overflow-hidden'>
              <img src="../src/assets/images/desktop/image-grid.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'> grid</div>
            </div>

            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-fisheye.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>fisheye</div>
            </div>
            <div className=' md:block hidden relative group overflow-hidden w-1/5'>
              <img src="../src/assets/images/desktop/image-fisheye.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>fisheye</div>
            </div>

            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-night-arcade.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>night arcade</div>
            </div>
            <div className=' md:block hidden relative group overflow-hidden w-1/5'>
              <img src="../src/assets/images/desktop/image-night-arcade.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>night arcade</div>
            </div>
          </div>

          <div className=' container flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8 md:px-0 '>
            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-pocket-borealis.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>pocket borealis</div>
            </div>
            <div className='hidden md:block relative group overflow-hidden w-1/5'>
              <img src="../src/assets/images/desktop/image-pocket-borealis.jpg" className=' group-hover:scale-110 ' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>pocket borealis</div>
            </div>

            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-grid.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'> grid</div>
            </div>
            <div className=' hidden md:block w-1/5 relative group overflow-hidden'>
              <img src="../src/assets/images/desktop/image-grid.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'> grid</div>
            </div>

            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-fisheye.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>fisheye</div>
            </div>
            <div className=' md:block hidden relative group overflow-hidden w-1/5'>
              <img src="../src/assets/images/desktop/image-fisheye.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>fisheye</div>
            </div>

            <div className=' md:hidden relative group overflow-hidden'>
              <img src="../src/assets/images/mobile/image-night-arcade.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>night arcade</div>
            </div>
            <div className=' md:block hidden relative group overflow-hidden w-1/5'>
              <img src="../src/assets/images/desktop/image-night-arcade.jpg" className=' group-hover:scale-110' alt="" />
              <div className=' absolute bottom-0 right-0 left-0 text-white text-2xl p-4 uppercase'>night arcade</div>
            </div>
          </div>
          
          <button className='md:hidden w-full px-6 py-2 uppercase border-2 font-bold border-black bg-white text-black hover:bg-black hover:text-white'>See All</button>
          
        </div>
      </section>
      <section className='footer'>
        <div className='container max-w-full flex flex-col md:flex-row justify-between bg-black px-6 py-12'>
          <div className='flex flex-col space-y-6 md:space-y-6 md:space-x-4 justify-center items-center '>
            <img src="../src/assets/images/logo.svg" className='w-36' alt="" />
            <div className='text-white font-sans flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center'>
                <a href="" className=' hover:text-pink-400'>About</a>
                <a href="" className=' hover:text-pink-400'>Careers</a>
                <a href="" className=' hover:text-pink-400'>Events</a>
                <a href="" className=' hover:text-pink-400'>Support</a>
                <a href="" className=' hover:text-pink-400'>Products</a>

            </div>
          </div>

          <div className='flex flex-col space-y-6 md:space-y-6 md:space-x-4 justify-center items-center mt-4 md:mt-0  '>
            <div className='flex space-x-6'>
                <FiInstagram className='text-pink-600' />
                <FaFacebook className='text-blue-400' />
                <FaPinterest className='text-red-800' />
                <FaSquareXTwitter className='text-white' />

            </div>
            <div className='text-gray-500'>2024 loopstudios all right reserved</div>
            
          </div>
        </div>
      </section>
    </>
  )
}
//Virtual Reality (VR) is a computer-generated simulation of an environment that can be interacted with in a seemingly real or physical way by a person using special electronic equipment, such as a helmet with a screen inside or gloves fitted with sensors. It's a technology that has been rapidly evolving, offering immersive experiences across various industries, including gaming, entertainment, education, healthcare, and more
//<div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70'></div>
