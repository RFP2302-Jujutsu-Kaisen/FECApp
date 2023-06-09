import React, { useEffect } from 'react';
import styled from 'styled-components';

// css
const RowWrapper = styled.div`
  display: grid;
  grid-template: 100% / 1fr 1fr 28%;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;

const TwitterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FacebookDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PinterestDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ShareMedia({ style }) {
  // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  // TODO: react-share library npm
  // const twitterMarkup = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Hello FEC" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  // <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
  const mediaScripts = [
    { // twitter
      src: 'https://platform.twitter.com/widgets.js',
      async: true,
      charset: 'utf-8',
    },
    { // facebook
      src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0',
      async: true,
      crossorigin: 'anonymous',
      defer: true,
      nonce: 'zzy5sefc',
    },
    {
      src: '//assets.pinterest.com/js/pinit.js',
      async: true,
      defer: true,
    }];

  useEffect(() => {
    const scripts = [];

    mediaScripts.forEach((scriptParams) => {
      const script = document.createElement('script');
      Object.assign(script, scriptParams);
      document.body.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((scriptChild) => {
        document.body.removeChild(scriptChild);
      });
    };
    // <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
  }, []);

  return (
    <RowWrapper>
      <TwitterDiv id="tw-root">
        {/* <pre><code>{twitterMarkup}</code></pre> */}
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-show-count="false"
          data-text={style.name || ''}
        >
          Tweet
        </a>
      </TwitterDiv>
      <PinterestDiv id="pin-root">
        <a data-pin-do="buttonBookmark" href="https://www.pinterest.com/pin/create/button/">
          Save
        </a>
      </PinterestDiv>
      <FacebookDiv id="fb-root">
        <div
          className="fb-share-button"
          data-href=""
          data-layout=""
          data-size=""
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            Share
          </a>
        </div>
      </FacebookDiv>
    </RowWrapper>
  );
}
