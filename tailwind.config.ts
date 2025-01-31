import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'onSurface': '#fff',
        'primary': '#39545D',
        'grayColor': '#626262',
        'grayColor600': '#52525B',
        'graySubText': '#52525B',
        'blackText': '#191C1F',
        'bgBrimary': '#FCFDFF',
        'bgGrayText50': '#FAFAFA',
        'bgGrayText100': '#F4F4F5',
        'bgGrayText300': '#D1D5DB',
        'bgGrayText400': '#A1A1AA',
        'bgGrayText500': '#6B7280',
        'bgGrayText600': '#4B5563',
        'bgGrayText700': '#3F3F46',
        'bgGrayText800': '#27272A',
        'bgGrayText900': '#18181B',
        'borderGray': '#DADADA',
        'borderGray200': '#E4E4E7',
        'borderLine': '#75888E',
        'borderLineGray': '#9DABAF',
        'borderAsk': '#E7EAEC',
        'secondary': '#EB8F3C',
        'lightGrayColor': '#848484',
        'blackSubText': '#1A1A1A',
        'blackColor': '#11313C',
        'JODColor': '#BDBDBD',
        'captionColor': '#808080',
        'yellowLightColor': '#EB8F3C1A',
        'pinkLightColor': '#F13A3A26',
        'borderGrayColor': '#E4E7E9',
        'redColor': '#DB4444',
        'redColor600': '#DC2626',
        'success': '#62BA7B'
      },
    },
  },
  plugins: [],
} satisfies Config;
