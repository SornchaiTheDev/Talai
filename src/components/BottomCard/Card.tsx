import { BiBus } from "react-icons/bi";
interface CardProps {
  line: number;
  nextStop: string;
  time: number;
}
const getBusColor = (line: number) => {
  if (line === 1) return "bg-red-200 text-red-500";
  if (line === 2) return "bg-blue-200 text-blue-500";
  if (line === 3) return "bg-green-200 text-green-500";
  if (line === 4) return "bg-amber-200 text-amber-500";
  if (line === 5) return "bg-neutral-200 text-neutral-500";
};
const getTimeColor = (time: number) => {
  if (time > 10) return "text-red-500";
  if (time > 5) return "text-orange-500";
  return "text-lime-500";
};
function Card({ line, nextStop, time }: CardProps) {
  const color = getBusColor(line);
  const timeColor = getTimeColor(time);
  return (
    <div className="bg-white w-[350px] rounded-lg shadow-xl px-4 py-2  flex justify-between items-center flex-shrink-0">
      <div className="flex items-center gap-4">
        <div className={`${color} p-2 rounded-full`}>
          <BiBus size="1.5rem" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2">
            <h4 className="text-lg">รถตะลัย</h4>
            <span
              className={`rounded-full ${color} text-sm px-2`}
            >
              สาย {line}
            </span>
          </div>
          <div className="w-48">
            <h5>
              ป้ายต่อไป <span className="font-bold">{nextStop}</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="font-semibold  flex flex-col items-center">
        <h4 className={`${timeColor} font-extrabold text-xl`}>{time}</h4>
        <h4 className="text-sm">นาที</h4>
      </div>
    </div>
  );
}

export default Card;
