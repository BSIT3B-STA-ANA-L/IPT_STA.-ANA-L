document.addEventListener("DOMContentLoaded", function () {
    
    // Select social media links by their class names
    const facebookLink = document.querySelector('.social-link.facebook');
    const twitterLink = document.querySelector('.social-link.twitter');
    const instagramLink = document.querySelector('.social-link.instagram'); // Changed LinkedIn to Instagram

    // You can specify the actual URLs for the social media platforms here
    const socialLinks = {
        facebook: 'https://www.facebook.com',
        twitter: 'https://www.twitter.com',
        instagram: 'https://www.instagram.com' // Updated to Instagram URL
    };

    // Add event listeners to each social media link
    if (facebookLink) {
        facebookLink.addEventListener('click', function (event) {
            // Allow the link to navigate to the Facebook URL
            window.location.href = socialLinks.facebook;
        });
    }

    if (twitterLink) {
        twitterLink.addEventListener('click', function (event) {
            // Allow the link to navigate to the Twitter URL
            window.location.href = socialLinks.twitter;
        });
    }

    if (instagramLink) {
        instagramLink.addEventListener('click', function (event) {
            // Allow the link to navigate to the Instagram URL
            window.location.href = socialLinks.instagram; // Redirecting to Instagram now
        });
    }
});
