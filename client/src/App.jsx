
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Clock,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import "./App.css";

const categories = ["All", "Burgers", "Pizza", "Chicken", "Drinks"];

const dishes = [
  {
    id: 1,
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 650,
    emoji: "🍔",
    description: "Juicy beef, fresh lettuce and our signature sauce.",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Loaded Chicken Pizza",
    category: "Pizza",
    price: 1200,
    emoji: "🍕",
    description: "Golden crust, melted cheese and seasoned chicken.",
    tag: "FAN FAVOURITE",
  },
  {
    id: 3,
    name: "Crispy Fried Chicken",
    category: "Chicken",
    price: 750,
    emoji: "🍗",
    description: "Crispy on the outside, tender on the inside.",
    tag: "MUST TRY",
  },
  {
    id: 4,
    name: "Chocolate Milkshake",
    category: "Drinks",
    price: 350,
    emoji: "🥤",
    description: "A rich, creamy chocolate treat.",
    tag: "SWEET TREAT",
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div className="site-wrapper">
      <div className="announcement">
        GOOD FOOD. GOOD MOOD. GOOD TIMES.
      </div>

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">S</span>
          <span>
            STARLIGHT
            <small>RESTAURANT</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        <nav className={mobileMenuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Our Menu</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>

        <a className="nav-cta" href="#menu">
          Explore Menu <ArrowUpRight size={17} />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="live-dot" />
              YOUR NEW FAVOURITE SPOT
            </span>

            <h1>
              Made with love.
              <br />
              Served with <span>flavour.</span>
            </h1>

            <p>
              Big flavours, fresh ingredients and good vibes.
              Discover food worth coming back for.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#menu">
                Explore our menu <ArrowUpRight size={18} />
              </a>
              <a className="button-secondary" href="#about">
                Discover our story
              </a>
            </div>

            <div className="hero-note">
              <span className="note-stars">★★★★★</span>
              <span>MADE FOR YOUR CRAVINGS</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1100&q=85"
                alt="Delicious gourmet burger"
              />
            </div>
            <div className="floating-card">
              <span className="floating-emoji">🍔</span>
              <div>
                <strong>Cravings?</strong>
                <small>We've got you.</small>
              </div>
            </div>
            <div className="hero-stamp">FRESH<br />& TASTY</div>
          </div>
        </section>

        <section className="features-strip">
          <div><span>✳</span> BIG FLAVOUR</div>
          <div><span>✳</span> FRESHLY PREPARED</div>
          <div><span>✳</span> GOOD VIBES ONLY</div>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE GOOD STUFF</span>
              <h2>Cravings, <span>covered.</span></h2>
              <p>Find your next favourite bite.</p>
            </div>
            <span className="menu-count">
              {filteredDishes.length} DELICIOUS PICKS
            </span>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "category active" : "category"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="dish-grid">
            {filteredDishes.map((dish) => (
              <article className="dish-card" key={dish.id}>
                <div className={`dish-art dish-art-${dish.id}`}>
                  <span className="dish-emoji">{dish.emoji}</span>
                  <span className="dish-tag">{dish.tag}</span>
                </div>
                <div className="dish-info">
                  <span className="dish-category">{dish.category}</span>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <div className="dish-bottom">
                    <strong>KSh {dish.price.toLocaleString("en-KE")}</strong>
                    <button
                      className="dish-order"
                      aria-label={`Order ${dish.name}`}
                      onClick={() => {
                        const message = encodeURIComponent(
                          `Hi Starlight Restaurant! I'd like to enquire about ${dish.name}.`
                        );
                        window.open(
                          `https://wa.me/?text=${message}`,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <ShoppingBag size={17} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="demo-disclaimer">
            Demo menu: items, prices and availability need confirmation
            from the restaurant.
          </p>
        </section>

        <section className="story-section" id="about">
          <div className="story-visual">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85"
              alt="Warm and welcoming restaurant interior"
            />
            <div className="story-badge">GOOD FOOD<br />BRINGS US<br />TOGETHER.</div>
          </div>
          <div className="story-content">
            <span className="eyebrow">MORE THAN JUST A MEAL</span>
            <h2>Good food.<br />Better <span>memories.</span></h2>
            <p>
              Great food has a way of bringing people together.
              Whether you're catching up with friends or treating
              yourself, there's always room for something delicious.
            </p>
            <a className="text-link" href="#contact">
              Come say hello <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">LET'S MAKE IT DELICIOUS</span>
          <h2>Your next favourite meal<br />is waiting.</h2>
          <p>Got a question? Want to find us? Get in touch.</p>
          <div className="contact-links">
            <a href="#menu"><ShoppingBag size={18} /> Browse menu</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#contact"><MapPin size={18} /> Find us</a>
          </div>
          <p className="contact-note">
            Official contact details and location to be added after confirmation.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">S</span>
          <span>STARLIGHT<small>RESTAURANT</small></span>
        </a>
        <span>MADE FOR GOOD FOOD LOVERS.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      <div className="demo-banner">
        UNOFFICIAL WEBSITE CONCEPT · CREATED AS A PROPOSAL
      </div>
    </div>
  );
}

export default App;
