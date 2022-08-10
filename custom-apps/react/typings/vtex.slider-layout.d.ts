declare module 'vtex.slider-layout' {
  export const SliderLayout: FC<SliderLayoutProps & SliderLayoutSiteEditorProps>

  export interface SliderLayoutSiteEditorProps {
    infinite?: boolean
    showNavigationArrows?: 'mobileOnly' | 'desktopOnly' | 'always' | 'never'
    showPaginationDots?: 'mobileOnly' | 'desktopOnly' | 'always' | 'never'
    usePagination?: boolean
    fullWidth?: boolean
    arrowSize?: ResponsiveValuesTypes.ResponsiveValue<number>
  }

  export interface SliderLayoutProps {
    totalItems?: number
    label?: string
    slideTransition?: {
      speed: number
      delay: number
      timing: string
    }
    autoplay?: {
      timeout: number
      stopOnHover?: boolean
    }
    navigationStep?: number | 'page'
    itemsPerPage?: ResponsiveValuesTypes.ResponsiveValue<number>
    centerMode?: ResponsiveValuesTypes.ResponsiveValue<
      'center' | 'to-the-left' | 'disabled'
    >
    centerModeSlidesGap?: number
  }
}
