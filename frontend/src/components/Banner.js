//Banner.js
import '../styles/Banner.css'
import logo from '../assets/Deathify.svg' // Import de l'image SVG

function Banner() {
	return (
		<div className='tbs-banner'>
			<img src={logo} alt="Deathify Logo" className='tbs-logo' />
		</div>
	)
}

export default Banner
