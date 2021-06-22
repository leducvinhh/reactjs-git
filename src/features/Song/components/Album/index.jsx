import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
   album: PropTypes.object,
};
Album.defaultProps = {
   album: {},
};
function Album({ album }) {
   return (
      <div className="item">
         <div className="image">
            <img src={album.image} alt={album.name} />
         </div>
         <p className="title">{album.name}</p>
      </div>
   );
}

export default Album;
