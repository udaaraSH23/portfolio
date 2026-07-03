import { m } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
}

export const WordReveal = ({ text, className = '' }: TextRevealProps) => {
  const words = text.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <m.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </m.span>
      ))}
    </span>
  );
};

