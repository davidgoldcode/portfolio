import { FC, useState, useRef, useEffect } from "react";
import cx from 'classnames'
import Image from "next/image";
import styles from './Img.module.scss'
import { useOnScreen } from 'utils/useOnScreen'
import Draggable from 'react-draggable';


interface LinkTitleProps {
  href: string;
  text: string;
}
export interface ImgProps {
  src: string;
  alt: string;
  base64: string;
  title?: string;
  description?: string;
  link?: LinkTitleProps;
  hasOverlay?: boolean;
  disableScroll?: boolean;
  className: string;
}

export const Img: FC<ImgProps> = ({
  src,
  alt,
  className,
  hasOverlay = true,
  title,
  description,
  link,
  base64,
  disableScroll = true,
}) => {
  const [hasBeenSeen, setHasBeenSeen] = useState<boolean>(false)
  const [buttonClicked, setButtonClicked] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null);
  const onScreen = useOnScreen(ref, "0px");

  useEffect(() => {
    if (onScreen) {
      setHasBeenSeen(true)
    } else {
      return;
    }
  }, [onScreen])

  return (
    <Draggable
      disabled={disableScroll}
      bounds={'parent'}
      handle={`.${styles.hover_cursor}`}
      onStart={() => setButtonClicked(true)}
      onStop={() => setButtonClicked(false)}
    >
      <div className={cx(className, styles.image_container, { [styles.image_overlay_click]: isClicked })} ref={ref}>
        {/* TODO: Add in blue & blurDataURL */}
        {!disableScroll && <button onClick={() => { }} className={styles.hover_cursor}>{buttonClicked ? <span className={styles.clicked}>🤏</span> : <span>🤚</span>}</button>}
        <Image src={src} alt={alt} layout={'fill'} placeholder={'blur'} blurDataURL={base64} className={styles.image} />
        {hasOverlay && <div className={cx({ [styles.image_overlay]: hasBeenSeen }, 'img-animation')} onClick={() => setIsClicked(!isClicked)}>
          {(title || description) && (
            <>
              {title && <h2>{title}</h2>}
              {description && <p>{description}</p>}
              {link && <a href={link.href}>{link.text}</a>}
            </>
          )
          }
        </div>}
      </div>
    </Draggable>
  );
};

