const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'


export const localbackend = 'http://localhost:1337';

export const productionbackend = 'https://theogbackend.herokuapp.com';

export const backend = localbackend;

