import Image from 'next/image';
import ViewSource from './view-source';

const Background = () => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={bgWrap}>
      <Image
        alt="Mountains"
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
)

export default Background