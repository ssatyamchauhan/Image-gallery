import React from 'react';
import Gallery from './components/Gallery/Gallery';
// import { Link } from "./components/Link/Link";
import galleryData from "./mockData/gallery.json"


export const App = () => {
  return (
    <div className="App">
      {/* <h1>Justified Gallery</h1>
      <h2>Intro</h2>
      <p>Often, a marketplace like <Link href="https://matrimonybazaar.com">ours</Link> requires a gallery component that makes the photos the hero of the page.</p>
      <p>A <Link href="https://www.flickr.com/search/?text=sunrise">justified gallery</Link> like the one <Link href="https://flickr.com" >flickr</Link> popularised makes it easy to display images with varying aspect ratios.
      </p>
      <p><Link href="https://flickr.github.io/justified-layout/">This</Link>library is pretty useful for implementing the layout.</p>

      <h2>Problem Statement</h2>
      <p>Write a component that takes a list of URLs like the one below to create a justified gallery.</p>
      <p>The component to be implemented is in <code>components/Gallery/Gallery.jsx</code></p>
      <p>The data is available in the <code>mockData/gallery.json</code></p> */}
      <Gallery data={galleryData} />
    </div>

  );
}

export default App;
