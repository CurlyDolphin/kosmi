'use client'
import AllLink from '@/components/elements/AllLink/AllLink'
import useImagePreloader from '@/hooks/useImagePreloader'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import img1 from '@/public/img/categories-img-1.jpg'
import img2 from '@/public/img/categories-img-2.jpg'
import img3 from '@/public/img/categories-img-3.jpg'
import img4 from '@/public/img/categories-img-4.jpg'
import styles from '@/styles/main-page/index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import MainSlider from '../MainSlider'

const Categories = () => {
  const { lang, translations } = useLang()
  const isMedia490 = useMediaQuery(490)
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
  const imgSpinnerClass = imgSpinner ? styles.img_loading : ''

  const images = [
    {
      src: img1,
      id: 1,
      title: translations[lang].main_page.category_souvenirs,
    },
    {
      src: img2,
      id: 2,
      title: translations[lang].main_page.category_accessories,
    },
    {
      src: img3,
      id: 3,
      title: translations[lang].main_page.category_cloth,
    },
    { src: img4, id: 4, title: translations[lang].main_page.category_office },
  ]

  return (
    <section className={styles.categories}>
      <div className={`container ${styles.categories__container}`}>
        <h2 className={`site-title ${styles.categories__title}`}>
          {translations[lang].main_page.category_title}
        </h2>
        <div className={styles.categories__inner}>
          <AllLink />
          {!isMedia490 && (
            <>
              <Link
                href='/catalog/souvenirs'
                className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
              >
                <Image
                  src={img1}
                  alt='Духи'
                  className='transition-opacity opacity-0 duration'
                  onLoad={handleLoadingImageComplete}
                  width='500'
                  height='500'
                />
                <span>{translations[lang].main_page.category_souvenirs}</span>
              </Link>
              <div className={styles.categories__left}>
                <div className={styles.categories__left__top}>
                  <Link
                    href='/catalog/accessories'
                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={img2}
                      alt='Accessories'
                      className='transition-opacity opacity-0 duration'
                      onLoad={handleLoadingImageComplete}
                      width='250'
                      height='250'
                    />
                    <span>
                      {translations[lang].main_page.category_accessories}
                    </span>
                  </Link>
                  <Link
                    href='/catalog/cloth'
                    className={`${styles.categories__left__top__left} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={img3}
                      alt='Souvenirs'
                      className='transition-opacity opacity-0 duration'
                      onLoad={handleLoadingImageComplete}
                      width='250'
                      height='250'
                    />
                    <span>{translations[lang].main_page.category_cloth}</span>
                  </Link>
                </div>
                <Link
                  href='/catalog/office'
                  className={`${styles.categories__left__bottom} ${styles.categories__img} ${imgSpinnerClass}`}
                >
                  <Image
                    src={img4}
                    alt='Косметика'
                    className='transition-opacity opacity-0 duration'
                    onLoad={handleLoadingImageComplete}
                    width='530'
                    height='250'
                  />
                  <span>{translations[lang].main_page.category_office}</span>
                </Link>
              </div>
            </>
          )}
          {isMedia490 && <MainSlider images={images} />}
        </div>
      </div>
    </section>
  )
}

export default Categories
