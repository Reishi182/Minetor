export default function Avatar({ image }) {
  return (
    <div class="avatar">
      <div class="mt-2 w-10 rounded-full">
        <img src={image} />
      </div>
    </div>
  );
}
