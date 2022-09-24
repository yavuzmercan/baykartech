export default function CounterItem(props) {
  return (
    <div className="flex flex-col items-center p-5 mb-10 md:mb-0">
      <h3 className="text-white mb-5 font-bold text-5xl">{props.value}</h3>
      <p className="text-white text-xl font-normal">{props.text}</p>
    </div>
  );
}
