
export default function UserProfile({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  );
}
