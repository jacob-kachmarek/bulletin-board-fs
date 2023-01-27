/* Imports */
import { getPosts, getUser, signOut, checkAuth } from './fetch-utils.js';
import { renderPosts } from './render-functions.js';

/* Get DOM Elements */
const postsEl = document.getElementById('posts');
const signInButton = document.getElementById('sign-in-button');
const createPageButton = document.getElementById('create-page-button');

/* State */
let postsArray = [];

/* Events */
window.addEventListener('load', async () => {
    const user = await getUser();
    if (user) {
        signInButton.textContent = 'log out';
    }
    const postsData = await getPosts();
    postsArray = postsData;
    // console.log(postsArray);
    displayPosts();
});

signInButton.addEventListener('click', () => {
    if (getUser()) signOut();
    window.location.href = './auth';
});

createPageButton.addEventListener('click', async () => {
    window.location.href = './create';
});

/* Display Functions */
function displayPosts() {
    postsEl.textContent = '';
    for (let post of postsArray) {
        const postsReturn = renderPosts(post);
        postsEl.append(postsReturn);
    }
}

// (don't forget to call any display functions you want to run on page load!)
