import { checkAuth, createPost, getUser } from '../fetch-utils.js';
checkAuth();
const createEl = document.querySelector('.create-form');

createEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(createEl);

    const title = formData.get('title');
    const description = formData.get('description');
    const contact = formData.get('contact');

    const post = await createPost(title, description, contact);
    window.location.href = '../';
});
