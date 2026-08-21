/**
 * Company contact & location constants — single source of truth.
 * Update here and all components will reflect the change automatically.
 */

export const COMPANY = {
  name: 'Neuerung HealthTech Private Limited',
  shortName: 'Neuerung HealthTech',

  address: {
    line1: '7/64, II Floor, Wellington Road',
    line2: 'NGGO Colony, Nagamalai',
    line3: 'Madurai South, Madurai',
    state: 'Tamil Nadu – 625019',
    country: 'India',
    full: '7/64, II Floor, Wellington Road, NGGO Colony, Nagamalai, Madurai South, Madurai, Tamil Nadu – 625019, India',
  },

  /** Precise coordinates for 625019 — NGGO Colony, Nagamalai, Madurai */
  location: {
    lat: 9.9295,
    lng: 78.0452,
  },

  /**
   * Google Maps embed URL — zoomed to street level (zoom=17) at the exact coordinates.
   * q= pins the address on the map.
   */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.5936793506!2d78.04520!3d9.92950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNDYuMiJOIDc4wrAwMicyMi43IkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',

  /**
   * Google Maps Directions URL — opens navigation to the exact pin.
   */
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=9.9295,78.0452&travelmode=driving',

  /**
   * Google Maps Place URL — opens the pin directly on Google Maps.
   */
  placeUrl:
    'https://www.google.com/maps/search/?api=1&query=7%2F64+Wellington+Road+NGGO+Colony+Nagamalai+Madurai+Tamil+Nadu+625019',

  contact: {
    email1: 'healthtech@neuerung.in',
    email2: 'neuerunghealthtech@gmail.com',
    phone: '+91 638 155 7889',
    gstin:'33AALCN3327R1ZY',
    website: 'https://neuerung.in',
  },
};
