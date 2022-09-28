export default function Image({ imagePath, imageAlt }) {
  return (
    <div>
      <img src={imagePath} alt={imageAlt} />
    </div>
  );
}
