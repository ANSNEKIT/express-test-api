import App from './app.js';

const boot = async () => {
    const app = new App();
    await app.init();
}

boot();