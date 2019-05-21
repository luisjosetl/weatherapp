import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const WeExtraInfo =({ humidity, wind })=> (
	<div className='weExtraInfoCont'>
		<span className='extraInfoText'>{`Humedad: ${humidity}%`}</span>
		<span className='extraInfoText'>{`Vientos: ${wind}`}</span>
	</div>
);

WeExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired,
};

export default WeExtraInfo;