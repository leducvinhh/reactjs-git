import React from 'react';
import AlbumList from './components/AlbumList';

const AlbumFeature = () => {
   const albumList = [
      {
         id: 1,
         name: 'Top 100 nhạc Hàn Quốc Hay Nhất',
         image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg',
      },
      {
         id: 2,
         name: 'Top 100 nhạc Pop Âu Mỹ Hay Nhất',
         image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/5/4/7/95473f42319ac6c5e4934ea446534a86.jpg',
      },
      {
         id: 3,
         name: 'Top 100 nhạc Rap Việt Hay Nhất',
         image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg',
      },
   ];
   return (
      <div>
         <AlbumList albumList={albumList} />
      </div>
   );
};

export default AlbumFeature;
