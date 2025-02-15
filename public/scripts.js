document.addEventListener('DOMContentLoaded', () => {
    loadFeed();
    loadExplore();
    loadNotifications();
});

async function loadFeed() {
    const feedContent = document.getElementById('posts');
    const response = await fetch('http://localhost:5000/api/posts');
    const posts = await response.json();
    
    let postsHtml = '';
    posts.forEach(post => {
        postsHtml += `
            <div class="post">
                <h3>${post.username}</h3>
                <p>${post.content}</p>
            </div>
        `;
    });
    
    feedContent.innerHTML = postsHtml;
}

function loadExplore() {
    const exploreContent = document.getElementById('explore');
    exploreContent.innerHTML = '<p>Trending topics will be displayed here.</p>';
}

function loadNotifications() {
    const notificationsContent = document.getElementById('notifications');
    notificationsContent.innerHTML = '<p>Your notifications will be displayed here.</p>';
}