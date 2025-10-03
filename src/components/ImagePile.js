import './ImagePile.css';

export default function ImagePile() {
  return (
    <div className='wrapper'>
      <div className='ground' />
      <img className='img1' src="/palmtree.png" alt="palmtree-1" />
      <img className='img2' src="/palmtree.png" alt="palmtree-2" />
      <img className='img3' src="/grass.png" alt="grass" />
      <img className='img4' src="/elephant.png" alt="elephant" />
      <img className='img5' src="/palmtree.png" alt="palmtree-3" />
    </div>
  );
}
