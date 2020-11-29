import React from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';


class Publi extends React.Component {

  render() {
    return (

      <FacebookProvider appId="https://www.facebook.com/bateauxmouchesparis">
        <EmbeddedPost href="https://www.facebook.com/bateauxmouchesparis/photos/a.226002634428592/774406026254914/" width="100" />
      </FacebookProvider>
    );
  }
}
export default Publi;


