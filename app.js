/* Imports */
import { getPosts } from './fetch-utils.js';

/* Get DOM Elements */
const postsEl = document.getElementById('posts');
const signInButton = document.getElementById('sign-in-button');
const createPageButton = document.getElementById('create-page-button');

/* State */
let postsArray = [];

/* Events */
window.addEventListener('load', async () => {
    const postsData = await getPosts();
    postsArray = postsData;
    console.log(postsArray);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
