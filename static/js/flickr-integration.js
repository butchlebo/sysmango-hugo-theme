document.addEventListener('DOMContentLoaded', function() {
    const FLICKR_ALBUM_ID = '72157602336330353';
    const FLICKR_USER_ID = '10271567@N05';
    
    async function getLatestFlickrPhoto() {
        if (!window.FLICKR_API_KEY) {
            console.error('Flickr API key not found');
            return;
        }

        try {
            // Get photos from the specific album
            const response = await fetch(
                `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${window.FLICKR_API_KEY}&photoset_id=${FLICKR_ALBUM_ID}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1&extras=url_m`
            );
            
            const data = await response.json();
            if (data.stat !== 'ok') {
                throw new Error('Failed to fetch Flickr photos');
            }

            // Get the latest photo
            const latestPhoto = data.photoset.photo[0];
            
            // Update the image and link
            const imgElement = document.querySelector('#flickr-latest img');
            const linkElement = document.querySelector('#flickr-latest-link');
            
            if (imgElement && linkElement) {
                imgElement.src = latestPhoto.url_m;
                imgElement.alt = latestPhoto.title;
                linkElement.href = `https://www.flickr.com/photos/${FLICKR_USER_ID}/${latestPhoto.id}`;
            }
        } catch (error) {
            console.error('Error fetching Flickr photo:', error);
        }
    }

    // Initialize Flickr integration
    getLatestFlickrPhoto();
});
