import Banner from '../components/Banner';
import Clients from '../components/Clients';
import Contacts from '../components/Contacts';
import EmployeeCeo from '../components/EmployeeCeo';
import News from '../components/News';
import Parallax from '../components/ParalaxSection';
import Portfolio from '../components/Portfolio';
import ScrollToTop from '../components/ScrollToTop';
import Services from '../components/Services';
import Slider from '../components/Slider';

export default function Home() {
	return (
		<>
			<ScrollToTop />

			<Slider />
			<Banner />
			<Parallax />
			<Services />
			<Parallax />
			<Portfolio />
			<EmployeeCeo />
			<News />
			<Clients />
			<Contacts />
		</>
	);
}
