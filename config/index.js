const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://orca-app-qmsbt.ondigitalocean.app'


export const localbackend = 'http://erick:1337';

export const productionbackend = 'https://orca-app-qmsbt.ondigitalocean.app';

export const backend = productionbackend;

