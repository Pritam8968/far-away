export default function Stats({ items }) {
  if (!items.length)
    return (
      <section className="stats">
        <em>Start adding some items in your packing list 🚀.</em>
      </section>
    );
  const numsItems = items.length;
  const numPackedItems = items.filter(item => item.packed).length;
  const packedPercent = Math.round((numPackedItems / numsItems) * 100);
  return (
    <section className="stats">
      <em>
        {packedPercent === 100 ? (
          <>
            You got everything! Ready to go{' '}
            <img src="airline.png" style={{ height: '1em' }} /> .
          </>
        ) : (
          `💼 You have ${numsItems} items on your list and you already packed
        ${numPackedItems} (${packedPercent}%).`
        )}
      </em>
    </section>
  );
}
