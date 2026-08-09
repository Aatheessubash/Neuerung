---
name: Neuerung HealthTech
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424751'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727782'
  outline-variant: '#c2c6d3'
  surface-tint: '#215eac'
  primary: '#003772'
  on-primary: '#ffffff'
  primary-container: '#004e9c'
  on-primary-container: '#a1c2ff'
  inverse-primary: '#aac7ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#003d54'
  on-tertiary: '#ffffff'
  tertiary-container: '#005574'
  on-tertiary-container: '#69ccff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  surface-white: '#FFFFFF'
  border-subtle: '#E2E8F0'
typography:
  headline-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system for Neuerung HealthTech is engineered for "Clinical Precision," catering to a premium B2B medical audience. The personality is authoritative yet approachable, blending high-level corporate reliability with modern tech-forward fluidity. 

The aesthetic is characterized by **Medical Minimalism with Glassmorphism**. It utilizes expansive white space, ultra-soft depth, and semi-transparent layers to evoke a sense of clarity and cleanliness. The "Fingertip" influence introduces high-end tactile smoothness through exaggerated corner radii and airy layouts, ensuring the interface feels like a sophisticated diagnostic tool rather than a legacy enterprise portal.

## Colors
The palette is rooted in medical trust and digital innovation. 
- **Deep Royal Blue** serves as the primary anchor for actions and branding, symbolizing stability and expertise.
- **Slate Navy** is reserved for high-contrast text and deep structural elements.
- **Sky Blue** acts as a vibrant highlight, used sparingly for indicators, focus states, and data visualization accents.
- **Light Slate** and **Pure White** form a layered background strategy, where White surfaces sit atop Slate backgrounds to create a clear informational hierarchy.

## Typography
The system uses **Plus Jakarta Sans** for headings (a contemporary, more approachable alternative to Poppins that fits the "Fingertip" aesthetic) and **Inter** for body copy to ensure maximum legibility for clinical data.

Headings should use tight letter-spacing and bold weights to command attention. Body text is optimized for long-form reading with generous line heights. Labels use an uppercase treatment with increased tracking to differentiate metadata from primary content.

## Layout & Spacing
This design system utilizes a **Fixed Grid** system for desktop to maintain a professional, organized structure, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width, 24px gutters, and 48px margins.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.

Spacing follows a strict 8px linear scale. Large-scale layouts should prioritize "breathing room" around glassmorphic cards, using 48px or 64px vertical gaps between major sections to prevent visual clutter in dense medical data environments.

## Elevation & Depth
Depth is achieved through a combination of **Glassmorphism** and **Ambient Shadows**. 

1.  **Base Layer:** Light Slate (#F8FAFC) background.
2.  **Surface Layer:** Pure White cards with a subtle 1px border (#E2E8F0).
3.  **Elevation Layer:** High-priority cards use a soft, extra-diffused shadow tinted with the primary blue (e.g., `rgba(0, 78, 156, 0.05)`) with a 20px-40px blur.
4.  **Overlay Layer:** Modals and navigation bars use a background blur (12px-20px) with 80% opacity white, creating a "frosted glass" effect that maintains context of the data beneath.

## Shapes
The shape language is defined by **Ultra-roundedness**. 
- Main containers and cards utilize a **24px-32px (rounded-3xl)** radius to evoke a soft, modern, and high-tech feel.
- Interactive elements like buttons and input fields follow this logic, often appearing as "pill" shapes. 
- Avoid sharp angles entirely; even secondary elements like tooltips or badges should have a minimum of 8px radius.

## Components
- **Buttons:** Primary buttons are pill-shaped, using the Deep Royal Blue background with white text. Secondary buttons use the Sky Blue as a subtle 10% opacity tint with Primary Blue text.
- **Cards:** White surfaces with 24px corner radius, a 1px Slate-200 border, and the signature Blue-tinted ambient shadow.
- **Input Fields:** Large, 16px font size with 56px height. Borders are 1px Slate-200, turning Primary Blue on focus with a Sky Blue glow (outer shadow).
- **Glass Overlays:** Used for sticky headers and sidebar navigation. Ensure `backdrop-filter: blur(16px)` is applied for a premium feel.
- **Data Chips:** Small, fully rounded capsules. Use Sky Blue with 15% opacity for background and Primary Blue for text to denote categories or status.
- **Status Indicators:** Use soft circular "pips" next to labels; avoid aggressive red/green unless critical, favoring the brand's blue-scale for "normal" diagnostic states.