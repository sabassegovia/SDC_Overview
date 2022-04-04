import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const ImageCarousel = (props) => {
  const {children} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)


  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  var photos = props.selectedStyle.photos.map(photo => {
    return photo.url
  })

  return (
    <main className = "carousel-container">
      <div className = "carousel-wrapper">
      <button
        onClick = {prev}
        className="left-arrow">
        &lt;
      </button>
        <div className = "carousel-content-wrapper">
          <div
          className = "carousel-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}

          </div>

        </div>
      <button
        onClick = {next}
        className="right-arrow">
        &gt;
      </button>
      </div>



    </main>
  )

}

ImageCarousel.propTypes = {
  selectedStyle: PropTypes.object,
  children: PropTypes.array,
}


export default ImageCarousel