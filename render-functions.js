export function renderPosts(post) {
    const div = document.createElement('div');
    const titleEl = document.createElement('h2');
    const descriptionEl = document.createElement('p');
    const contactEl = document.createElement('p');

    titleEl.textContent = post.title;
    descriptionEl.textContent = post.description;
    contactEl.textContent = post.contact;

    titleEl.append(descriptionEl, contactEl);
    div.append(titleEl);
    return div;
}
