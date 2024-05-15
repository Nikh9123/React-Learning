import PropTypes from 'prop-types';
import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';

function CountryList({ cities, isLoading }) {
    if (isLoading) {
        return <Spinner />;
    }
    if (cities.length <= 0) {
        return <Message message="Add your first city by clicking on map" />;
    }
    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country)) {
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
            return arr;
        }
    }, []);
    return (
        <ul className={styles.countryList}>
            {countries.map((country, index) => (
                <CountryItem key={index} country={country} />
            ))}
        </ul>
    );
}

CountryList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            cityName: PropTypes.string.isRequired,
        })
    ).isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default CountryList;
