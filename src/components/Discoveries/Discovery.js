import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Discovery = ({ discovery }) => {
  const { name, slug, location, images } = discovery

  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage}
          className={styles.img}
          alt="single discovery"
        />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>{location}</h4>
        </div>
      </div>
    </article>
  )
}

export default Discovery
