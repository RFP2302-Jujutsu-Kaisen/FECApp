import React from 'react';

export default function ShareMedia({ style }) {
  // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  // TODO: react-share library npm
  return (
    <div>
      <h3>ShareMedia</h3>
      <div id="tw-root">
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-show-count="false"
          data-text={style.name}
        >
          <button type="button">Twitter</button>
        </a>
      </div>
      <div id="fb-root">
        <script
          async defer crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
          nonce="zzy5sefc"
        >
        </script>
        <div
          className="fb-share-button"
          data-href=""
          data-layout=""
          data-size=""
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            <button type="button">Facebook</button>
          </a>
        </div>
      </div>
      <div id="pin-root">
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
        <a data-pin-do="buttonBookmark" href="https://www.pinterest.com/pin/create/button/">
          <button type="button">Pinterest</button>
        </a>
      </div>
    </div>
  );
}
