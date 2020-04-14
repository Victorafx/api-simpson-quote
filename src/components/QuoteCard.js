import React from 'react';
import './QuoteCard.css';


function QuoteCard({quote})  {
    return(
    <figure className="QuoteCard">
      <img src={quote.image} />
      <figcaption>
        <blockquote>{quote.quote}</blockquote>
        <p>
          <cite>{quote.character}</cite>
        </p>
      </figcaption>
    </figure>
    )
  };

export default QuoteCard;