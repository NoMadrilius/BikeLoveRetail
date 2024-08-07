import React from 'react';

interface LocationIcon {
    color?: string
}

const LocationIcon = (props: LocationIcon) => {
    const {color="#101112"} = props
    return (
        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 2.9375C17.0371 2.9375 20.3125 6.05496 20.3125 9.89453C20.3125 14.3125 15.4375 21.3137 13.6475 23.7319C13.5732 23.834 13.4758 23.9171 13.3632 23.9743C13.2507 24.0316 13.1263 24.0615 13 24.0615C12.8737 24.0615 12.7493 24.0316 12.6368 23.9743C12.5242 23.9171 12.4268 23.834 12.3525 23.7319C10.5625 21.3147 5.6875 14.3161 5.6875 9.89453C5.6875 6.05496 8.96289 2.9375 13 2.9375Z"
                stroke={color} stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M13 12.6875C11.6538 12.6875 10.5625 11.5962 10.5625 10.25C10.5625 8.90381 11.6538 7.8125 13 7.8125C14.3462 7.8125 15.4375 8.90381 15.4375 10.25C15.4375 11.5962 14.3462 12.6875 13 12.6875Z"
                stroke={color} stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    );
};

export default LocationIcon;