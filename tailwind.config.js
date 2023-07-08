/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    backgroundImage: {
      fallBackImg:
        "url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')",
    },
    // breakpoints cho responsive
    screens: {
      '2xl': { max: '1400px' },
      xl: { max: '1279px' },
      '2lg': { max: '859px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '419px' },
    },
    extend: {
      colors: {
        // Màu trên thành naviation, text chỗ feature trang home ..v
        primary: '#032541',
        // Màu trên thanh % khi điểm cao
        secondary: '#39dcaf',
        // Màu trên thanh % khi điểm trung bình
        medium: '#8a9028',
        info: '#01b4e4',
        // Text chữ nhỏ : ngày tháng năm chỗ movie item
        textMeta: '#666666',
        light: '#ffffff',
        dark: '#081c22',
        // color khi check icon phần movie detail
        themeColor: '#dfefea',
        red: '#cf3131',
        gray: '#dbdbdb',
        lightGray: '#f8f9fa',
        graySoft: '#ececec',
        grayBold: '#ced3db',
        lightGreen: '#1ed5a9',
        lightBlue: '#02b5e1',
        darkBlue: '#032541',
        blueGradient: 'rgba(30,213,169,1)',
        greenGradient: 'rgba(1,180,228,1)',
        toggleBlue: '#c0fecf',
        logoOrange: 'rgba( 253,193,112, 1)',
        logoRed: 'rgba(212,2,66, 1)',
        // datepicker
        graySecond: '#c3b8af',
        grayThird: '#dadee3',
        grayIcon: '#b5b5b5',
        grayButton: '#ececec',
      },
      fontSize: {
        primaryHeader: '48px',
        secondaryHeader: '32px',
        normal: '16px',
      },
      fontWeight: {
        bold: '700',
        semiBold: '600',
      },
      boxShadow: {
        shadowCard: '0 2px 8px rgb(0,0,0,.1)',
      },
      padding: {
        paddingCard: '26px 10px 12px 10px',
      },
      backgroundImage: {
        banner:
          'linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65,0) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg")',
        fromRedtoOrange: 'linear-gradient(to right, rgba(253, 193, 112, 1) 0%, rgba(212, 2, 66, 1) 100%)',
        fromBluetoGreen: 'linear-gradient(to right, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%)',
      },
      width: {
        w150: '150px',
      },
      minWidth: {
        mw150: '150px',
      },
      height: {
        h225: '225px',
      },
      minHeight: {
        mh225: '225px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}
