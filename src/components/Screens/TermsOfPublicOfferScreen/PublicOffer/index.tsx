import React, {useEffect, useState} from "react";
import * as S from "./index.styles";
const PublicOffer = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // Fetch the HTML file
        fetch('/publicOffer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load HTML file');
                }
                return response.text();
            })
            .then(html => {
                // Decode the HTML content with UTF-8 encoding
                const decoder = new TextDecoder('utf-8');
                const decodedHtml = decoder.decode(new TextEncoder().encode(html));
                setHtmlContent(decodedHtml);
            })
            .catch(error => {
                console.error('Error loading HTML file:', error);
            });
    }, []);

  return (
    <S.PublicOfferContainer>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </S.PublicOfferContainer>
  );
};

export default PublicOffer;


