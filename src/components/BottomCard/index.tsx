import Card from "./Card";

const fakeTalaiBus = [
  { line: 1, nextStop: "ศาลาหกเหลี่ยม", time: 25 },
  { line: 2, nextStop: "อนุสาวรีย์วชิรานุสรณ์", time: 5 },
  { line: 3, nextStop: "อนุสาวรีย์วชิรานุสรณ์", time: 5 },
  { line: 4, nextStop: "อนุสาวรีย์วชิรานุสรณ์", time: 5 },
  { line: 5, nextStop: "ตรงข้ามคณะอุตสาหรกรรมการเกษตร", time: 5 },
];
function BottomCard() {
  return (
    <div className="fixed bottom-4 w-full">
      <div className="flex items-stretch  gap-4 overflow-x-scroll px-6">
        {fakeTalaiBus.map(({ line, nextStop, time }) => (
          <Card key={line} line={line} nextStop={nextStop} time={time} />
        ))}
      </div>
    </div>
  );
}

export default BottomCard;
