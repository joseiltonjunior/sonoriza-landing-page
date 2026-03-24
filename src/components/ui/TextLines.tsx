import { Fragment } from 'react';

type TextLinesProps = {
  text: string | readonly string[];
};

export function TextLines({ text }: TextLinesProps) {
  if (!Array.isArray(text)) {
    return <>{text}</>;
  }

  return (
    <>
      {text.map((line, index) => (
        <Fragment key={`${line}-${index}`}>
          {index > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </>
  );
}
