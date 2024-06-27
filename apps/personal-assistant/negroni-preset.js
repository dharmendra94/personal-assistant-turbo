// @ts-check
/** @satisfies {Omit<import('tailwindcss').Config, "content">} */
const config = {
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          accent: "#F7F7F7",
        },
        black: {
          DEFAULT: "#000000",
          100: "#F4F6F8",
          200: "#E5E9EF",
          400: "#C6CCD5",
          600: "#6F7782",
          800: "#545A64",
          900: "#2A384D",
          1000: "#000000",
        },
        blue: {
          DEFAULT: "#0066FF",
          100: "#E6F0FF",
          200: "#99C2FF",
          300: "#82C0FF",
          400: "#2E82FF",
          500: "#0066FF",
          600: "#0033FF",
          700: "#0000CC",
          800: "#030084",
        },
        teal: {
          DEFAULT: "#00EAC3",
          100: "#E9FEFA",
          200: "#C5FFF0",
          400: "#68F6DB",
          500: "#00EAC3",
          600: "#00D3B0",
          700: "#00BB9C",
        },
        red: {
          DEFAULT: "#E90661",
          100: "#FEEBF2",
          200: "#FFE0EB",
          300: "#FECDE1",
          400: "#FCB1CE",
          500: "#FF6699",
          600: "#E90661",
          700: "#C70854",
          800: "#AA0547",
        },
        periwinkle: {
          DEFAULT: "#867DFF",
          300: "#BFBDFF",
          400: "#9797FF",
          500: "#867DFF",
        },
        gray: {
          100: "#F4F6F8",
          200: "#E5E9EF",
          300: "#D7DBE2",
          400: "#C6CCD5",
          500: "#9EA3AA",
          600: "#6F7782",
          700: "#63666B",
          800: "#545A64",
          900: "#2A384D",
        },
        // Negroni Palette
        brand: {
          25: "var(--color-brand-25)",
          50: "var(--color-brand-50)",
          100: "var(--color-brand-100)",
          200: "var(--color-brand-200)",
          300: "var(--color-brand-300)",
          400: "var(--color-brand-400)",
          500: "var(--color-brand-500)",
          600: "var(--color-brand-600)",
          700: "var(--color-brand-700)",
          800: "var(--color-brand-800)",
          900: "var(--color-brand-900)",
          DEFAULT: "var(--color-brand-500)",
        },
        neutral: {
          0: "var(--color-neutral-0)",
          25: "var(--color-neutral-25)",
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          DEFAULT: "var(--color-neutral-800)",
        },
        success: {
          25: "var(--color-success-25)",
          50: "var(--color-success-50)",
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
          500: "var(--color-success-500)",
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
          800: "var(--color-success-800)",
          900: "var(--color-success-900)",
          DEFAULT: "var(--color-success-500)",
        },
        error: {
          25: "var(--color-error-25)",
          50: "var(--color-error-50)",
          100: "var(--color-error-100)",
          200: "var(--color-error-200)",
          300: "var(--color-error-300)",
          400: "var(--color-error-400)",
          500: "var(--color-error-500)",
          600: "var(--color-error-600)",
          700: "var(--color-error-700)",
          800: "var(--color-error-800)",
          900: "var(--color-error-900)",
          DEFAULT: "var(--color-error-500)",
        },
        accent1: {
          50: "var(--color-accent1-50)",
          100: "var(--color-accent1-100)",
          200: "var(--color-accent1-200)",
          300: "var(--color-accent1-300)",
          400: "var(--color-accent1-400)",
          500: "var(--color-accent1-500)",
          600: "var(--color-accent1-600)",
          700: "var(--color-accent1-700)",
          800: "var(--color-accent1-800)",
          900: "var(--color-accent1-900)",
          DEFAULT: "var(--color-accent1-100)",
        },
        accent2: {
          50: "var(--color-accent2-50)",
          100: "var(--color-accent2-100)",
          200: "var(--color-accent2-200)",
          300: "var(--color-accent2-300)",
          400: "var(--color-accent2-400)",
          500: "var(--color-accent2-500)",
          600: "var(--color-accent2-600)",
          700: "var(--color-accent2-700)",
          800: "var(--color-accent2-800)",
          900: "var(--color-accent2-900)",
          DEFAULT: "var(--color-accent2-500)",
        },
        accent3: {
          25: "var(--color-accent3-25)",
          50: "var(--color-accent3-50)",
          100: "var(--color-accent3-100)",
          200: "var(--color-accent3-200)",
          300: "var(--color-accent3-300)",
          400: "var(--color-accent3-400)",
          500: "var(--color-accent3-500)",
          600: "var(--color-accent3-600)",
          700: "var(--color-accent3-700)",
          800: "var(--color-accent3-800)",
          900: "var(--color-accent3-900)",
          DEFAULT: "var(--color-accent3-500)",
        },
        //
        form: {
          DEFAULT: "#F5F6F8",
          hover: "#E5E9EF",
          placeholder: "#6F7782",
        },
        focus: "#408DFF",
        scrim: "var(--color-scrim)",
        current: "currentColor",
      },
      boxShadow: {
        modalContent: "inset 0px 1px 2px -1px rgba(0, 0, 0, 0.14)",
        "level-0": "0px 0px 0px rgba(37, 36, 36, 0)",
        "level-1": "0px 1px 8px rgba(37, 36, 36, 0.04)",
        "level-2": "0px 4px 12px rgba(37, 36, 36, 0.08)",
        "level-3": "0px 4px 16px rgba(37, 36, 36, 0.12)",
        "level-4": "0px 8px 12px rgba(37, 36, 36, 0.16)",
      },
      // sizing
      height: {
        15: "3.75rem",
        30: "7.5rem",
      },
      maxHeight: {
        480: "480px",
      },
      width: {
        navigation: "280px",
        // negroniNavigation in spacing for use in placement too
        15: "3.75rem",
        30: "7.5rem",
      },
      minWidth: {
        radio: "1.5rem",
        "icon-medium": "1.5rem",
      },
      maxWidth: {
        134: "134px",
        210: "210px",
        300: "300px",
        480: "480px",
        content: "1032px",
        "app-content": "1016px",
      },
      spacing: {
        negroniNavigation: "212px",
        negroniNavigationCollapsed: "48px",
        // Derived from negroniNavigation after removing padding
        negroniInnerNavigation: "195px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
        "2xl": "1600px",
        short: { raw: "(min-height: 603px)" },
      },
      outlineOffset: {
        inner: "-2px",
      },
      gridTemplateColumns: {
        6: "repeat(6, 1fr)",
      },
      // typography
      fontFamily: {
        sans: "var(--sans-serif-font-family)",
        serif: "var(--serif-font-family)",
        display: "var(--sans-serif-font-family)",
        body: "var(--sans-serif-font-family)",
        base: "var(--sans-serif-font-family)",
      },
      fontSize: {
        // Assigning a Line Height to a Font size to match GLO requirements: see https://tailwindcss.com/docs/font-size#providing-a-default-line-height
        0: ["0", "0px"],
        10: ["10px", "16px"],
        12: ["12px", "20px"],
        14: ["14px", "20px"],
        16: ["16px", "24px"],
        18: ["18px", "28px"],
        24: ["24px", "32px"],
        28: ["28px", "36px"],
        32: ["32px", "40px"],
        36: ["36px", "44px"],
        40: ["40px", "48px"],
        48: ["40px", "56px"],
        60: ["40px", "72px"],
        "headline-1": [
          "8rem",
          {
            lineHeight: "8.75rem",
            letterSpacing: "-.125rem",
          },
        ],
        "headline-2": [
          "6rem",
          {
            lineHeight: "7rem",
            letterSpacing: "-.125rem",
          },
        ],
        "headline-3": [
          "5rem",
          {
            lineHeight: "5.75rem",
            letterSpacing: "-.125rem",
          },
        ],
        "headline-4": [
          "4rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "-.09rem",
          },
        ],
        "headline-5": [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-.0625rem",
          },
        ],
        "headline-6": [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-.05rem",
          },
        ],
        "body-1": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-.025rem",
          },
        ],
        "body-2": [
          ".875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-.025rem",
          },
        ],
        "title-1": [
          "2rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-.05rem",
          },
        ],
        "title-2": [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-.0375rem",
          },
        ],
        "title-3": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-.025rem",
          },
        ],
        label: [
          ".75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-.0125rem",
          },
        ],
        link: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-.025rem",
          },
        ],
        footnote: [
          ".75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-.0125rem",
          },
        ],
      },
      letterSpacing: {
        // Very small numbers but it comes from GLO: https://legalzoom.invisionapp.com/dsm/legalzoom/1-pattern-book/nav/5fa7cb008c01200018354734/folder/5eaeed3e1608e012ef6054b5?version=618171f095c73913f6402a82&mode=preview
        "0point16": "0.16px",
        "0point14": "0.14px",
        "neg-0point2": "-0.2px",
        "neg-0point35": "-0.35px",
        "neg-0point4": "-0.4px",
        "neg-0point48": "-0.48px",
        "neg-0point6": "-0.6px",
        "neg-0point64": "-0.64px",
        "neg-0point7": "-0.7px",
        "neg-1point12": "-1.12px",
        "neg-1point52": "-1.52px",
        "neg-1point55": "-1.55px",
        "neg-2point81": "-2.81px",
      },
      // animation
      keyframes: {
        "spinner-spin": {
          "0%, 25%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(270deg)" },
        },
        // cast to any to avoid type error
        "spinner-draw": /** @type {Record<string, Record<string, any>>} */ ({
          "0%, 1%": { "stroke-dashoffset": 189 },
          "50%": { "stroke-dashoffset": 141.75 },
          "99%, 100%": { "stroke-dashoffset": 189 },
        }),
        "slide-in": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "slide-in-out": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-horizontal": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-horizontal": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-down-fade-in": {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up-fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
        "fade-in-grow": {
          "0%": { opacity: "0", transform: "scale(.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        spinner:
          "spinner-spin 1.4s ease-in-out infinite, spinner-draw 1.4s ease-in-out infinite",
        "slide-in": "slide-in var(--animation-duration) forwards",
        "slide-out": "slide-out var(--animation-duration) forwards",
        "fade-in": "fade-in var(--animation-duration) forwards",
        "fade-out": "fade-out var(--animation-duration) forwards",
        "fade-in-grow": "fade-in-grow var(--animation-duration) ease-in-out",
        "fade-in-grow-200ms": "fade-in-grow 200ms ease-in-out",
        "slide-in-out-infinite": "slide-in-out 1.5s infinite ease-in-out",
        "slide-in-horizontal": "slide-in-horizontal 300ms forwards",
        "slide-out-horizontal": "slide-out-horizontal 300ms forwards",
        "fade-in-300ms": "fade-in 300ms forwards",
        "fade-out-300ms": "fade-out 300ms forwards",
        "slide-down-fade-in":
          "slide-down-fade-in var(--animation-duration) forwards",
        "slide-up-fade-out":
          "slide-up-fade-out var(--animation-duration) forwards",
      },
      transitionTimingFunction: {
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        "ease-out": "cubic-bezier(0.1, 0.4, 0.4, 1)",
        "ease-in": "cubic-bezier(0.35, 0, 1, 1)",
        "ease-in-out": "cubic-bezier(0.5, 0, 0.35, 1)",
      },
      transitionDelay: {
        250: "250ms",
      },
      transitionDuration: {
        750: "750ms",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
};

module.exports = config;
