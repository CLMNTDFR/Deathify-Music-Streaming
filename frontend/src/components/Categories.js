//Categories.js
import '../styles/Categories.css'
import epIcon from '../assets/ep.svg'
import albumIcon from '../assets/album.svg'
import resetIcon from '../assets/reset.svg'

function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='tbs-categories'>
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`tbs-category-button ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                >
                    <img
                        src={cat === 'EP' ? epIcon : albumIcon}
                        alt={`${cat} icon`}
                        className='tbs-category-icon'
                    />
                    {cat}
                </button>
            ))}
            <button onClick={() => setActiveCategory('')} className='tbs-reset-button'>
                <img src={resetIcon} alt="Reset icon" className='tbs-category-icon' />
            </button>
        </div>
    )
}

export default Categories
