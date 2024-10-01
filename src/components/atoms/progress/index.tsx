export const Progress = ({ value }: { value: number }) => {
  return (
    <div className="w-full h-2 border rounded-full border-blue-500 overflow-hidden bg-white">
      <div className="h-full bg-blue-300" style={{ width: `${value}%` }}></div>
    </div>
  );
};
