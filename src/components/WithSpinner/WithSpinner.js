import React from 'react'
import './WithSpinner.scss'

const WithSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className="spinner-overlay">
                <div className="spinner-container"></div>
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner
}

export default WithSpinner
