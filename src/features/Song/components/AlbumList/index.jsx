import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

AlbumList.propTypes = {
   albumList: PropTypes.array,
};

AlbumList.defaultProps = {
   albumList: [],
};

function AlbumList({ albumList }) {
   return (
      <div className="container">
         {albumList.map((album) => (
            <Album key={album.id} album={album} />
         ))}
      </div>
   );
}

export default AlbumList;
