import PropTypes from 'prop-types';
import styles from './CityList.module.css'
import Spinner from './Spinner';
import Message from "./Message"
// import City from './City';
import CityItem from './CityItem';

function CityList({ cities, isLoading }) {
    if (isLoading) {
        return <Spinner />
    }
    if(cities.length <= 0){
        return <Message message="Add your first city by clicking on map"/>
    }
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem key={city.id} city={city} />
            ))}
        </ul>
    );
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            cityName: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CityList;
