import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'
import classNames from 'classnames'
import type { PropsWithChildren } from 'react'
import React, { useEffect, useState } from 'react'
import { defineMessages } from 'react-intl'
import type {
  SliderLayoutProps,
  SliderLayoutSiteEditorProps,
} from 'vtex.slider-layout'
import { SliderLayout } from 'vtex.slider-layout'

import styles from './styles.css'

interface ITestimonial {
  id: string
  name: string
  role: string
  testimonial: string
  image: string | ArrayBuffer | null
}

export const Testimonials = ({
  infinite = true,
  showNavigationArrows = 'always',
  showPaginationDots = 'never',
  usePagination = true,
  fullWidth = true,
  arrowSize = 25,
  centerMode = 'disabled',
  centerModeSlidesGap,
  navigationStep = 1,
  itemsPerPage = {
    desktop: 3,
    tablet: 2,
    phone: 1,
  },
}: PropsWithChildren<SliderLayoutProps & SliderLayoutSiteEditorProps>) => {
  const [testimonialsList, SetTestimonialsList] = useState<ITestimonial[]>([])
  const [hasError, SetHasError] = useState<boolean>(false)

  useEffect(() => {
    const url =
      '/api/dataentities/HT/search/?_fields=id,image,name,role,testimonial'

    const request = axios(url, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.vtex.ds.v10+json',
        'Content-Type': 'application/json',
      },
    })

    request
      .then((res: AxiosResponse) => {
        res.data.forEach((item: ITestimonial) => {
          const imagePatch = getImage(item.id, item.image)

          imagePatch
            .then((response: AxiosResponse) => {
              const reader = new FileReader()

              reader.onloadend = () => {
                SetTestimonialsList((oldArray: ITestimonial[]) => {
                  return [...oldArray, { ...item, image: reader.result }]
                })
              }

              reader.readAsDataURL(response.data)
            })
            .catch((error: AxiosError) => {
              console.warn('ocorreu um erro:', error.message)
              SetHasError(true)
            })
        })
      })
      .catch((error: AxiosError) => {
        console.warn('ocorreu um erro:', error.message)
        SetHasError(true)
      })
  }, [])

  function getImage(id: string, imgName: string | ArrayBuffer | null) {
    return axios(
      `/api/dataentities/HT/documents/${id}/image/attachments/${imgName}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.vtex.ds.v10+json',
          'Content-Type': 'application/json',
        },
        responseType: 'blob',
      }
    )
  }

  if (hasError) {
    return null
  }

  if (testimonialsList.length === 0) {
    return (
      <div className={styles['testimonials--skeleton-container']}>
        <div
          className={classNames([
            styles.skeleton,
            styles['testimonials--skeleton-title'],
          ])}
        />
        <div className={styles['testimonials--skeleton-slider-wrapper']}>
          <div className={styles['testimonials--skeleton-wrapper']}>
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-image'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-text'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-name'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-role'],
              ])}
            />
          </div>
          <div
            className={classNames([
              styles['testimonials--skeleton-wrapper'],
              styles['tablet-none'],
            ])}
          >
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-image'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-text'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-name'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-role'],
              ])}
            />
          </div>
          <div
            className={classNames([
              styles['testimonials--skeleton-wrapper'],
              styles['mobile-none'],
            ])}
          >
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-image'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-text'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-name'],
              ])}
            />
            <div
              className={classNames([
                styles.skeleton,
                styles['testimonials--skeleton-role'],
              ])}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['testimonials--container']}>
      <h4 className={styles['testimonials--title']}>CLIENT TESTIMONIALS</h4>

      <SliderLayout
        showNavigationArrows={showNavigationArrows}
        showPaginationDots={showPaginationDots}
        itemsPerPage={itemsPerPage}
        infinite={infinite}
        usePagination={usePagination}
        fullWidth={fullWidth}
        arrowSize={arrowSize}
        centerMode={centerMode}
        centerModeSlidesGap={centerModeSlidesGap}
        navigationStep={navigationStep}
      >
        {testimonialsList.map((item: ITestimonial, index: number) => {
          return (
            <div
              className={styles['testimonials--content-wrapper']}
              key={index}
            >
              <div>
                <div className={styles['testimonials--content-image']}>
                  {typeof item.image === 'string' && (
                    <img src={item.image} alt="" />
                  )}
                </div>
                <p className={styles['testimonials--content-testimonial']}>
                  {item.testimonial}
                </p>
              </div>
              <p className={styles['testimonials--content-name']}>
                {item.name}
              </p>
              <p className={styles['testimonials--content-role']}>
                {item.role}
              </p>
            </div>
          )
        })}
      </SliderLayout>
    </div>
  )
}

const messages = defineMessages({
  sliderTitle: {
    id: 'admin/editor.testimonials.title',
    defaultMessage: '',
  },
  sliderInfinite: {
    id: 'admin/editor.testimonials.infinite',
    defaultMessage: '',
  },
  sliderShowNavigation: {
    id: 'admin/editor.testimonials.showNavigation',
    defaultMessage: '',
  },
  sliderShowPaginationDots: {
    id: 'admin/editor.testimonials.showPaginationDots',
    defaultMessage: '',
  },
  sliderUsePagination: {
    id: 'admin/editor.testimonials.usePagination',
    defaultMessage: '',
  },
  sliderFullWidth: {
    id: 'admin/editor.testimonials.sliderFullWidth',
    defaultMessage: '',
  },
  sliderFullWidthDescription: {
    id: 'admin/editor.testimonials.sliderFullWidthDescription',
    defaultMessage: '',
  },
})

Testimonials.schema = {
  title: messages.sliderTitle.id,
  type: 'object',
  properties: {
    autoplay: {
      type: 'object',
      isLayout: true,
      properties: {
        timeout: {
          type: 'number',
        },
        stopOnHover: {
          type: 'boolean',
        },
      },
    },
    itemsPerPage: {
      type: 'object',
      isLayout: true,
      properties: {
        desktop: {
          default: 3,
          type: 'number',
        },
        tablet: {
          default: 2,
          type: 'number',
        },
        phone: {
          default: 1,
          type: 'number',
        },
      },
    },
  },
}
