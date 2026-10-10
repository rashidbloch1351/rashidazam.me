export const contactInfo = {
  phone: {
    display: '+92 327 6434422',
    raw: '+923276434422',
    digits: '923276434422',
    telLink: 'tel:+923276434422',
  },
  whatsapp: {
    number: '923276434422',
    baseUrl: 'https://wa.me/923276434422',
    getLink: (message?: string) => {
      if (!message) return 'https://wa.me/923276434422';
      return `https://wa.me/923276434422?text=${encodeURIComponent(message)}`;
    },
  },
  email: 'rashidbloch1351@gmail.com',
};
