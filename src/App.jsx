import './App.css'
import logo from '../public/logo.png'
import btnvector from '../public/bottonVecto.png'
import seachIcon from '../public/🦆 icon _search_.png'
import puplic from '../public/Polygon 1.png'
import personimg from '../public/person.png'
import group15 from '../public/Group 15.png'
import burger from '../public/burger.png'
import sandwich from '../public/sandwich.png'
import icecream from '../public/icecream.png'
import juice from '../public/juice.png'
import firstsalat from '../public/firstsalat.png'
import secondsalat from '../public/secondsalad.png'
import eggsalad from '../public/Egg salad.png'
import maskgroup from '../public/Mask group.png'
import maskgroup1 from '../public/Mask group (1).png'
import maskgroup2 from '../public/Mask group (2).png'
import maskgroup3 from '../public/Mask group (3).png'

function App() {

  function love(e) {
    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("fa-regular");
  }

  function clickInpiit() {
    const input = document.querySelector(".searchInput");
    if (input.style.display === "none" || input.style.display === "") {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  }

  return (
    <div className='body'>
      <header>
        <div className="container">
          <nav>
            <img src={logo} alt="" />
            <ul>
              <li>Home</li>
              <li>Menu <img src={btnvector} alt="" /></li>
              <li>Services <img src={btnvector} alt="" /></li>
              <li>Offers</li>
            </ul>
            <div className="nav__end">
              <input className='searchInput' placeholder='Search...' type="search" />
              <button onClick={clickInpiit} className='searchIcon'><img src={seachIcon} alt="" /></button>
              <button className='call'><i class="fa-solid fa-phone-volume"></i>Contact</button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <section className='section'>
            <div className="section__start">
              <h1>Dive into Delights Of Delectable <span>Food</span></h1>
              <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
              <div className="btnParent">
                <button>Order Now</button>
                <button><a href="https://www.youtube.com/shorts/zPxQjuFoUBc?feature=share">Watch Video</a></button>
                <button><img src={puplic} alt="" /></button>
              </div>
            </div>
            <div  className="section__end">
              <img src={personimg} alt="" />
              <img src={group15} alt="" />
            </div>
          </section>
          <section className='section1'>
            <div className="texts">
              <h3>Customer Favorites</h3>
              <h1>Popular Categories</h1>
            </div>
            <div className="cards">
              <div className="card">
                <div className="bg">
                  <img src={burger} alt="" />
                </div>
                <h3>Main Dish</h3>
                <p>(86 dishes)</p>
              </div>
              <div className="card">
                <div className="bg">
                  <img src={sandwich} alt="" />
                </div>
                <h3>Break Fast</h3>
                <p>(12 break fast)</p>
              </div>
              <div className="card">
                <div className="bg">
                  <img src={icecream} alt="" />
                </div>
                <h3>Dessert</h3>
                <p>(48 dessert)</p>
              </div>
              <div className="card">
                <div className="bg">
                  <img src={juice} alt="" />
                </div>
                <h3>Browse All</h3>
                <p>(255 Items)</p>
              </div>
            </div>
          </section>
          <section className='section2'>  
             <h4>Special Dishes</h4>
             <div className="swip">
              <h1>Standout Dishes From Our Menu</h1>
              <div className="swipper">
              <div ><i class="fa-solid fa-left-long"></i></div>
              <div ><i class="fa-solid fa-right-long"></i></div>
              </div>
             </div>
             <div className="boxs">
              <div className="box">
                <div className="love">
                <i onClick={love} class="fa-regular fa-heart"></i>
                </div>
                <img src={firstsalat} alt="" />
                <h2>Fattoush salad</h2>
                <p>Description of the item</p>
                <div className="stars">
                  <p><span>$</span>24.00</p>
                  <p>⭐4.9</p>
                </div>
              </div>
              <div className="box">
                <div className="love">
                <i onClick={love} class="fa-regular fa-heart"></i>
                </div>
                <img src={secondsalat} alt="" />
                <h2>Vegetable salad</h2>
                <p>Description of the item</p>
                <div className="stars">
                  <p><span>$</span>26.00</p>
                  <p>⭐4.6</p>
                </div>
              </div>
              <div className="box">
                <div className="love">
                <i onClick={love} class="fa-regular fa-heart"></i>
                </div>
                <img src={eggsalad} alt="" />
                <h2>Egg vegi salad</h2>
                <p>Description of the item</p>
                <div className="stars">
                  <p><span>$</span>23.00</p>
                  <p>⭐4.5</p>
                </div>
              </div>
             </div>
          </section>



          <section className="section3">
      <div className="container">
        <div className="testimonials">
          <div className="chef">
            <img src={maskgroup} alt="Chef" />
          </div>
          <div className="testimonial-text">
            <h4>TESTIMONIALS</h4>
            <h1>What Our Customers Say About Us</h1>
            <p>
              "I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable"
            </p>
            <div className="feedback">
              <div className="avatars">
                <img src={maskgroup3} alt="user" />
                <img src={maskgroup2} alt="user" />
                <img src={maskgroup1} alt="user" />
              </div>
              <span>⭐ 4.9 (18.6k Reviews)</span>
            </div>
          </div>
        </div>

        <div className="story">
          <h4>OUR STORY & SERVICES</h4>
          <h1>Our Culinary Journey And Services</h1>
          <p>
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="explore-btn">Explore</button>
        </div>

        <div className="services">
          <div className="service-card">
            <h3>🍴 Catering</h3>
            <p>Delight your guests with our flavors & presentation</p>
          </div>
          <div className="service-card">
            <h3>⚡ Fast Delivery</h3>
            <p>We deliver your order promptly to your door</p>
          </div>
          <div className="service-card">
            <h3>🛒 Online Ordering</h3>
            <p>Explore menu & order with ease using our Online Ordering</p>
          </div>
          <div className="service-card">
            <h3>🎁 Gift Cards</h3>
            <p>Give the gift of exceptional dining with Foodi Cards</p>
          </div>
        </div>
      </div>
          </section>
        </div>
      </main>
      <footer>
  <div className="footer-top">
    <h2><img src={logo} alt="" /></h2>
    <p>Savor the artistry where every dish is a culinary masterpiece</p>
  </div>

  <div className="footer-links">
    <div>
      <h4>Useful links</h4>
      <ul>
        <li>About us</li>
        <li>Events</li>
        <li>Blogs</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div>
      <h4>Main Menu</h4>
      <ul>
        <li>Home</li>
        <li>Offers</li>
        <li>Menus</li>
        <li>Reservation</li>
      </ul>
    </div>
    <div>
      <h4>Contact Us</h4>
      <p>example@email.com</p>
      <p>+44 958 248 966</p>
      <div className="socials">
        <a href="https://facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>

  <p className="copy">Copyright © 2023 Dscode | All rights reserved</p>
      </footer>
    </div>
    
  )
}

export default App
