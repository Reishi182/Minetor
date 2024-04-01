export default function Accordion({ question, data }) {
  return (
    <div className="collapse join-item collapse-arrow border-b border-base-300 py-2">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content text-gray-700">
        <p>{data}</p>
      </div>
    </div>
  );
}
