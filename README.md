# SysMango Hugo Theme

A custom Hugo theme featuring a distinctive diamond pattern header with gear graphics and Flickr integration.

## Features

- Responsive design using Tailwind CSS
- Flickr integration for displaying photos
- Diamond pattern header with gear graphics
- "Narcissistic Vanity" sidebar element
- Social media integration

## Installation

1. Clone this repository to your Hugo site's themes directory:
   ```
   git clone https://github.com/yourusername/sysmango-hugo-theme.git themes/sysmango
   ```

2. Add the theme to your site's configuration:
   ```toml
   theme = "sysmango"
   ```

## Configuration

### Flickr Integration

The theme includes integration with Flickr to display the latest image from a specific album in the "Narcissistic Vanity" section of the sidebar.

To enable this feature, you need to:

1. Obtain a Flickr API key from [Flickr App Garden](https://www.flickr.com/services/apps/create/)
2. Add the API key to your site's configuration file:

```toml
[params]
  flickrApiKey = "your-flickr-api-key"
```

By default, the theme will display the latest image from the album with ID `72157602336330353` belonging to user `10271567@N05`. If you want to use a different album, you'll need to modify the `FLICKR_ALBUM_ID` and `FLICKR_USER_ID` variables in the `static/js/flickr-integration.js` file.

## License

This theme is released under the MIT License. See the LICENSE file for details.
