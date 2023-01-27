import { signUp, signIn } from '../fetch-utils.js';

const signUpEl = document.querySelector('.sign-up');
const signInEl = document.querySelector('.sign-in');

signUpEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpEl);
    await signUp(data.get('email'), data.get('password'));
    window.location.href = '../';
});

signInEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInEl);
    await signIn(data.get('email'), data.get('password'));
    window.location.href = '../';
});
