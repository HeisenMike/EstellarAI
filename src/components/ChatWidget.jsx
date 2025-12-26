import React, { useEffect } from 'react';

const ChatWidget = () => {
    useEffect(() => {
        // Check if the script is already added
        if (document.querySelector('script[data-widget-id="694f07c5261ca18f36b342d8"]')) {
            return;
        }

        const script = document.createElement('script');
        script.src = "https://widgets.leadconnectorhq.com/loader.js";
        script.setAttribute('data-resources-url', "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
        script.setAttribute('data-widget-id', "694f07c5261ca18f36b342d8");
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Optional: Cleanup if you wanted to remove the widget on unmount, 
            // but usually chat widgets stay once loaded.
        };
    }, []);

    return null; // This component doesn't render any visible DOM itself
};

export default ChatWidget;
