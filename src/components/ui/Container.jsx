// Centered content column. 1160px matches the editorial design's max width.
export default function Container({ as: As = 'div', className = '', children, ...rest }) {
  return (
    <As className={`mx-auto w-full max-w-[1160px] px-6 sm:px-8 lg:px-10 ${className}`} {...rest}>
      {children}
    </As>
  );
}
