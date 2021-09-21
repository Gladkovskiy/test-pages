import React, {useState, useCallback, useEffect} from 'react'
import classes from './Gallary.module.sass'
import Gallery from 'react-photo-gallery'
import Carousel, {Modal, ModalGateway} from 'react-images'
import {photos} from './photo'

import Loader from '../UI/Loader/Loader'

const Gallary = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.Gallary}>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      )}
    </>
  )
}

export default Gallary
