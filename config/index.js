const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://og-backend-m4e47.ondigitalocean.app'


export const localbackend = 'http://erick:1337';

export const productionbackend = 'https://theogbackend.herokuapp.com';

export const backend = localbackend;

